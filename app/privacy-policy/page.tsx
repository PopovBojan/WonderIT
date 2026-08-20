import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy | WonderIT",
  description:
    "Learn how WonderIT collects, uses, and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageIntro
        label="Legal"
        title="Privacy Policy"
        description="Last updated: June 2026"
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Privacy Policy" },
        ]}
      />
      <article className="legal-doc">
        <h2>Introduction</h2>
        <p>
          WonderIT (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is
          committed to protecting your personal information.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Company information (if provided)</li>
          <li>Analytics and website usage data</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Respond to inquiries</li>
          <li>Provide requested services</li>
          <li>Improve website performance</li>
          <li>Communicate regarding projects</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect personal information.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party providers such as hosting, analytics, email,
          and cloud infrastructure services.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information by contacting us.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related requests, please contact us through our Contact
          page.
        </p>
      </article>
    </main>
  );
}
