"use client";

import { useEffect, useMemo, useState } from "react";
import {
  COMPANY_LOGOS,
  shuffleLogos,
  type CompanyLogo,
} from "../../lib/company-logos";

function isSvgLogo(url: string) {
  try {
    const path = new URL(url, "https://example.com").pathname.toLowerCase();
    return path.endsWith(".svg");
  } catch {
    return /\.svg(\?|$)/i.test(url);
  }
}

function detectLightLogo(img: HTMLImageElement): boolean | null {
  try {
    const canvas = document.createElement("canvas");
    const size = 48;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, size, size);
    const { data } = ctx.getImageData(0, 0, size, size);
    let light = 0;
    let dark = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 40) continue;
      const luma =
        (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114) / 1000;
      if (luma >= 208) light += 1;
      else if (luma <= 90) dark += 1;
    }
    if (light + dark < 10) return null;
    return light > dark * 1.25;
  } catch {
    return null;
  }
}

function LogoItem({ logo }: { logo: CompanyLogo }) {
  const [failed, setFailed] = useState(false);
  const [onDark, setOnDark] = useState(Boolean(logo.onDark));
  if (!logo.logoUrl || failed) return null;

  const svg = isSvgLogo(logo.logoUrl);

  return (
    <div className={`logo-marquee__item${onDark ? " is-light" : ""}`}>
      <div className="logo-marquee__brand">
        <div className="logo-marquee__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.logoUrl}
            alt={`${logo.name} logo`}
            className={`logo-marquee__img${svg ? " logo-marquee__img--svg" : ""}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            referrerPolicy="no-referrer"
            onLoad={(event) => {
              if (onDark || svg) return;
              const light = detectLightLogo(event.currentTarget);
              if (light) setOnDark(true);
            }}
            onError={() => setFailed(true)}
          />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  logos,
  reverse = false,
  duration,
}: {
  logos: CompanyLogo[];
  reverse?: boolean;
  duration: number;
}) {
  const track = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  return (
    <div className={`logo-marquee__viewport${reverse ? " is-reverse" : ""}`}>
      <div
        className="logo-marquee__track is-ready"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((logo, index) => (
          <LogoItem key={`${logo.id}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

type LogoMarqueeProps = {
  logos?: CompanyLogo[];
};

export default function LogoMarquee({
  logos: logosProp = COMPANY_LOGOS,
}: LogoMarqueeProps) {
  const sourceLogos = useMemo(
    () =>
      (logosProp.length ? logosProp : COMPANY_LOGOS).filter((logo) =>
        Boolean(logo.logoUrl),
      ),
    [logosProp],
  );

  const [logos, setLogos] = useState<CompanyLogo[]>(sourceLogos);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLogos(shuffleLogos(sourceLogos));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [sourceLogos]);

  if (!logos.length) return null;

  const mid = Math.ceil(logos.length / 2);
  const rowA = logos.slice(0, Math.max(mid, 3));
  const rowB = logos.length > 4 ? logos.slice(mid) : [...logos].reverse();

  return (
    <section
      className="logo-marquee"
      aria-label="Companies WonderIT has worked with"
    >
      {/* <div className="section logo-marquee__intro">
        <p className="section-label">Partners</p>
      </div> */}

      <div className="logo-marquee__stage">
        <MarqueeRow logos={rowA} duration={Math.max(28, rowA.length * 5)} />
        <MarqueeRow
          logos={rowB.length ? rowB : rowA}
          reverse
          duration={Math.max(34, (rowB.length || rowA.length) * 5.6)}
        />
      </div>
    </section>
  );
}
