import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { stackTags } from "@/lib/case-studies";

export default function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const href = `/case-studies/${study.slug}`;
  const tags = stackTags(study.stack, 3);
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="work-card-wrap">
      <Link className={`work-card${study.image ? " is-cover" : ""}`} href={href}>
        <div className="work-card__media">
          <span className="work-card__index" aria-hidden="true">
            {number}
          </span>
          {study.image ? (
            <img src={study.image} alt="" loading="lazy" />
          ) : (
            <div className="work-card__placeholder">
              <span>{study.client}</span>
            </div>
          )}
        </div>
        <div className="work-card__body">
          <span className="work-card__cat">{study.industry}</span>
          <h3>{study.client}</h3>
          <p>{study.title}</p>
          {tags.length ? (
            <ul className="work-tags work-tags--compact">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          <span className="work-card__cta">
            Read case study <i aria-hidden="true">→</i>
          </span>
        </div>
      </Link>
    </div>
  );
}
