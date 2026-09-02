import type { Metadata } from "next";
import PageCta from "../components/PageCta";
import StudioCanvas from "../components/StudioCanvas";
import StudioHero from "../components/StudioHero";
import TeamGrid from "../components/TeamGrid";

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
    desc: "Subscription products, internal dashboards, cloud applications, and multi-user systems.",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android apps with React Native and modern mobile stacks.",
  },
  {
    title: "Real-Time Systems",
    desc: "Live dashboards, tracking, WebSockets, fleet monitoring, and analytics platforms.",
  },
  {
    title: "Sports Technology",
    desc: "Athlete monitoring, sports analytics, wearable integrations, and coaching tools.",
  },
  {
    title: "Automation Systems",
    desc: "Workflow automation, reporting, Google Workspace integrations, and spreadsheet tools.",
  },
  {
    title: "AI & LLM Integrations",
    desc: "AI-enhanced applications, LLM-powered workflows, and intelligent automation.",
  },
];

const VALUES = [
  {
    title: "Client partnership",
    desc: "We work closely with clients to build software that solves real business problems.",
  },
  {
    title: "Engineering excellence",
    desc: "Scalable architecture, clean code, and software that is still maintainable in year three.",
  },
  {
    title: "Modern technologies",
    desc: "Modern frameworks, cloud platforms, real-time systems, and AI-enhanced workflows.",
  },
  {
    title: "Team collaboration",
    desc: "The same people from the first call to launch — no handoff into a black box.",
  },
  {
    title: "Continuous innovation",
    desc: "We keep improving the process, the stack, and the product after the first ship.",
  },
  {
    title: "Reliable delivery",
    desc: "High-quality software, shipped with consistency and attention to the details operators feel.",
  },
];

export default function AboutPage() {
  return (
    <main className="studio-page about-view">
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

      <StudioCanvas
        wordmark="STUDIO"
        left={[
          { kind: "tick", text: "01", top: "8px" },
          { kind: "chip", text: "Team", top: "28px" },
          { kind: "chip", text: "Build", top: "96px", tone: "aqua" },
          { kind: "tick", text: "03", top: "32%" },
          { kind: "chip", text: "Care", top: "34%", tone: "coral" },
          { kind: "tick", text: "05", top: "66%" },
          { kind: "chip", text: "Ship", top: "68%" },
        ]}
        right={[
          { kind: "tick", text: "02", top: "12px" },
          { kind: "chip", text: "Talk", top: "52px", tone: "aqua" },
          { kind: "tick", text: "04", top: "40%" },
          { kind: "chip", text: "Stay", top: "42%" },
          { kind: "tick", text: "06", top: "72%" },
        ]}
      />

      <StudioHero
        current="About"
        eyebrow="The studio"
        title="A team you can actually talk to."
        lede="WonderIT is a friendly full-stack studio. We build web apps, mobile products, SaaS platforms, and AI-enhanced systems for startups and growing teams worldwide."
        stats={[
          { value: "9", label: "People, one team" },
          { value: "40+", label: "Products shipped" },
          { value: "1", label: "Team to production" },
          { value: "AI", label: "Where it removes work" },
        ]}
      />

      <section className="studio-section studio-story" aria-labelledby="story-title">
        <div className="studio-story__copy">
          <p className="section-label">Since day one</p>
          <h2 id="story-title">Building reliable digital products that scale.</h2>
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
        </div>
        <div className="studio-story__media">
          <img
            src="/our-team-wonderit.png"
            alt="WonderIT software development team collaboration"
          />
        </div>
      </section>

      <section className="studio-section studio-beliefs" aria-label="Mission and vision">
        <article className="belief-card belief-card--ink">
          <p className="section-label">Mission</p>
          <h2>Help businesses ship software people actually use.</h2>
          <p>
            We combine engineering expertise, product thinking, and modern
            technologies to deliver software that is scalable, reliable, and
            designed for real-world users.
          </p>
        </article>
        <article className="belief-card">
          <p className="section-label">Vision</p>
          <h2>Modern software, without the enterprise fog.</h2>
          <p>
            A future where businesses of all sizes can leverage software,
            automation, and AI-enhanced systems to operate more efficiently,
            grow faster, and deliver better experiences.
          </p>
        </article>
      </section>

      <section className="studio-section" aria-labelledby="build-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">What we build</p>
            <h2 id="build-title">The product types we keep coming back to.</h2>
          </div>
          <p className="studio-section__lede">
            Not a catalog of every possible service — the work the studio is
            actually good at shipping.
          </p>
        </div>
        <div className="mini-grid">
          {BUILD_ITEMS.map((item) => (
            <article className="mini-tile" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section studio-section--tight" aria-labelledby="values-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">Core values</p>
            <h2 id="values-title">How the work actually gets done.</h2>
          </div>
          <p className="studio-section__lede">
            Partnership, engineering, and delivery — the habits that keep a
            product healthy after launch.
          </p>
        </div>
        <div className="mini-grid">
          {VALUES.map((value) => (
            <article className="mini-tile" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" aria-labelledby="team-title">
        <div className="studio-section__head">
          <div>
            <p className="section-label">Meet the team</p>
            <h2 id="team-title">
              Same faces from the first call to launch.
            </h2>
          </div>
          <p className="studio-section__lede">
            Engineers, design, QA, and growth — a studio small enough to care
            about the product, and senior enough to ship it.
          </p>
        </div>
        <TeamGrid />
      </section>

      <PageCta title="Want a studio you can actually talk to? Start with a conversation." />
    </main>
  );
}
