"use client";

import dynamic from "next/dynamic";
import type { CompanyLogo } from "../../lib/company-logos";

const LogoMarquee = dynamic(() => import("./LogoMarquee"), {
  ssr: false,
  loading: () => (
    <section
      className="section logo-marquee"
      aria-label="Client logos"
      aria-hidden="true"
    >
      <div className="logo-marquee__viewport logo-marquee__viewport--loading" />
    </section>
  ),
});

export default function LogoMarqueeClient({
  logos,
}: {
  logos: CompanyLogo[];
}) {
  return <LogoMarquee logos={logos} />;
}
