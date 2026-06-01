import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
import { INDUSTRIES } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Industries | WonderIT Software Development",
  description:
    "Software development for sports tech, SaaS platforms, real-time operations, automation, and AI-enhanced business workflows.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageIntro
        label="Industries"
        title="Where the work gets specific."
        description="Sports tech, SaaS, logistics, analytics, and AI automation all need different product instincts. WonderIT builds domain-aware software without turning every page into a wall of text."
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
    </main>
  );
}
