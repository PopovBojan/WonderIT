import type { Metadata } from "next";
import PageCta from "../components/PageCta";
import StudioCanvas from "../components/StudioCanvas";
import StudioHero from "../components/StudioHero";

export const metadata: Metadata = {
  title: "Services | WonderIT Software Development",
  description:
    "Custom web platforms, mobile applications, AI automation, and real-time systems built with React, Next.js, React Native, and Node.js.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | WonderIT Software Development",
    description:
      "Custom web platforms, mobile applications, AI automation, and real-time systems built for production.",
    url: "https://wonderit.io/services",
    type: "website",
    images: [{ url: "https://wonderit.io/opengraph-image" }],
  },
};

const LANES = [
  {
    index: "01",
    tone: "violet",
    title: "Custom Web Platforms",
    copy: "React and Next.js applications with secure APIs, dashboards, portals, and internal tools that operators can live in every day.",
    tags: ["React", "Next.js", "Node.js", "Dashboards"],
  },
  {
    index: "02",
    tone: "aqua",
    title: "Mobile Applications",
    copy: "React Native apps for iOS and Android — resilient data flows, polished product UX, and the same team from prototype to store.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    index: "03",
    tone: "coral",
    title: "AI & Automation",
    copy: "LLM integrations, spreadsheet automation, reporting systems, and workflow accelerators that remove real operational work.",
    tags: ["LLMs", "Workflows", "Reporting"],
  },
  {
    index: "04",
    tone: "green",
    title: "Real-Time Systems",
    copy: "Live dashboards, logistics tools, WebSocket applications, monitoring, and analytics products that stay in sync.",
    tags: ["WebSockets", "Tracking", "Analytics"],
  },
];

const PROCESS = [
  {
    index: "01",
    title: "Discover",
    copy: "Map the workflow, the users, and the smallest useful version of the product.",
  },
  {
    index: "02",
    title: "Design",
    copy: "Shape the interface and architecture together so the system can actually be built.",
  },
  {
    index: "03",
    title: "Ship",
    copy: "Release production software with the same team that made the first decisions.",
  },
  {
    index: "04",
    title: "Scale",
    copy: "Tighten what operators use every day, then grow the platform around it.",
  },
];

export default function ServicesPage() {
  return (
    <main className="studio-page services-view">
      <StudioCanvas
        wordmark="BUILD"
        left={[
          { kind: "tick", text: "01", top: "8px" },
          { kind: "chip", text: "Discover", top: "28px" },
          { kind: "chip", text: "Design", top: "96px", tone: "aqua" },
          { kind: "tick", text: "03", top: "32%" },
          { kind: "chip", text: "Ship", top: "34%", tone: "coral" },
          { kind: "tick", text: "05", top: "66%" },
          { kind: "chip", text: "Scale", top: "68%" },
        ]}
        right={[
          { kind: "tick", text: "02", top: "12px" },
          { kind: "chip", text: "Web", top: "52px", tone: "aqua" },
          { kind: "tick", text: "04", top: "40%" },
          { kind: "chip", text: "Mobile", top: "42%" },
          { kind: "tick", text: "06", top: "72%" },
        ]}
      />

      <StudioHero
        current="Services"
        eyebrow="What we do"
        title="Engineering lanes that ship."
        lede="From first product decisions to production systems — web, mobile, AI, and real-time software built by one team that stays on the work."
        stats={[
          { value: "4", label: "Engineering lanes" },
          { value: "4", label: "Steps to production" },
          { value: "RN", label: "Web and mobile" },
          { value: "Live", label: "Not a slide deck" },
        ]}
      />

      <section className="studio-section" aria-labelledby="lanes-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">The lanes</p>
            <h2 id="lanes-title">The work we take from idea to production.</h2>
          </div>
          <p className="studio-section__lede">
            <strong>Four focused lanes.</strong> Each one is a shipped product
            type — not a menu of everything a software company might theoretically do.
          </p>
        </div>

        <div className="lane-grid">
          {LANES.map((lane) => (
            <article
              className="lane-card"
              data-tone={lane.tone}
              key={lane.title}
            >
              <span className="lane-card__index">{lane.index}</span>
              <h3>{lane.title}</h3>
              <p>{lane.copy}</p>
              <ul className="lane-card__tags">
                {lane.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section studio-section--tight" aria-labelledby="process-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">How we work</p>
            <h2 id="process-title">A short path from idea to production.</h2>
          </div>
          <p className="studio-section__lede">
            The same people who hear the brief write the architecture, ship the
            first version, and stay for the next one.
          </p>
        </div>

        <div className="path-grid">
          {PROCESS.map((step) => (
            <article className="path-card" key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta title="Need a web, mobile, or AI product in production — not another slide deck?" />
    </main>
  );
}
