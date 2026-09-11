import Link from "next/link";

export default function CaseStudiesHero() {
  return (
    <section className="work-hero" aria-labelledby="case-studies-hero-title">
      <div className="work-hero__inner">
        <nav className="work-crumb" aria-label="Breadcrumb">
          <Link href="/">WonderIT</Link>
          <span aria-hidden="true">›</span>
          <span>Case studies</span>
        </nav>

        <p className="eyebrow">Field stories</p>
        <h1 id="case-studies-hero-title">
          How we ship software that operators can trust.
        </h1>
        <p className="lede">
          Longer looks at products we built for coaches, clubs, and field teams —
          real-time systems, mobile craft, and domain UX that has to work in the
          field.
        </p>
      </div>
    </section>
  );
}
