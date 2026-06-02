import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About wonderIT | Full-Stack Web & Mobile Software Development Team",

  description:
    "Learn about wonderIT — a full-stack software development team building web applications, mobile apps, SaaS platforms, automation systems, and AI-enhanced digital products for startups and businesses worldwide.",

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
        url: "https://wonderit.io/images/wonderIT-logo.webp",
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

export default function AboutPage() {
  return (
    <main className="subpage-padding">
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

              logo:
                "https://wonderit.io/images/wonderIT-logo.webp",

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
      {/* About Hero */}
      <section className="py-12">
        <div className="container">
          <h1 className="text-5xl md:text-7xl mb-6">About <span className="gradient-text">WonderIT</span></h1>
          <p className="text-m text-text-secondary mx-auto" style={{ margin: '0 auto' }}>
            WonderIT is a full-stack software development team building scalable web applications, mobile apps, SaaS platforms, automation systems, and AI-enhanced digital products. We partner with startups, businesses, and enterprises worldwide to create reliable software focused on performance, usability, and long-term growth.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-4xl mb-6"> Building Reliable Digital Products <span className="gradient-text">That Scale</span></h2>
              <p className="text-text-secondary mb-6">
                Since launching wonderIT, we have worked on a wide range of software products including sports analytics platforms, mobile applications, SaaS products, real-time tracking systems, internal business tools, and automation platforms. Our team focuses on building scalable and maintainable software using modern technologies and development practices.
              </p>

              <p className="text-text-secondary mb-6">
                Over the years, we have collaborated with startups, growing businesses, and enterprise clients across multiple industries. From React and Next.js platforms to React Native mobile apps, cloud infrastructure, Firebase integrations, and AI-enhanced workflows, we help companies turn ideas into production-ready digital products.
              </p>

              <p className="text-text-secondary">
                We believe strong software is built through collaboration, transparency, and continuous improvement. Every project we take on is approached with long-term thinking, technical precision, and a focus on delivering real business value.
              </p>
            </div>
            <div className="about-feature-image relative rounded-2xl overflow-hidden">
              <Image
                src="/our-team-wonderit.avif"
                alt="Our Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-4xl mb-6">Our <span className="gradient-text">Mission</span></h2>
              <p className="text-text-secondary">
                Our mission is to help businesses build modern digital products that are scalable, reliable, and designed for real-world users. We combine engineering expertise, product thinking, and modern technologies to deliver software that creates long-term impact.
              </p>
            </div>
            <div>
              <h2 className="text-4xl mb-6">Our <span className="gradient-text">Vision</span></h2>
              <p className="text-text-secondary">
                We envision a future where businesses of all sizes can leverage modern software, automation, and AI-enhanced systems to operate more efficiently, grow faster, and deliver better experiences to their users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 ">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              What We <span className="gradient-text">Build</span>
            </h2>

            <p className="text-text-secondary max-w-3xl mx-auto mb-6">
              Our experience spans multiple industries and software categories,
              from SaaS platforms and mobile applications to automation systems,
              real-time analytics, and AI-enhanced digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* SaaS */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                SaaS Platforms
              </h3>

              <p className="text-text-secondary">
                Subscription-based software platforms, internal dashboards,
                cloud applications, and scalable multi-user systems.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                Mobile Applications
              </h3>

              <p className="text-text-secondary">
                Cross-platform iOS and Android applications built with
                React Native and modern mobile technologies.
              </p>
            </div>

            {/* Real-Time Systems */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                Real-Time Systems
              </h3>

              <p className="text-text-secondary">
                Live dashboards, tracking systems, WebSocket applications,
                fleet monitoring, and real-time analytics platforms.
              </p>
            </div>

            {/* Sports Technology */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                Sports Technology
              </h3>

              <p className="text-text-secondary">
                Athlete monitoring systems, sports analytics platforms,
                wearable integrations, and coaching applications.
              </p>
            </div>

            {/* Automation */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                Automation Systems
              </h3>

              <p className="text-text-secondary">
                Business workflow automation, reporting systems,
                Google Workspace integrations, and spreadsheet tools.
              </p>
            </div>

            {/* AI */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 gradient-text">
                AI & LLM Integrations
              </h3>

              <p className="text-text-secondary">
                AI-enhanced applications, LLM-powered workflows,
                intelligent automation, and modern AI integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/10">
        <div className="container">
          <h2 className="text-4xl text-center mb-6">Our Core <span className="gradient-text">Values</span></h2>
          <div className="grid-3">
            {[
              {
                title: "Client Partnership",
                desc: "We work closely with clients to build software solutions that solve real business problems."
              },
              {
                title: "Engineering Excellence",
                desc: "We focus on scalable architecture, clean code, and long-term maintainability."
              },
              {
                title: "Modern Technologies",
                desc: "We build with modern frameworks, cloud platforms, real-time systems, and AI-enhanced workflows."
              },
              {
                title: "Team Collaboration",
                desc: "Strong communication and teamwork are essential to delivering successful digital products."
              },
              {
                title: "Continuous Innovation",
                desc: "We constantly improve our processes, technologies, and development practices."
              },
              {
                title: "Reliable Delivery",
                desc: "We are committed to delivering high-quality software with consistency and attention to detail."
              }
            ].map((value, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center">
                <h3 className="text-2xl mb-4 gradient-text">{value.title}</h3>
                <p className="text-text-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              The engineers and creators behind wonderIT building modern software products for businesses worldwide.
            </p>
          </div>

           <div className="team-grid">
          <article className="team-card">
            <div className="team-photo">
              <img
                src="/Kristijan.jpeg"
                alt="Kristijan Petrovski, CEO and full stack developer at WonderIT"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Kristijan Petrovski</h3>
              <p>CEO / Full Stack Developer</p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-photo">
              <img
                src="/Andrea.png"
                alt="Andrea Zakovski, full stack developer at WonderIT"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Andrea Zakovski</h3>
              <p>Full Stack Developer</p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-photo">
              <img
                src="/Bojan.jpeg"
                alt="Bojan Popov, full stack developer at WonderIT"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Bojan Popov</h3>
              <p>Full Stack Developer</p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-photo">
              <img
                src="/Darko.jpeg"
                alt="Darko Stojanovski, full stack developer at WonderIT"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Darko Stojanovski</h3>
              <p>Full Stack Developer</p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-photo">
              <img
                src="/Mario.jpeg"
                alt="Mario Boskovski, full stack developer at WonderIT"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Mario Boskovski</h3>
              <p>Full Stack Developer</p>
            </div>
          </article>
        </div>
        </div>
      </section>
    </main>
  );
}
