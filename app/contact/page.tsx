import { Metadata } from "next";
import CalendlyEmbed from "../components/CalendlyEmbed";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Contact WonderIT | Start a Software Project",

  description:
    "Contact WonderIT to discuss a custom web platform, mobile app, SaaS product, real-time system, or AI automation project.",

  keywords: [
    "contact wonderIT",
    "software development contact",
    "web development company contact",
    "mobile app development contact",
    "custom software consultation",
    "React development company",
    "Next.js development agency",
    "React Native developers",
    "SaaS development services",
    "AI software development",
    "automation systems development",
    "enterprise software solutions",
    "startup software development",
    "custom web applications",
    "digital product consultation",
  ],

  metadataBase: new URL("https://wonderit.io"),

  alternates: {
    canonical: "/contact",
  },

  authors: [{ name: "wonderIT" }],
  creator: "wonderIT",
  publisher: "wonderIT",

  openGraph: {
    title: "Contact wonderIT | Web, Mobile & AI-Enhanced Software Development",

    description:
      "Talk with wonderIT about building scalable web apps, mobile applications, SaaS products, automation tools, and AI-powered software solutions.",

    url: "https://wonderit.io/contact",

    siteName: "wonderIT",

    images: [
      {
        url: "https://wonderit.io/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact wonderIT",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact wonderIT | Custom Software & App Development Team",

    description:
      "Reach out to wonderIT for custom software development, mobile apps, SaaS platforms, automation systems, and AI integrations.",

    images: ["https://wonderit.io/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        label="Contact"
        title="Let's connect."
        description="Ready to start your next project? Get in touch and we'll help turn it into production software."
      />

      <section className="section split">
        <div>
          <p className="section-label">Details</p>
          <h2>Contact information.</h2>
          <p className="lede">
            Whether you have a question about features, pricing, or a new build,
            the team is ready to answer it.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+389 (77) 631-316</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0 1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>hello@wonderit.io</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3>Office</h3>
                <p>Veniamin Machukovski 1, Skopje, North Macedonia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-calendly">
          <CalendlyEmbed />
        </div>
      </section>
    </main>
  );
}
