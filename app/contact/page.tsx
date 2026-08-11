import { Metadata } from "next";
import CalendlyEmbed from "../components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact wonderIT | Start Your Web, Mobile or Custom Software Project",

  description:
    "Get in touch with wonderIT to discuss web development, mobile apps, SaaS platforms, AI integrations, automation systems, and custom software solutions tailored to your business needs.",

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
        url: "https://wonderit.io/images/wonderIT-logo.webp",
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

    images: ["https://wonderit.io/images/wonderIT-logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page subpage-padding">
      {/* Contact Hero */}
      <section className="py-12">
        <div className="container">
          <h1 className="text-5xl md:text-7xl mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p
            className="text-m text-text-secondary mx-auto"
            style={{ margin: "0 auto" }}
          >
            Ready to start your next project? Get in touch with us and
            let&apos;s build something amazing.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="container mb-6">
          <div
            className="grid md:grid-2 gap-x-16 gap-y-24"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div className="mb-6">
              <h2 className="text-4xl mb-6">
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p className="text-text-secondary mb-10">
                Whether you have a question about features, pricing, or anything
                else, our team is ready to answer all your questions.
              </p>

              <div className="flex gap-6 items-center">
                <div className="flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-m">Phone</h4>
                  <p className="text-text-secondary">+389 (77) 631-316</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-m">Email</h4>
                  <p className="text-text-secondary">hello@wonderit.io</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-m">Office</h4>
                  <p className="text-text-secondary">
                    Veniamin Machukovski 1, Skopje, North Macedonia
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-calendly w-full">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
