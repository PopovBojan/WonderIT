import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
import { TEAM } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About WonderIT | Software Development Team",

  description:
    "Meet the WonderIT team building scalable web platforms, mobile apps, SaaS products, real-time systems, and AI automation for global clients.",

  keywords: [
    "about wonderIT",
    "software development company",
    "full stack developers",
    "React developers",
    "Next.js developers",
    "mobile app development team",
    "SaaS development company",
    "AI integrations",
    "custom software solutions",
    "React Native developers",
  ],

  metadataBase: new URL("https://wonderit.io"),

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About wonderIT | Full-Stack Web & Mobile Software Development Team",

    description:
      "Meet the team behind wonderIT — engineers building scalable web platforms, mobile apps, SaaS products, automation tools, and AI-enhanced applications.",

    url: "https://wonderit.io/about",

    siteName: "wonderIT",

    images: [
      {
        url: "https://wonderit.io/opengraph-image",
        width: 1200,
        height: 630,
        alt: "wonderIT Team",
      },
    ],

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BUILD_ITEMS = [
  {
    title: "SaaS Platforms",
    desc: "Subscription-based software platforms, internal dashboards, cloud applications, and scalable multi-user systems.",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android applications built with React Native and modern mobile technologies.",
  },
  {
    title: "Real-Time Systems",
    desc: "Live dashboards, tracking systems, WebSocket applications, fleet monitoring, and real-time analytics platforms.",
  },
  {
    title: "Sports Technology",
    desc: "Athlete monitoring systems, sports analytics platforms, wearable integrations, and coaching applications.",
  },
  {
    title: "Automation Systems",
    desc: "Business workflow automation, reporting systems, Google Workspace integrations, and spreadsheet tools.",
  },
  {
    title: "AI & LLM Integrations",
    desc: "AI-enhanced applications, LLM-powered workflows, intelligent automation, and modern AI integrations.",
  },
];

const VALUES = [
  {
    title: "Client Partnership",
    desc: "We work closely with clients to build software solutions that solve real business problems.",
  },
  {
    title: "Engineering Excellence",
    desc: "We focus on scalable architecture, clean code, and long-term maintainability.",
  },
  {
    title: "Modern Technologies",
    desc: "We build with modern frameworks, cloud platforms, real-time systems, and AI-enhanced workflows.",
  },
  {
    title: "Team Collaboration",
    desc: "Strong communication and teamwork are essential to delivering successful digital products.",
  },
  {
    title: "Continuous Innovation",
    desc: "We constantly improve our processes, technologies, and development practices.",
  },
  {
    title: "Reliable Delivery",
    desc: "We are committed to delivering high-quality software with consistency and attention to detail.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About wonderIT",
            url: "https://wonderit.io/about",
            description:
              "Full-stack software development team specializing in web applications, mobile apps, SaaS platforms, automation systems, and AI-enhanced products.",
            mainEntity: {
              "@type": "Organization",
              name: "wonderIT",
              url: "https://wonderit.io",
              logo: "https://wonderit.io/wonderit-logo.webp",
              knowsAbout: [
                "React",
                "Next.js",
                "React Native",
                "Node.js",
                "Firebase",
                "MongoDB",
                "SaaS Development",
                "Automation Systems",
                "AI Integrations",
                "Real-Time Applications",
              ],
            },
          }),
        }}
      />

      <PageIntro
        label="About"
        title="A full-stack software team for products that need to last."
        description="WonderIT builds scalable web applications, mobile apps, SaaS platforms, automation systems, and AI-enhanced digital products for startups, businesses, and enterprises worldwide."
      />

      <section className="section about">
        <div className="about-copy">
          <p className="section-label">The studio</p>
          <h2>Building reliable digital products that scale.</h2>
          <p className="lede">
            Since launching WonderIT, we have worked on sports analytics
            platforms, mobile applications, SaaS products, real-time tracking
            systems, internal business tools, and automation platforms. The
            team focuses on scalable, maintainable software using modern
            technologies and development practices.
          </p>
          <p className="lede">
            We have collaborated with startups, growing businesses, and
            enterprise clients across multiple industries. From React and
            Next.js platforms to React Native mobile apps, cloud
            infrastructure, Firebase integrations, and AI-enhanced workflows,
            we help companies turn ideas into production-ready digital products.
          </p>
          <p className="lede">
            Strong software is built through collaboration, transparency, and
            continuous improvement. Every project is approached with long-term
            thinking, technical precision, and a focus on real business value.
          </p>
          <div className="about-media">
            <img
              src="/our-team-wonderit.png"
              alt="WonderIT software development team collaboration"
            />
          </div>
        </div>

        <div>
          <article className="about-panel">
            <h3>Our Mission</h3>
            <p>
              Help businesses build modern digital products that are scalable,
              reliable, and designed for real-world users. We combine
              engineering expertise, product thinking, and modern technologies
              to deliver software that creates long-term impact.
            </p>
          </article>

          <article className="about-panel">
            <h3>Our Vision</h3>
            <p>
              A future where businesses of all sizes can leverage modern
              software, automation, and AI-enhanced systems to operate more
              efficiently, grow faster, and deliver better experiences to their
              users.
            </p>
          </article>

          <article className="about-panel">
            <h3>What We Build</h3>
            <div className="build-grid">
              {BUILD_ITEMS.map((item) => (
                <div className="mini-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="about-panel">
            <h3>Core Values</h3>
            <div className="value-grid">
              {VALUES.map((value) => (
                <div className="mini-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section team-section" aria-labelledby="team-title">
        <div className="team-head">
          <p className="section-label">Meet Our Team</p>
          <h2 id="team-title">
            The engineers and creators behind{" "}
            <span className="gradient-text">WonderIT.</span>
          </h2>
          <p className="lede">
            The engineers and creators behind WonderIT building modern software
            products for businesses worldwide.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-photo">
                <img src={member.image} alt={member.alt} loading="lazy" />
              </div>
              <div>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
