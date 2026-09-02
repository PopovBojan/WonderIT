import type { ReactNode } from "react";
import Link from "next/link";

export default function StudioHero({
  current,
  eyebrow,
  title,
  lede,
  stats,
}: {
  current: string;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="studio-hero" aria-labelledby="studio-hero-title">
      <div className="studio-hero__inner">
        <nav className="work-crumb" aria-label="Breadcrumb">
          <Link href="/">WonderIT</Link>
          <span aria-hidden="true">›</span>
          <span>{current}</span>
        </nav>

        <div className="studio-hero__grid">
          <div className="studio-hero__copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 id="studio-hero-title">{title}</h1>
            <p className="lede">{lede}</p>
          </div>

          <ul className="studio-hero__stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
