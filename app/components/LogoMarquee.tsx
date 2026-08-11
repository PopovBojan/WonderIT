"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

function LogoItem({ logo }: { logo: CompanyLogo }) {
  const [failed, setFailed] = useState(false);
  if (!logo.logoUrl || failed) return null;

  const svg = isSvgLogo(logo.logoUrl);

  return (
    <div className="logo-marquee__brand">
      <div className="logo-marquee__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.logoUrl}
          alt=""
          className={`logo-marquee__img${svg ? " logo-marquee__img--svg" : ""}`}
          loading="eager"
          decoding="async"
          draggable={false}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
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

  // Keep first paint identical on server + client; shuffle only after mount.
  const [logos, setLogos] = useState<CompanyLogo[]>(sourceLogos);
  const [ready, setReady] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLogos(shuffleLogos(sourceLogos));
    setReady(true);
  }, [sourceLogos]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    const setPaused = (paused: boolean) => {
      track.classList.toggle("is-paused", paused);
    };

    const applyManual = () => {
      const half = halfWidthRef.current;
      if (half > 0) {
        offsetRef.current = ((offsetRef.current % half) + half) % half;
      }
      track.classList.add("is-manual");
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const resumeAuto = () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        track.classList.remove("is-manual");
        track.style.removeProperty("transform");
        setPaused(false);
      }, 1200);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;
      if (!delta) return;
      event.preventDefault();
      measure();
      if (!track.classList.contains("is-manual")) {
        const style = window.getComputedStyle(track);
        const matrix = new DOMMatrixReadOnly(style.transform);
        offsetRef.current = -matrix.m41;
      }
      offsetRef.current += delta;
      applyManual();
      setPaused(true);
      resumeAuto();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      measure();
      if (!track.classList.contains("is-manual")) {
        const style = window.getComputedStyle(track);
        const matrix = new DOMMatrixReadOnly(style.transform);
        offsetRef.current = -matrix.m41;
      }
      draggingRef.current = true;
      dragStartXRef.current = event.clientX;
      dragStartOffsetRef.current = offsetRef.current;
      viewport.classList.add("is-dragging");
      setPaused(true);
      track.classList.add("is-manual");
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      viewport.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      const delta = event.clientX - dragStartXRef.current;
      offsetRef.current = dragStartOffsetRef.current - delta;
      applyManual();
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      viewport.classList.remove("is-dragging");
      try {
        viewport.releasePointerCapture(event.pointerId);
      } catch {
        // ignore
      }
      resumeAuto();
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);

    return () => {
      ro.disconnect();
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [logos]);

  const track = useMemo(() => [...logos, ...logos], [logos]);
  const durationSec = Math.max(28, logos.length * 2.2);

  if (!logos.length) return null;

  return (
    <section className="section logo-marquee" aria-label="Client logos">
      <div ref={viewportRef} className="logo-marquee__viewport">
        <div
          ref={trackRef}
          className={`logo-marquee__track${ready ? " is-ready" : ""}`}
          style={{ animationDuration: `${durationSec}s` }}
        >
          {track.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-marquee__item">
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
