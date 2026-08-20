import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Cookie Policy | WonderIT",
  description:
    "Learn how WonderIT uses cookies for website functionality, analytics, performance, and security.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main>
      <PageIntro
        label="Legal"
        title="Cookie Policy"
        description="Last updated: June 2026"
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Cookie Policy" },
        ]}
      />
      <article className="legal-doc">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help improve
          website functionality and user experience.
        </p>

        <h2>How We Use Cookies</h2>
        <ul>
          <li>Website functionality</li>
          <li>Analytics and performance measurement</li>
          <li>Security and fraud prevention</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          Most browsers allow you to control or disable cookies through browser
          settings.
        </p>
      </article>
    </main>
  );
}
