import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "./components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      {/* ... previous sections ... */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary/10">
        </div>

        <div className="container relative z-10">
          <div className="grid-hero">
            <div>
              <h1 className="text-5xl md:text-7xl mb-6">
                Custom Web, Mobile & AI-Enhanced <span className="gradient-text">Software Development</span>
              </h1>
              <p className="text-m text-text-secondary mb-10">
                WonderIT designs and develops scalable web applications, mobile apps, SaaS platforms, and real-time systems for startups, enterprises, and growing businesses. From React and Next.js platforms to React Native mobile apps and AI-powered integrations, we build software focused on performance, usability, and long-term scalability.
              </p>
              <div className="flex gap-4">
                <Link href="/work" className="btn btn-primary">View Our Work</Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/hero-illustration.png"
                alt="Tech Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Image Left | Text Right */}
      <section className="py-12">
        <div className="container">
          <div className="grid-2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden glass">
              <Image
                src="/section1.png"
                alt="Team Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">About Our Web & Mobile App <span className="gradient-text">Development Team</span></h2>
              <p className="text-m text-text-secondary mb-6">
                WonderIT is a full-stack software development team focused on building scalable web platforms, mobile applications, SaaS products, and automation systems. Over the years, we have partnered with startups, sports technology companies, logistics businesses, and enterprises to create reliable digital products used by real users every day.
              </p>
              <p className="text-m text-text-secondary mb-6">
                Our experience spans React, Next.js, React Native, Node.js, Firebase, MongoDB, cloud infrastructure, real-time systems, and AI-enhanced applications. We combine engineering expertise with product-focused thinking to deliver software that performs at scale.
              </p>
              <Link href="/about" className="btn btn-primary mt-8 inline-block" style={{ marginTop: '32px' }}>About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Right | Text Left */}
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <div className="grid-2">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl mb-6">
                Modern Software Development <span className="gradient-text">Services</span>
              </h2>
              <p className="text-text-secondary mb-6">
                We build custom software solutions for businesses that need scalable platforms, automation systems, mobile applications, internal tools, and real-time data solutions. Our development process focuses on clean architecture, modern technologies, and long-term maintainability.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
                  iOS & Android App Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary"></span>
                  Custom React & Next.js Web Applications
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
                  SaaS Platform Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary"></span>
                  AI & LLM Integrations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
                  Google Workspace & Spreadsheet Automation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary"></span>
                  Real-Time Dashboards & Analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary"></span>
                  Enterprise Software Solutions
                </li>
              </ul>
              <Link href="/work" className="btn btn-primary mt-8 inline-block" style={{ marginTop: '32px' }}>Our Work</Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden glass order-1 md:order-2">
              <Image
                src="/section2.png"
                alt="Digital Product"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-secondary/10">
        <TestimonialSlider />
      </section>
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Industries & <span className="gradient-text">Solutions</span>
            </h2>

            <p className="text-m text-text-secondary max-w-3xl mx-auto mb-6 md:mb-0">
              We build scalable software solutions for businesses across sports technology,
              logistics, SaaS, automation, analytics, and real-time systems. Our experience
              ranges from mobile applications and AI-enhanced platforms to enterprise tools
              used by teams and companies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sports Tech */}
            <div className="glass rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl mb-4">
                <span className="gradient-text">Sports Tech</span>
              </h3>

              <p className="text-text-secondary">
                Performance tracking platforms, coaching systems, athlete analytics,
                wearable integrations, and real-time sports data applications.
              </p>
            </div>

            {/* SaaS Platforms */}
            <div className="glass rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl">

              <h3 className="text-2xl mb-4">
                <span className="gradient-text">SaaS Platforms</span>
              </h3>

              <p className="text-text-secondary">
                Custom SaaS products built with scalable architectures, secure APIs,
                dashboards, subscription systems, and cloud infrastructure.
              </p>
            </div>

            {/* Real-Time Systems */}
            <div className="glass rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl mb-4">
                <span className="gradient-text">Real-Time Systems</span>
              </h3>

              <p className="text-text-secondary">
                Fleet tracking, logistics software, live dashboards, WebSocket-powered
                applications, and monitoring systems with real-time data synchronization.
              </p>
            </div>

            {/* Automation & AI */}
            <div className="glass rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl mb-6 md:mb-0">
              <h3 className="text-2xl mb-4">
                <span className="gradient-text">Automation & AI</span>
              </h3>

              <p className="text-text-secondary">
                AI-enhanced workflows, LLM integrations, spreadsheet automation,
                reporting systems, and custom business process automation tools.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link
              href="/work"
              className="btn btn-primary"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

