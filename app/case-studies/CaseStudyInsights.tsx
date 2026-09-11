import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyInsights({
  study,
}: {
  study: CaseStudy;
}) {
  const notes = study.relatedInsights;
  if (!notes?.length) return null;

  return (
    <section className="case-study-section case-insights" aria-labelledby="insights-title">
      <div className="case-study-section__head">
        <p className="section-label">Insights</p>
        <h2 id="insights-title">In-depth notes from this work.</h2>
      </div>
      <p className="case-insights__lede">
        The case study is the product story. These Insights pieces go further
        into the architecture and product decisions — the in-depth version of
        how we built it.
      </p>

      <div className="case-insights__grid">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            className="case-insight"
            href={`/blog/${note.slug}`}
          >
            <span className="case-insight__top">
              <span className="case-insight__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="case-insight__label">Insight</span>
            </span>
            <h3>{note.title}</h3>
            <span className="case-insight__cta">
              Read this note
              <i aria-hidden="true">→</i>
            </span>
          </Link>
        ))}
      </div>

      <p className="case-insights__more">
        <Link className="project-link" href="/blog">
          All Insights
          <span aria-hidden="true"> →</span>
        </Link>
      </p>
    </section>
  );
}
