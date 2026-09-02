import { Metadata } from "next";
import CalendlyEmbed from "../components/CalendlyEmbed";
import StudioCanvas from "../components/StudioCanvas";
import StudioHero from "../components/StudioHero";

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

const BRING = [
  "The workflow you want to replace — even if it is a spreadsheet.",
  "Who will use the product every day, not just who is buying it.",
  "What “done” looks like for the first useful version.",
];

export default function ContactPage() {
  return (
    <main className="studio-page contact-view">
      <StudioCanvas
        wordmark="HELLO"
        left={[
          { kind: "tick", text: "01", top: "8px" },
          { kind: "chip", text: "Call", top: "28px" },
          { kind: "chip", text: "Write", top: "96px", tone: "aqua" },
          { kind: "tick", text: "03", top: "32%" },
          { kind: "chip", text: "Book", top: "34%", tone: "coral" },
          { kind: "tick", text: "05", top: "66%" },
          { kind: "chip", text: "Build", top: "68%" },
        ]}
        right={[
          { kind: "tick", text: "02", top: "12px" },
          { kind: "chip", text: "Talk", top: "52px", tone: "aqua" },
          { kind: "tick", text: "04", top: "40%" },
          { kind: "chip", text: "Skopje", top: "42%" },
          { kind: "tick", text: "06", top: "72%" },
        ]}
      />

      <StudioHero
        current="Contact"
        eyebrow="Start a conversation"
        title="Tell us what you want to ship."
        lede="Ready to start your next project? Reach out or book a call — we'll help turn it into production software."
        stats={[
          { value: "1d", label: "Typical reply" },
          { value: "Call", label: "Book a slot" },
          { value: "MK", label: "Based in Skopje" },
          { value: "Live", label: "Same team you meet" },
        ]}
      />

      <section className="studio-section contact-board" aria-labelledby="contact-title">
        <div className="contact-board__copy">
          <p className="section-label">Details</p>
          <h2 id="contact-title">Contact information.</h2>
          <p className="lede">
            Whether you have a question about features, pricing, or a new build,
            the team is ready to answer it.
          </p>

          <div className="reach-grid">
            <a className="reach-card" href="tel:+38977631316">
              <span className="reach-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <span>
                <strong>Phone</strong>
                <em>+389 (77) 631-316</em>
              </span>
            </a>
            <a className="reach-card" href="mailto:hello@wonderit.io">
              <span className="reach-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0 1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <span>
                <strong>Email</strong>
                <em>hello@wonderit.io</em>
              </span>
            </a>
            <a
              className="reach-card"
              href="https://maps.google.com/?q=Veniamin+Machukovski+1,+Skopje"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="reach-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <span>
                <strong>Office</strong>
                <em>Veniamin Machukovski 1, Skopje, North Macedonia</em>
              </span>
            </a>
          </div>

          <div className="bring-card">
            <p className="section-label">What to bring</p>
            <h3>A useful first call does not need a spec.</h3>
            <ol>
              {BRING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="contact-board__book">
          <p className="section-label">Book a call</p>
          <h2>Pick a time that works.</h2>
          <div className="contact-calendly">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
