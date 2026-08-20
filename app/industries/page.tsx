import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
import PageCta from "../components/PageCta";
import { INDUSTRIES } from "@/lib/site-content";

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

export default function IndustriesPage() {
  return (
    <main>
      <PageIntro
        label="Industries"
        title="Industries"
        description="Sports tech, SaaS, logistics, analytics, and AI automation all need different product instincts. WonderIT builds domain-aware software without turning every page into a wall of text."
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Industries" },
        ]}
      />

      <section className="section industries">
        <div className="industry-grid">
          {INDUSTRIES.map((industry) => (
            <article className="industry" key={industry.number}>
              <span className="industry-number">{industry.number}</span>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta title="Building in sports, SaaS, logistics, or automation? Let's make the software specific." />
    </main>
  );
}
