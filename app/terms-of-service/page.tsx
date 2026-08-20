import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Terms of Service | WonderIT",
  description:
    "Review the terms that apply when accessing and using the WonderIT website.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <PageIntro
        label="Legal"
        title="Terms of Service"
        description="Last updated: June 2026"
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Terms of Service" },
        ]}
      />
      <article className="legal-doc">
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using this website, you agree to these Terms of Service.</p>

        <h2>Website Content</h2>
        <p>All content on this website is provided for informational purposes only.</p>

        <h2>Intellectual Property</h2>
        <p>
          All text, graphics, branding, code samples, and materials are owned by
          WonderIT unless otherwise stated.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          WonderIT shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of this website.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their content or practices.
        </p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time.</p>

        <h2>Contact</h2>
        <p>
          Questions regarding these terms may be submitted through our Contact
          page.
        </p>
      </article>
    </main>
  );
}
