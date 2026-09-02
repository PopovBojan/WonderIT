import type { Metadata } from "next";
import PageCta from "../components/PageCta";
import StudioCanvas from "../components/StudioCanvas";
import StudioHero from "../components/StudioHero";

export const metadata: Metadata = {
  title: "Industries | WonderIT Software Development",
  description:
    "Software development for sports tech, SaaS platforms, real-time operations, automation, and AI-enhanced business workflows.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | WonderIT Software Development",
    description:
      "Domain-aware software for sports tech, SaaS, real-time operations, logistics, automation, and AI workflows.",
    url: "https://wonderit.io/industries",
    type: "website",
    images: [{ url: "https://wonderit.io/opengraph-image" }],
  },
};

const DOMAINS = [
  {
    number: "01",
    tone: "violet",
    title: "Sports Tech",
    copy: "Performance tracking, coaching systems, athlete analytics, wearable integrations, and live sports data — software coaches and players actually open.",
    examples: ["Wearables", "Live data", "Coaching"],
  },
  {
    number: "02",
    tone: "aqua",
    title: "SaaS Platforms",
    copy: "Subscription products, admin consoles, secure APIs, dashboards, and cloud infrastructure built to survive the second and third year.",
    examples: ["Billing", "Admin", "APIs"],
  },
  {
    number: "03",
    tone: "coral",
    title: "Real-Time Operations",
    copy: "Fleet tracking, logistics software, monitoring tools, and synchronized data products for teams that cannot wait for a refresh.",
    examples: ["Fleet", "Logistics", "Monitoring"],
  },
  {
    number: "04",
    tone: "green",
    title: "Automation & AI",
    copy: "AI workflows, reporting systems, business process automation, and knowledge tools that take work off the operator — not add another dashboard.",
    examples: ["LLMs", "Reporting", "Workflows"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="studio-page industries-view">
      <StudioCanvas
        wordmark="FIELD"
        left={[
          { kind: "tick", text: "01", top: "8px" },
          { kind: "chip", text: "Sports", top: "28px" },
          { kind: "chip", text: "SaaS", top: "96px", tone: "aqua" },
          { kind: "tick", text: "03", top: "32%" },
          { kind: "chip", text: "Ops", top: "34%", tone: "coral" },
          { kind: "tick", text: "05", top: "66%" },
          { kind: "chip", text: "Automate", top: "68%" },
        ]}
        right={[
          { kind: "tick", text: "02", top: "12px" },
          { kind: "chip", text: "Domain", top: "52px", tone: "aqua" },
          { kind: "tick", text: "04", top: "40%" },
          { kind: "chip", text: "Operators", top: "42%" },
          { kind: "tick", text: "06", top: "72%" },
        ]}
      />

      <StudioHero
        current="Industries"
        eyebrow="Where we build"
        title="Software that knows the domain."
        lede="Sports tech, SaaS, logistics, and AI automation all need different product instincts. We build domain-aware software without turning every page into a wall of text."
        stats={[
          { value: "4", label: "Focus domains" },
          { value: "Ops", label: "Built for operators" },
          { value: "Live", label: "In the field" },
          { value: "AI", label: "Where it removes work" },
        ]}
      />

      <section className="studio-section" aria-labelledby="domains-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">The domains</p>
            <h2 id="domains-title">Different industries. Same standard of shipped software.</h2>
          </div>
          <p className="studio-section__lede">
            <strong>We learn the workflow first.</strong> The stack follows —
            React, Next.js, React Native, Node, and cloud, fitted to how the
            team actually works.
          </p>
        </div>

        <div className="domain-grid">
          {DOMAINS.map((domain) => (
            <article
              className="domain-card"
              data-tone={domain.tone}
              key={domain.number}
            >
              <span className="domain-card__index">{domain.number}</span>
              <h3>{domain.title}</h3>
              <p>{domain.copy}</p>
              <ul className="domain-card__tags">
                {domain.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <PageCta title="Building in sports, SaaS, logistics, or automation? Let's make the software specific." />
    </main>
  );
}
