import Link from "next/link";

export default function InsightsHero({
  postCount,
  topicCount,
  latestYear,
}: {
  postCount: number;
  topicCount: number;
  latestYear: string;
}) {
  return (
    <section className="insights-hero" aria-labelledby="insights-hero-title">
      <div className="insights-hero__inner">
        <nav className="work-crumb" aria-label="Breadcrumb">
          <Link href="/">WonderIT</Link>
          <span aria-hidden="true">›</span>
          <span>Insights</span>
        </nav>

        <div className="insights-hero__grid">
          <div className="insights-hero__copy">
            <p className="eyebrow">Field notes</p>
            <h1 id="insights-hero-title">Notes from the products we ship.</h1>
            <p className="lede">
              Practical writing on software engineering, AI-powered products,
              scalable architecture, and the decisions that hold up in
              production.
            </p>
          </div>

          <ul className="insights-hero__stats">
            <li>
              <strong>{postCount}</strong>
              <span>{postCount === 1 ? "Note" : "Notes"}</span>
            </li>
            <li>
              <strong>{topicCount}</strong>
              <span>{topicCount === 1 ? "Topic" : "Topics"}</span>
            </li>
            <li>
              <strong>{latestYear}</strong>
              <span>Latest year</span>
            </li>
            <li>
              <strong>Live</strong>
              <span>From the shop floor</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
