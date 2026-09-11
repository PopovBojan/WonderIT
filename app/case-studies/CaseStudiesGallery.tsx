import type { CaseStudy } from "@/lib/case-studies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesGallery({
  studies,
}: {
  studies: CaseStudy[];
}) {
  if (!studies.length) return null;

  return (
    <section className="work-studio" aria-labelledby="case-studio-title">
      <div className="work-studio__head">
        <div>
          <p className="section-label">All stories</p>
          <h2 id="case-studio-title">A wider look at how we build.</h2>
        </div>
        <p className="work-studio__lede">
          <strong>Each card is a shipped product</strong> written up as a case
          study — not a gallery thumbnail.
        </p>
      </div>

      <div className="work-grid">
        {studies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}
