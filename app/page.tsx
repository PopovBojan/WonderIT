import { CALENDLY_URL } from "../lib/calendly";
import {
  COMPANY_LOGOS,
  testimonialLogosToCompanyLogos,
} from "../lib/company-logos";
import { TESTIMONIALS } from "../lib/site-content";
import { getTestimonialLogos } from "../lib/wp-graphql";
import LogoMarqueeClient from "./components/LogoMarqueeClient";
import TeamGrid from "./components/TeamGrid";
import TestimonialsSection from "./components/TestimonialsSection";

export default async function Home() {
  let logos = COMPANY_LOGOS;
  try {
    const nodes = await getTestimonialLogos();
    const fromWp = testimonialLogosToCompanyLogos(nodes || []);
    if (fromWp.length) logos = fromWp;
  } catch {
    // Keep static fallback logos when WP is unavailable.
  }

  return (
    <main className="home-page">
      <section className="section hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Software studio</p>
          <h1 id="hero-title">
            Software that ships from idea to{" "}
            <span className="gradient-text">real users.</span>
          </h1>
          <p className="hero-copy">
            WonderIT is a full-stack studio powering businesses to build, run,
            and grow with web, mobile, and AI at the core.
          </p>
          <div className="actions">
            <a className="button primary" href="/contact">
              Start a conversation
            </a>
            <a className="button secondary" href="/work">
              See the work
            </a>
          </div>
          <ul className="hero-meta" aria-label="What WonderIT builds">
            <li>
              <span>Web</span>
              <strong>18</strong>
              <p>Platforms, portals, and APIs</p>
            </li>
            <li>
              <span>Mobile</span>
              <strong>9</strong>
              <p>iOS and Android with React Native</p>
            </li>
            <li>
              <span>SaaS</span>
              <strong>12</strong>
              <p>Multi-user products on cloud</p>
            </li>
            <li>
              <span>AI</span>
              <strong>7</strong>
              <p>LLM workflows in live ops</p>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="WonderIT product in production">
          <div className="hero-board">
            <div className="hero-board__top">
              <span className="hero-board__pulse">In production</span>
              <span>wonderit.io</span>
            </div>

            <div className="hero-board__kpis">
              <div>
                <small>Uptime</small>
                <strong>99.9%</strong>
                <em className="is-up">+0.2</em>
              </div>
              <div>
                <small>Active users</small>
                <strong>12.4k</strong>
                <em className="is-up">+18%</em>
              </div>
              <div>
                <small>p95 latency</small>
                <strong>48ms</strong>
                <em className="is-up">-12ms</em>
              </div>
              <div>
                <small>Deploys</small>
                <strong>36</strong>
                <em>this week</em>
              </div>
            </div>

            <div className="hero-board__charts">
              <div className="hero-board__panel">
                <div className="hero-board__panel-head">
                  <small>Release velocity</small>
                  <span className="hero-board__delta is-up">+18%</span>
                </div>
                <strong>4.8x</strong>
                <div className="hero-board__cols" aria-hidden="true">
                  <i style={{ height: "42%" }} />
                  <i style={{ height: "58%" }} />
                  <i style={{ height: "46%" }} />
                  <i style={{ height: "72%" }} />
                  <i style={{ height: "64%" }} />
                  <i style={{ height: "88%" }} />
                  <i style={{ height: "76%" }} />
                </div>
              </div>

              <div className="hero-board__panel">
                <div className="hero-board__panel-head">
                  <small>Signal quality</small>
                  <span>NPS 74</span>
                </div>
                <strong>98</strong>
                <svg
                  className="hero-board__area"
                  viewBox="0 0 220 72"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#8e4de8" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#8e4de8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#8e4de8" />
                      <stop offset="1" stopColor="#19d5c4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 52 C18 48 28 28 46 32 C64 36 72 14 90 18 C108 22 118 40 136 28 C154 16 168 22 186 12 C198 6 210 16 220 10 L220 72 L0 72 Z"
                    fill="url(#heroArea)"
                  />
                  <path
                    d="M0 52 C18 48 28 28 46 32 C64 36 72 14 90 18 C108 22 118 40 136 28 C154 16 168 22 186 12 C198 6 210 16 220 10"
                    stroke="url(#heroLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="hero-board__split">
              <div className="hero-board__coverage">
                <div className="hero-board__ring" aria-hidden="true">
                  <span>76%</span>
                </div>
                <div>
                  <small>Test coverage</small>
                  <b>+6 pts</b>
                </div>
              </div>
              <ul className="hero-board__lanes">
                <li>
                  <span>Web</span>
                  <b>14</b>
                  <i style={{ width: "86%" }} />
                </li>
                <li>
                  <span>Mobile</span>
                  <b>9</b>
                  <i style={{ width: "62%" }} />
                </li>
                <li>
                  <span>AI</span>
                  <b>7</b>
                  <i style={{ width: "48%" }} />
                </li>
              </ul>
            </div>

            <div className="hero-board__pipeline">
              <span>
                <b>8d</b>
                Discover
              </span>
              <span>
                <b>5d</b>
                Design
              </span>
              <span>
                <b>12d</b>
                Ship
              </span>
              <span>
                <b>∞</b>
                Scale
              </span>
            </div>
          </div>
          <div className="float-card">
            <strong>Clean systems for messy business problems.</strong>
            <p>
              React, Next.js, React Native, Node.js, Firebase, MongoDB, cloud
              infrastructure, and LLM integrations.
            </p>
          </div>
        </div>
      </section>

      <LogoMarqueeClient logos={logos} />

      <section className="section proof-strip" aria-label="WonderIT strengths">
        <div className="proof">
          <strong>9</strong>
          <span>people, one accountable team</span>
        </div>
        <div className="proof">
          <strong>40+</strong>
          <span>products shipped for real operators</span>
        </div>
        <div className="proof">
          <strong>1</strong>
          <span>team from first sketch to production</span>
        </div>
        <div className="proof">
          <strong>AI</strong>
          <span>where it removes real operational work</span>
        </div>
      </section>

      <section id="services" className="section pillars-band">
        <p className="section-label">What we do</p>
        <h2>We engineer every stage of your product.</h2>
        <div className="pillars">
          <article className="pillar">
            <span className="pillar-index">01</span>
            <p className="pillar-kicker">Build</p>
            <h3>Software Engineering</h3>
            <p>
              Web platforms, mobile apps, and SaaS products shaped with the
              same people from the first decision to production.
            </p>
            <ul>
              <li>Custom Web Platforms</li>
              <li>Mobile Applications</li>
              <li>SaaS Products</li>
              <li>Quality-minded delivery</li>
            </ul>
            <a href="/services">Explore all services</a>
          </article>
          <article className="pillar">
            <span className="pillar-index">02</span>
            <p className="pillar-kicker">Think</p>
            <h3>AI and Automation</h3>
            <p>
              LLM workflows, reporting, and automation that sit inside the
              tools operators already use — not as a side experiment.
            </p>
            <ul>
              <li>AI Services</li>
              <li>Workflow Automation</li>
              <li>Reporting Systems</li>
              <li>Google Workspace tools</li>
            </ul>
            <a href="/services">Explore all services</a>
          </article>
          <article className="pillar">
            <span className="pillar-index">03</span>
            <p className="pillar-kicker">Run</p>
            <h3>Real-Time Operations</h3>
            <p>
              Live dashboards, logistics, and monitoring products that stay
              reliable after launch — the systems people open every day.
            </p>
            <ul>
              <li>Live dashboards</li>
              <li>Fleet and logistics</li>
              <li>WebSocket applications</li>
              <li>Analytics products</li>
            </ul>
            <a href="/industries">Explore industries</a>
          </article>
        </div>
      </section>

      <section className="showcase-band">
        <div className="section showcase">
          <div className="showcase-media">
            <img
              src="/services-wonderit.png"
              alt="Custom software product dashboard built by WonderIT"
              loading="lazy"
            />
          </div>
          <div>
            <p className="section-label">Approach</p>
            <h2>
              Build the smallest useful product, then{" "}
              <span className="gradient-text">
                engineer the platform around it.
              </span>
            </h2>
            <p className="lede">
              Less ceremony, more useful software. WonderIT shapes the product,
              builds the system, measures what matters, and improves the parts
              that users touch every day.
            </p>
            <div className="capabilities" aria-label="Technology capabilities">
              <span>React</span>
              <span>Next.js</span>
              <span>React Native</span>
              <span>Node.js</span>
              <span>Firebase</span>
              <span>MongoDB</span>
              <span>Cloud</span>
              <span>LLMs</span>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="section industries">
        <div className="industries-head">
          <p className="section-label">Industries</p>
          <h2>
            Where the work gets <span className="gradient-text">specific.</span>
          </h2>
          <p className="lede">
            Sports tech, SaaS, logistics, analytics, and AI automation all need
            different product instincts. WonderIT brings domain-aware product
            thinking to every system we design and build.
          </p>
        </div>
        <div className="industry-grid">
          <article className="industry">
            <span className="industry-number">01</span>
            <h3>Sports Tech</h3>
            <p>
              Performance tracking, coaching systems, athlete analytics,
              wearable integrations, and live sports data.
            </p>
          </article>
          <article className="industry">
            <span className="industry-number">02</span>
            <h3>SaaS Platforms</h3>
            <p>
              Subscription products, admin consoles, secure APIs, dashboards,
              and cloud infrastructure.
            </p>
          </article>
          <article className="industry">
            <span className="industry-number">03</span>
            <h3>Real-Time Operations</h3>
            <p>
              Fleet tracking, logistics software, monitoring tools, and
              synchronized data products.
            </p>
          </article>
          <article className="industry">
            <span className="industry-number">04</span>
            <h3>Automation & AI</h3>
            <p>
              AI workflows, reporting systems, business process automation, and
              knowledge tools.
            </p>
          </article>
        </div>
      </section>

      <section
        id="work"
        className="section portfolio"
        aria-labelledby="work-title"
      >
        <div className="portfolio-head">
          <div>
            <p className="section-label">Our Work</p>
            <h2 id="work-title">
              Projects built for{" "}
              <span className="gradient-text">
                players, coaches, operators, and product teams.
              </span>
            </h2>
          </div>
          <p className="lede-black">
            A sample from the WonderIT portfolio: mobile apps, SaaS platforms,
            Google Workspace automation, encrypted communication, and travel
            products.{" "}
            <a href="/work" className="project-link">
              View full portfolio
            </a>
          </p>
        </div>

        <div className="project-grid home-featured">
          <article className="project-card">
            <div className="project-media project-media--cover">
              <img
                src="https://cdn.prod.website-files.com/609a6a87708057326383b774/65a643e5c56b48d35b9382c7_Tiles.webp"
                alt="Next11 football performance tracking app built with React Native"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Mobile apps</span>
              <h3>Next11</h3>
              <p>
                A performance-tracking app for football players and teams, using
                lightweight wearable tags to capture live physical, technical,
                and tactical training data.
              </p>
              <a
                className="project-link"
                href="https://www.next11.com/"
                rel="noopener"
                target="_blank"
              >
                Discover More
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media project-media--cover">
              <img
                src="https://better-coaching.dk/wp-content/uploads/2025/09/bc_camp_app_player1.png"
                alt="BetterCoaching football coaching mobile app and SaaS platform"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Mobile apps</span>
              <h3>BetterCoaching</h3>
              <p>
                A football club platform for planning training, sharing
                knowledge, managing drills, and improving coaching communication.
              </p>
              <a
                className="project-link"
                href="https://better-coaching.dk/"
                rel="noopener"
                target="_blank"
              >
                Discover More
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media project-media--cover">
              <img
                src="https://caseengine.com/wp-content/uploads/2025/04/caseengine-larger.png"
                alt="Case Engine AI search visibility platform"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Web apps</span>
              <h3>Case Engine</h3>
              <p>
                AI authority, search visibility, and local presence so high-value
                cases reach the right firm first.
              </p>
              <a
                className="project-link"
                href="https://caseengine.com/"
                rel="noopener"
                target="_blank"
              >
                Discover More
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        id="testimonials"
        className="section testimonials"
        aria-labelledby="testimonials-title"
      >
        <div className="testimonials-head">
          <p className="section-label">Client voices</p>
          <h2 id="testimonials-title">
            What teams say after we <span className="gradient-text">ship.</span>
          </h2>
          <p className="lede-black">
            Short notes from product and operations partners after the software
            landed in real workflows.
          </p>
        </div>

        <TestimonialsSection
          items={TESTIMONIALS}
          logos={logos.map((logo) => ({
            id: logo.id,
            name: logo.name,
            logoUrl: logo.logoUrl,
          }))}
        />
      </section>

      <section
        id="about"
        className="section about about--home"
        aria-labelledby="about-title"
      >
        <div className="about-copy">
          <p className="section-label">About WonderIT</p>
          <h2 id="about-title">
            A compact studio for products that{" "}
            <span className="gradient-text">need to last.</span>
          </h2>
          <p className="lede-black">
            Engineers, design, QA, and growth — the same people from first
            sketch to production. We care about performance, usability, and
            software that still feels good a year later.
          </p>
          <div className="actions">
            <a className="button primary" href="/about">
              Meet the team
            </a>
          </div>
        </div>
        <div className="about-media">
          <img
            src="/our-team-wonderit.png"
            alt="WonderIT software development team collaboration"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section team-section" aria-labelledby="team-title">
        <div className="team-head">
          <p className="section-label">Meet the team</p>
          <h2 id="team-title">
            The people behind <span className="gradient-text">WonderIT.</span>
          </h2>
          <p className="lede-black">
            A compact studio of engineers, design, QA, and growth — the same
            faces from kickoff through launch.
          </p>
        </div>
        <TeamGrid />
      </section>

      <section id="contact" className="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">
          Bring the idea, the spreadsheet, or the workflow. We&apos;ll turn it
          into software you actually like using.
        </h2>
        <div className="actions">
          <a className="button" href="/contact">
            Start a conversation
          </a>
          <a
            className="button secondary"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </section>
    </main>
  );
}
