import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

function PaperCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const href = `/case-studies/${study.slug}`;
  const number = String(index + 1).padStart(2, "0");
  const titleId = `case-paper-${study.slug}`;

  return (
    <Link
      className="case-paper"
      href={href}
      aria-labelledby={titleId}
    >
      <div className="case-paper__top">
        <span className="case-paper__num" aria-hidden="true">
          {number}
        </span>
        <span className="case-paper__label">Case study</span>
      </div>

      <h2 id={titleId}>{study.title}</h2>
      <p className="case-paper__client">{study.client}</p>

      <figure className="case-paper__figure">
        {study.image ? (
          <img
            src={study.image}
            alt={study.imageAlt || study.client}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <span className="case-paper__placeholder">{study.client}</span>
        )}
      </figure>

      <span className="case-paper__cta">
        Open this study
        <i aria-hidden="true">→</i>
      </span>
    </Link>
  );
}

export default function CaseStudiesFeatured({
  studies,
}: {
  studies: CaseStudy[];
}) {
  if (!studies.length) return null;

  return (
    <section className="case-paper-row" aria-label="Case studies">
      {studies.map((study, index) => (
        <PaperCard key={study.slug} study={study} index={index} />
      ))}
    </section>
  );
}
