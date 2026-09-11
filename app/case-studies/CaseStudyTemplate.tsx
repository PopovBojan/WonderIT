import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { stackTags } from "@/lib/case-studies";

const APPROACH_TONES = ["violet", "aqua", "coral", "green"] as const;

function RichText({ value, className }: { value: string; className?: string }) {
  if (!value) return null;
  if (/<[a-z][\s\S]*>/i.test(value)) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }
  return (
    <div className={className}>
      {value.split(/\n\n+/).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  const tags = stackTags(study.stack, 10);
  const glance = [
    { label: "Client", value: study.client },
    { label: "Industry", value: study.industry },
    { label: "Product", value: study.product },
    { label: "Focus", value: study.focus },
  ].filter((item) => item.value);

  return (
    <>
      <section className="work-hero case-study-hero" aria-labelledby="case-study-title">
        <div className="work-hero__inner">
          <nav className="work-crumb" aria-label="Breadcrumb">
            <Link href="/">WonderIT</Link>
            <span aria-hidden="true">›</span>
            <Link href="/case-studies">Case studies</Link>
            <span aria-hidden="true">›</span>
            <span>{study.client}</span>
          </nav>

          <p className="eyebrow">{study.client}</p>
          <h1 id="case-study-title">{study.title}</h1>
          {study.lede || study.product ? (
            <p className="lede">{study.lede || study.product}</p>
          ) : null}

          {glance.length ? (
            <ul className="case-glance">
              {glance.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {tags.length ? (
            <ul className="work-tags case-study-stack">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}

          {study.liveUrl ? (
            <p className="case-study-live">
              <a
                className="project-link"
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live product
                <span aria-hidden="true"> →</span>
              </a>
            </p>
          ) : null}
        </div>
      </section>

      {study.overview ? (
        <section className="case-study-section" aria-labelledby="overview-title">
          <div className="case-study-section__head">
            <p className="section-label">Overview</p>
            <h2 id="overview-title">What we were asked to build.</h2>
          </div>
          <RichText value={study.overview} className="case-study-prose case-study-prose--full" />
        </section>
      ) : null}

      {study.capabilities?.length ? (
        <section className="case-study-section" aria-labelledby="capabilities-title">
          <div className="case-study-section__head">
            <p className="section-label">Capabilities</p>
            <h2 id="capabilities-title">
              {study.capabilitiesHeading ||
                "What the product does on the pitch."}
            </h2>
          </div>
          <div className="domain-grid case-approach-grid">
            {study.capabilities.map((item, index) => (
              <article
                className="domain-card"
                data-tone={APPROACH_TONES[index % APPROACH_TONES.length]}
                key={item.heading}
              >
                <span className="domain-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {study.problem || study.goals.length ? (
        <section className="case-study-section" aria-labelledby="problem-title">
          <div className="case-split">
            {study.problem ? (
              <article className="case-panel">
                <p className="section-label">The problem</p>
                <h2 id="problem-title">What had to change.</h2>
                <RichText value={study.problem} className="case-study-prose" />
              </article>
            ) : null}
            {study.goals.length ? (
              <article className="case-panel">
                <p className="section-label">Goals</p>
                <h2>What success looked like.</h2>
                <ul className="case-list">
                  {study.goals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}

      {study.principles?.length ? (
        <section className="case-study-section" aria-labelledby="principles-title">
          <div className="case-study-section__head">
            <p className="section-label">Constraints</p>
            <h2 id="principles-title">
              {study.principlesHeading || "The rules we would not break."}
            </h2>
          </div>
          <div className="domain-grid case-approach-grid">
            {study.principles.map((item, index) => (
              <article
                className="domain-card"
                data-tone={APPROACH_TONES[index % APPROACH_TONES.length]}
                key={item.heading}
              >
                <span className="domain-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {study.approach.length ? (
        <section className="case-study-section" aria-labelledby="approach-title">
          <div className="case-study-section__head">
            <p className="section-label">Approach</p>
            <h2 id="approach-title">How we structured the work.</h2>
          </div>
          <div className="domain-grid case-approach-grid">
            {study.approach.map((item, index) => (
              <article
                className="domain-card"
                data-tone={APPROACH_TONES[index % APPROACH_TONES.length]}
                key={item.heading}
              >
                <span className="domain-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {study.shipped.length || study.engineering.length ? (
        <section className="case-study-section" aria-labelledby="shipped-title">
          <div className="case-split">
            {study.shipped.length ? (
              <article className="case-panel">
                <p className="section-label">What shipped</p>
                <h2 id="shipped-title">In the product today.</h2>
                <ul className="case-list">
                  {study.shipped.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}
            {study.engineering.length ? (
              <article className="case-panel">
                <p className="section-label">Engineering</p>
                <h2>How it holds together.</h2>
                <ul className="case-list">
                  {study.engineering.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}

      {study.results ? (
        <section className="case-results" aria-labelledby="results-title">
          <p className="section-label">Results</p>
          <h2 id="results-title">What it became in production.</h2>
          <RichText value={study.results} className="case-study-prose" />
          {study.outcomes?.length ? (
            <ul className="case-list case-results__list">
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {study.stories?.length ? (
        <>
          {study.storiesHeading || study.storiesIntro ? (
            <section
              className="case-study-section"
              aria-labelledby="stories-title"
            >
              <div className="case-study-section__head">
                <p className="section-label">Case studies</p>
                <h2 id="stories-title">
                  {study.storiesHeading ||
                    "Three stories from the same product."}
                </h2>
              </div>
              {study.storiesIntro ? (
                <RichText
                  value={study.storiesIntro}
                  className="case-study-prose case-study-prose--full"
                />
              ) : null}
            </section>
          ) : null}
          {study.stories.map((story, index) => (
              <section
                className="case-study-section case-story"
                aria-labelledby={`story-${index}-title`}
                key={story.title}
              >
                <div className="case-study-section__head">
                  <p className="section-label">{story.label}</p>
                  <h2 id={`story-${index}-title`}>{story.title}</h2>
                </div>
                <RichText
                  value={story.situation}
                  className="case-study-prose case-study-prose--full case-story__situation"
                />
                <div className="case-split">
                  <article className="case-panel">
                    <p className="section-label">What we decided</p>
                    <h2>How we approached it.</h2>
                    <RichText
                      value={story.decided}
                      className="case-study-prose"
                    />
                  </article>
                  <article className="case-panel">
                    <p className="section-label">What we built</p>
                    <h2>In the product today.</h2>
                    <ul className="case-list">
                      {story.built.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>
                <div className="case-split">
                  <article className="case-panel">
                    <p className="section-label">Result</p>
                    <h2>What we could stand behind.</h2>
                    <RichText
                      value={story.result}
                      className="case-study-prose"
                    />
                  </article>
                  <article className="case-panel">
                    <p className="section-label">What this demonstrates</p>
                    <h2>What you can take from this.</h2>
                    <RichText
                      value={story.demonstrates}
                      className="case-study-prose"
                    />
                  </article>
                </div>
              </section>
          ))}
        </>
      ) : null}

      {study.whyItMatters ? (
        <section className="case-study-section" aria-labelledby="matters-title">
          <div className="case-study-section__head">
            <p className="section-label">Why this matters</p>
            <h2 id="matters-title">What future clients can take from this.</h2>
          </div>
          <RichText value={study.whyItMatters} className="case-study-prose" />
        </section>
      ) : null}
    </>
  );
}
