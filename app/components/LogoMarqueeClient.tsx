"use client";

import dynamic from "next/dynamic";
import type { CompanyLogo } from "../../lib/company-logos";

const LogoMarquee = dynamic(() => import("./LogoMarquee"), {
  ssr: false,
  loading: () => (
    <section
      className="logo-marquee"
      aria-label="Client logos"
      aria-hidden="true"
    >
      <div className="section logo-marquee__intro">
        <p className="section-label">Partners</p>
      </div>
      <div className="logo-marquee__stage">
        <div className="logo-marquee__viewport logo-marquee__viewport--loading" />
        <div className="logo-marquee__viewport logo-marquee__viewport--loading" />
      </div>
    </section>
  ),
});

export default function LogoMarqueeClient({ logos }: { logos: CompanyLogo[] }) {
  return <LogoMarquee logos={logos} />;
}
