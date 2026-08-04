import { url } from "inspector";

export default function Home() {
  return (
    <main className="home-page">
      <section className="section hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Web, mobile, AI</p>
          <h1 id="hero-title">
            Custom software development that moves from idea to{" "}
            <span className="gradient-text">real users.</span>
          </h1>
          <p className="hero-copy">
            WonderIT designs and builds scalable web applications, SaaS
            platforms, mobile apps, real-time systems, and AI-enabled workflows
            for teams that need production software, not another prototype.
          </p>
          <div className="actions">
            <a className="button primary" href="/work">
              See the approach
            </a>
            <a className="button secondary" href="/contact">
              Start a project
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Product dashboard illustration"
        >
          <div className="workbench">
            <div className="workbench-bar">
              <div className="dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>production-monitor.wit</span>
            </div>
            <div className="dashboard">
              <div className="panel">
                <small>Release velocity</small>
                <div className="metric">4.8x</div>
                <div className="bars">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="panel">
                <small>Signal quality</small>
                <div className="metric">98</div>
                <div className="bars">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="panel wide">
                <small>Build pipeline</small>
                <div className="pipeline">
                  <span>Discover</span>
                  <span>Design</span>
                  <span>Ship</span>
                  <span>Scale</span>
                </div>
              </div>
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

      <section className="section proof-strip" aria-label="WonderIT strengths">
        <div className="proof">
          <strong>01</strong>
          <span>Product thinking before implementation</span>
        </div>
        <div className="proof">
          <strong>02</strong>
          <span>Architecture that can survive growth</span>
        </div>
        <div className="proof">
          <strong>03</strong>
          <span>Interfaces built for daily operators</span>
        </div>
        <div className="proof">
          <strong>04</strong>
          <span>Automation where it removes real work</span>
        </div>
      </section>

      <section id="services" className="section split">
        <div>
          <p className="section-label">Services</p>
          <h2>
            Focused teams for serious{" "}
            <span className="gradient-text">software builds.</span>
          </h2>
          <p className="lede-black">
            From first product decisions to shipped systems, the team covers the
            engineering lanes that matter most for modern digital products.
          </p>
        </div>
        <div className="service-grid">
          <article className="service">
            <div className="icon">W</div>
            <h3>Custom Web Platforms</h3>
            <p>
              React and Next.js applications, secure APIs, dashboards, portals,
              and internal tools.
            </p>
          </article>
          <article className="service">
            <div className="icon">M</div>
            <h3>Mobile Applications</h3>
            <p>
              React Native apps for iOS and Android with resilient data flows
              and polished product UX.
            </p>
          </article>
          <article className="service">
            <div className="icon">A</div>
            <h3>AI & Automation</h3>
            <p>
              LLM integrations, spreadsheet automation, reporting systems, and
              workflow accelerators.
            </p>
          </article>
          <article className="service">
            <div className="icon">R</div>
            <h3>Real-Time Systems</h3>
            <p>
              Live dashboards, logistics tools, WebSocket applications,
              monitoring, and analytics products.
            </p>
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
            different product instincts. The redesign gives each domain room
            without turning the homepage into a wall of text.
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
              Projects built for <span className="gradient-text">players, coaches, operators, and product teams.</span>
            </h2>
          </div>
          <p className="lede-black">
            A sample from the WonderIT portfolio: mobile apps, SaaS platforms,
            Google Workspace automation, encrypted communication, and travel
            products. <a href="/work" className="project-link">View full portfolio</a>
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card featured">
            <div className="project-media">
              <img
                src="https://cdn.prod.website-files.com/609a6a87708057326383b774/65a643e5c56b48d35b9382c7_Tiles.webp"
                alt="Next11 football performance tracking app built with React Native"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Mobile apps</span>
              <h3>Next11</h3>
              <p className="project-stack">
                React Native, Node.js, Firebase, LLM
              </p>
              <p>
                A performance-tracking app for football players and teams, using
                lightweight wearable tags to capture live physical, technical,
                and tactical training data.
              </p>
              <a
                className="project-link"
                href="https://www.next11.com/"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img
                src="https://better-coaching.dk/wp-content/uploads/2025/09/bc_camp_app_player1.png"
                alt="BetterCoaching football coaching mobile app and SaaS platform"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Mobile apps</span>
              <h3>BetterCoaching</h3>
              <p className="project-stack">
                React, React Native, Node.js, MongoDB, LLM
              </p>
              <p>
                A football club platform for planning training, sharing
                knowledge, managing drills, and improving coaching communication
                across youth teams.
              </p>
              <a
                className="project-link"
                href="https://better-coaching.dk/"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img
                src="https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19NA2F_seYiNuin5Iu74v-DpJTbRLHdGF"
                alt="Mobile daily news feed app built with React Native and Node.js"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Mobile apps</span>
              <h3>Mobile Daily News Feed App</h3>
              <p className="project-stack">
                React Native, Node.js, JavaScript, Flexbox
              </p>
              <p>
                iOS news feed aggregator delivering daily news through API
                services.
              </p>
              <a
                className="project-link"
                href="https://itunes.apple.com/mk/app/daily-feed-app/id1401337497"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img
                src="https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1na2Pj8dHqSUIaK8TlDC2fEZ6iVzFtRxq"
                alt="AppStoreMetrix Google Spreadsheet reporting add-on"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Google web</span>
              <h3>AppStoreMetrix Addon</h3>
              <p className="project-stack">
                JavaScript, Google Apps Script, Firebase
              </p>
              <p>
                Google Spreadsheet add-on for pulling reports from app stores,
                analyzing data, and visualizing trends.
              </p>
              <a
                className="project-link"
                href="https://chrome.google.com/webstore/detail/appstoremetrix/eonflbgifkcopaagegpajbafilncjief?hl=en"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>
          <article className="project-card">
            <div className="project-media">
              <img
                src="https://caseengine.com/wp-content/uploads/2025/04/caseengine-larger.png"
                alt="Next11 football performance tracking app built with React Native"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Web apps</span>
              <h3>Case Engine</h3>
              <p className="project-stack">Wordpress, N8N</p>
              <p>
                Case Engine builds the AI authority, Search Visibility, and
                Local Presence that puts your firm at the top of AI Search,
                Google, and Maps, so high-value cases come to you first.
              </p>
              <a
                className="project-link"
                href="https://caseengine.com/"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <div className="project-placeholder">
                <span>Travel booking web application</span>
              </div>
            </div>
            <div className="project-body">
              <span className="project-kicker">Web apps</span>
              <h3>Anywhr</h3>
              <p className="project-stack">React, Node.js, Webpack, MongoDB</p>
              <p>Web application for travel discovery and flight booking.</p>
              <a
                className="project-link"
                href="http://anywhr.de"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img
                src="https://loni.ai/wp-content/uploads/2021/08/Loni-logo_white-and-cyan_RGB-400-1-300x111.png"
                alt="AppStoreMetrix Google Spreadsheet reporting add-on"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Web apps</span>
              <h3>Loni.ai</h3>
              <p className="project-stack">ReactJs, ReactNative, NodeJs</p>
              <p>
                Real-time vendor agnostic network management tool for your
                existing network, security, & cloud infrastructure with the
                power of true ZeroCode Automation.
              </p>
              <a
                className="project-link"
                href="https://loni.ai/"
                rel="noopener"
                 target="blank"
              >
                View Project
              </a>
            </div>
          </article>
          <article className="project-card">
            <div className="project-media">
              <img
                src="https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19l0_U4v94G_DziyxInJ_zO-pXLqDOe57"
                alt="AppStoreMetrix Google Spreadsheet reporting add-on"
                loading="lazy"
              />
            </div>
            <div className="project-body">
              <span className="project-kicker">Web apps</span>
              <h3>FLEET MANAGEMENT TRACKING COMPANY</h3>
              <p className="project-stack">
                ReactJs, NodeJs, ExpressJs, JavaScript, Docker, CSS Grid
              </p>
              <p>
                Application for vehicle tracking in real time and displaying
                it's information while can provide statistical data for it's
                track movement.
              </p>
              <span className="project-link">Not Public</span>
            </div>
          </article>
        </div>
      </section>

      <section
        id="about"
        className="section about"
        aria-labelledby="about-title"
      >
        <div className="about-copy">
          <p className="section-label">About WonderIT</p>
          <h2 id="about-title">
            A full-stack software team for products that{" "}
            <span className="gradient-text">need to last.</span>
          </h2>
          <p className="lede-black">
            WonderIT builds scalable web applications, mobile apps, SaaS
            platforms, automation systems, and AI-enhanced digital products for
            startups, businesses, and enterprises worldwide.
          </p>
          <p className="lede-black">
            The team combines engineering precision with product thinking,
            focusing on performance, usability, and long-term growth instead of
            short-lived prototypes.
          </p>
          <div className="about-media">
            <img
              src="/our-team-wonderit.avif"
              alt="WonderIT software development team collaboration"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <article className="about-panel">
            <h3>Building Reliable Digital Products That Scale</h3>
            <p>
              Since launching wonderIT, the team has worked on sports analytics
              platforms, mobile applications, SaaS products, real-time tracking
              systems, internal business tools, and automation platforms.
            </p>
            <p>
              Every project is approached with collaboration, transparency,
              technical precision, and a focus on real business value.
            </p>
          </article>

          <article className="about-panel">
            <h3>Mission & Vision</h3>
            <p>
              The mission is to help businesses build modern digital products
              that are scalable, reliable, and designed for real-world users.
            </p>
            <p>
              The vision is a future where companies use software, automation,
              and AI-enhanced systems to operate more efficiently and deliver
              better user experiences.
            </p>
          </article>

          <article className="about-panel">
            <h3>What We Build</h3>
            <div className="build-grid">
              <div className="mini-card">
                <h3>SaaS Platforms</h3>
                <p>
                  Subscription products, dashboards, cloud apps, and multi-user
                  systems.
                </p>
              </div>
              <div className="mini-card">
                <h3>Mobile Applications</h3>
                <p>
                  Cross-platform iOS and Android apps built with React Native.
                </p>
              </div>
              <div className="mini-card">
                <h3>Real-Time Systems</h3>
                <p>
                  Live dashboards, tracking systems, WebSocket apps, and
                  analytics.
                </p>
              </div>
              <div className="mini-card">
                <h3>AI & Automation</h3>
                <p>
                  LLM workflows, Google Workspace tools, reporting, and business
                  automation.
                </p>
              </div>
            </div>
          </article>

          <article className="about-panel">
            <h3>Core Values</h3>
            <div className="value-grid">
              <div className="mini-card">
                <h3>Client Partnership</h3>
                <p>Close collaboration around real business problems.</p>
              </div>
              <div className="mini-card">
                <h3>Engineering Excellence</h3>
                <p>
                  Scalable architecture, clean code, and maintainable systems.
                </p>
              </div>
              <div className="mini-card">
                <h3>Modern Technologies</h3>
                <p>
                  Modern frameworks, cloud platforms, real-time systems, and AI
                  workflows.
                </p>
              </div>
              <div className="mini-card">
                <h3>Reliable Delivery</h3>
                <p>
                  Consistent execution with attention to quality and detail.
                </p>
              </div>
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
          <p className="lede-black">
            A focused full-stack team building modern software products for
            businesses worldwide.
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
      </section>

      <section id="contact" className="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">
          Bring the idea, the spreadsheet, the workflow, or the mess. <span className="gradient-text">WonderIT </span>
          can turn it into software.
        </h2>
        <a className="button" href="/contact">
          Contact WonderIT
        </a>
      </section>
    </main>
  );
}
