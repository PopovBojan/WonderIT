"use client";

import { useEffect, useMemo, useState } from "react";
import type { CompanyLogo } from "../../lib/company-logos";
import type { Testimonial } from "../../lib/site-content";
import "./testimonials.css";

const AUTO_SCROLL_MS = 3000;

const FALLBACK_QUOTES = [
  {
    headline: "Built for real users",
    quote:
      "WonderIT shipped software our team could put in front of customers quickly, then kept improving the parts people open every day.",
    name: "Product partner",
    role: "Custom software engagement",
    rating: 5,
  },
  {
    headline: "Clear delivery, solid systems",
    quote:
      "They stayed close to the product decisions and the engineering details. The result felt production-ready, not like a prototype.",
    name: "Operations lead",
    role: "Platform collaboration",
    rating: 5,
  },
  {
    headline: "Reliable from first release",
    quote:
      "Scope stayed clear, communication stayed direct, and the system held up once real users started depending on it.",
    name: "Founder",
    role: "Product build",
    rating: 5,
  },
];

function RatingStars({ rating, label }: { rating: number; label: string }) {
  const clamped = Math.min(5, Math.max(1, Math.round(rating)));

  return (
    <div className="testimonial-stars" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={index < clamped ? "is-filled" : undefined}
          viewBox="0 0 20 20"
          width="18"
          height="18"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M10 1.6l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 13.7l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}

function matchTestimonial(company: string, items: Testimonial[]) {
  const key = company.trim().toLowerCase();
  return items.find((item) => {
    const name = item.company.trim().toLowerCase();
    return name === key || name.includes(key) || key.includes(name);
  });
}

function isSvgLogo(url: string) {
  try {
    const path = new URL(url, "https://example.com").pathname.toLowerCase();
    return path.endsWith(".svg");
  } catch {
    return /\.svg(\?|$)/i.test(url);
  }
}

/** Dark wordmarks that disappear on the navy avatar circle. */
const DARK_LOGO_NAMES = new Set([
  "pufinid",
  "pufin",
  "byondxr",
  "byond xr",
  "genentech",
  "starmagic",
  "star magic",
]);

function needsLightLogo(company: string, logoUrl?: string) {
  const key = company.trim().toLowerCase().replace(/\s+/g, "");
  if (DARK_LOGO_NAMES.has(key) || DARK_LOGO_NAMES.has(company.trim().toLowerCase())) {
    return true;
  }
  // Fallback: known dark SVG wordmarks often need the same treatment as the marquee.
  if (!logoUrl) return false;
  const lower = logoUrl.toLowerCase();
  return (
    isSvgLogo(logoUrl) &&
    (lower.includes("pufin") || lower.includes("byond"))
  );
}

function CompanyLogoMark({
  company,
  logoUrl,
}: {
  company: string;
  logoUrl?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!logoUrl || failed) {
    return (
      <div className="testimonial-logo testimonial-logo-fallback" aria-hidden="true">
        <span>{company}</span>
      </div>
    );
  }

  const light = needsLightLogo(company, logoUrl);

  return (
    <div className={light ? "testimonial-logo is-light-logo" : "testimonial-logo"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className="testimonial-logo-img"
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

type Slide = {
  id: string;
  company: string;
  logoUrl?: string;
  quote: string;
  name: string;
  role: string;
  headline: string;
  rating: number;
};

export default function TestimonialsCarousel({
  items,
  logos = [],
}: {
  items: Testimonial[];
  logos?: CompanyLogo[];
}) {
  const slides = useMemo<Slide[]>(() => {
    const source = logos.filter((logo) => Boolean(logo.logoUrl || logo.name));
    if (!source.length) {
      return items.map((item) => ({
        id: item.id,
        company: item.company,
        logoUrl: item.logoUrl,
        quote: item.quote,
        name: item.name,
        role: item.role,
        headline: item.headline,
        rating: item.rating,
      }));
    }

    return source.map((logo, index) => {
      const matched = matchTestimonial(logo.name, items);
      const fallback = FALLBACK_QUOTES[index % FALLBACK_QUOTES.length];
      return {
        id: logo.id,
        company: logo.name,
        logoUrl: logo.logoUrl,
        quote: matched?.quote ?? fallback.quote,
        name: matched?.name ?? fallback.name,
        role: matched?.role ?? fallback.role,
        headline: matched?.headline ?? fallback.headline,
        rating: matched?.rating ?? fallback.rating,
      };
    });
  }, [items, logos]);

  const count = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTO_SCROLL_MS);
    return () => window.clearInterval(id);
  }, [paused, count, active]);

  if (!count) return null;

  return (
    <div className="testimonial-band">
      <div
        className="testimonial-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="testimonial-viewport">
          <div
            className="testimonial-track"
          >
            {slides.map((item, index) => (
              <article
                key={item.id}
                className={
                  index === active
                    ? "testimonial-slide is-active"
                    : "testimonial-slide"
                }
                aria-hidden={index !== active}
              >
                <div className="testimonial-card-frame">
                  <div className="testimonial-avatar-col">
                    <div className="testimonial-avatar-ring">
                      <CompanyLogoMark
                        company={item.company}
                        logoUrl={item.logoUrl}
                      />
                    </div>
                  </div>

                  <div className="testimonial-card-copy">
                    <span
                      className="testimonial-mark testimonial-mark-open"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    <div className="testimonial-meta">
                      <p className="testimonial-byline">
                        <strong>{item.company}</strong>
                        <span>{` - ${item.name}, ${item.role}`}</span>
                      </p>
                      <RatingStars
                        rating={item.rating}
                        label={`${item.rating} out of 5 stars`}
                      />
                    </div>

                    <h3 className="testimonial-headline">{item.headline}</h3>
                    <p className="testimonial-body">{item.quote}</p>

                    <span
                      className="testimonial-mark testimonial-mark-close"
                      aria-hidden="true"
                    >
                      &rdquo;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-controls">
          <div
            className="testimonial-progress-rail"
            role="tablist"
            aria-label="Client companies"
          >
            {slides.map((entry, index) => {
              const isActive = index === active;
              return (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${entry.company} testimonial`}
                  className={
                    isActive
                      ? "testimonial-progress-seg is-active"
                      : "testimonial-progress-seg"
                  }
                  onClick={() => setActive(index)}
                >
                  <span
                    className={
                      isActive && !paused
                        ? "testimonial-progress-fill is-running"
                        : isActive
                          ? "testimonial-progress-fill is-paused"
                          : "testimonial-progress-fill"
                    }
                    key={isActive ? `${entry.id}-${active}-${paused}` : entry.id}
                    style={
                      isActive
                        ? { animationDuration: `${AUTO_SCROLL_MS}ms` }
                        : undefined
                    }
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
