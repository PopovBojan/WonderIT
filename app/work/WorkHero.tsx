import Link from "next/link";

export default function WorkHero({
  projectCount,
  categoryCount,
  techCount,
}: {
  projectCount: number;
  categoryCount: number;
  techCount: number;
}) {
  return (
    <section className="work-hero" aria-labelledby="work-hero-title">
      <div className="work-hero__inner">
        <nav className="work-crumb" aria-label="Breadcrumb">
          <Link href="/">WonderIT</Link>
          <span aria-hidden="true">›</span>
          <span>Work</span>
        </nav>

        <div className="work-hero__grid">
          <div className="work-hero__copy">
            <p className="eyebrow">Selected work</p>
            <h1 id="work-hero-title">
              Software we shipped for real operators.
            </h1>
            <p className="lede">
              Web platforms, mobile apps, SaaS, and AI-enhanced products built
              with React, Next.js, React Native, Node.js, and cloud — for teams
              who live in the software every day.
            </p>
          </div>

          <ul className="work-hero__stats">
            <li>
              <strong>{projectCount}</strong>
              <span>Shipped projects</span>
            </li>
            <li>
              <strong>{categoryCount}</strong>
              <span>Product types</span>
            </li>
            <li>
              <strong>{techCount}+</strong>
              <span>Technologies</span>
            </li>
            <li>
              <strong>Live</strong>
              <span>In production</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
