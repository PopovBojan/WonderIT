import Link from "next/link";
import { featuredCaseStudies, type CaseStudy } from "@/lib/case-studies";

export default function HomeCaseStudies({ studies }: { studies: CaseStudy[] }) {
  const featured = featuredCaseStudies(studies, 2);
  if (!featured.length) return null;

  return (
    <section
      id="case-studies"
      className="section portfolio case-studies-home"
      aria-labelledby="case-studies-home-title"
    >
      <div className="portfolio-head">
        <div>
          <p className="section-label">Case studies</p>
          <h2 id="case-studies-home-title">
            Stories from products that had to{" "}
            <span className="gradient-text">work in the field.</span>
          </h2>
        </div>
        <p className="lede-black">
          Longer looks at products we shipped for operators who live in the
          software every day.{" "}
          <Link href="/case-studies" className="project-link">
            All case studies
          </Link>
        </p>
      </div>

      <div className="project-grid home-case-studies">
        {featured.map((study) => (
          <article className="project-card" key={study.slug}>
            <div className="project-media project-media--cover">
              {study.image ? (
                <img src={study.image} alt={study.imageAlt || study.client} loading="lazy" />
              ) : null}
            </div>
            <div className="project-body">
              <span className="project-kicker">{study.industry}</span>
              <h3>{study.client}</h3>
              <p>{study.title}</p>
              <Link className="project-link" href={`/case-studies/${study.slug}`}>
                Read case study
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="case-studies-home__action">
        <Link className="button primary" href="/case-studies">
          All case studies
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
