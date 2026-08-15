import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
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

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        label="Services"
        title="Focused teams for serious software builds."
        description="From first product decisions to shipped systems, the team covers the engineering lanes that matter most for modern digital products."
      />

      <section className="section split">
        <div>
          <p className="section-label">What we deliver</p>
          <h2>Engineering lanes for modern digital products.</h2>
          <p className="lede">
            WonderIT helps teams ship production software across web, mobile, automation, and
            real-time product categories without losing product clarity along the way.
          </p>
        </div>
        <div className="service-grid">
          {SERVICES.map((service) => (
            <article className="service" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
