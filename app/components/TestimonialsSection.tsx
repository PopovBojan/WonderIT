"use client";

import TestimonialsCarousel from "./TestimonialsCarousel";
import type { CompanyLogo } from "../../lib/company-logos";
import type { Testimonial } from "../../lib/site-content";

type Props = {
  items: Testimonial[];
  logos: CompanyLogo[];
};

/** Thin client boundary so the homepage stays a server component. */
export default function TestimonialsSection({ items, logos }: Props) {
  return <TestimonialsCarousel items={items} logos={logos} />;
}
