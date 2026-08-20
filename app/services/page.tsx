import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
import PageCta from "../components/PageCta";
import { SERVICES } from "@/lib/site-content";

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
    <main>
      <PageIntro
        label="Services"
        title="What we do"
        description="From first product decisions to shipped systems, the team covers the engineering lanes that matter most for modern digital products."
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Services" },
        ]}
      />

      <section className="section services-page">
        <div className="service-grid service-grid--page">
          {SERVICES.map((service) => (
            <article className="service" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-band" aria-labelledby="process-title">
        <p className="section-label">How we work</p>
        <h2 id="process-title">A short path from idea to production.</h2>
        <div className="process-grid">
          {PROCESS.map((step) => (
            <article className="process-card" key={step.index}>
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
