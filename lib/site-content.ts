export type Project = {
  name: string;
  link: string;
  image?: string;
  placeholder?: string;
  stack: string;
  category: string;
  content: string;
  featured?: boolean;
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", contact: true },
] as const;

export const PROOF_ITEMS = [
  { number: "01", text: "Product thinking before implementation" },
  { number: "02", text: "Architecture that can survive growth" },
  { number: "03", text: "Interfaces built for daily operators" },
  { number: "04", text: "Automation where it removes real work" },
];

export const SERVICES = [
  {
    icon: "W",
    title: "Custom Web Platforms",
    description:
      "React and Next.js applications, secure APIs, dashboards, portals, and internal tools.",
  },
  {
    icon: "M",
    title: "Mobile Applications",
    description:
      "React Native apps for iOS and Android with resilient data flows and polished product UX.",
  },
  {
    icon: "A",
    title: "AI & Automation",
    description:
      "LLM integrations, spreadsheet automation, reporting systems, and workflow accelerators.",
  },
  {
    icon: "R",
    title: "Real-Time Systems",
    description:
      "Live dashboards, logistics tools, WebSocket applications, monitoring, and analytics products.",
  },
];

export const CAPABILITIES = [
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Cloud",
  "LLMs",
];

export const INDUSTRIES = [
  {
    number: "01",
    title: "Sports Tech",
    description:
      "Performance tracking, coaching systems, athlete analytics, wearable integrations, and live sports data.",
  },
  {
    number: "02",
    title: "SaaS Platforms",
    description:
      "Subscription products, admin consoles, secure APIs, dashboards, and cloud infrastructure.",
  },
  {
    number: "03",
    title: "Real-Time Operations",
    description:
      "Fleet tracking, logistics software, monitoring tools, and synchronized data products.",
  },
  {
    number: "04",
    title: "Automation & AI",
    description:
      "AI workflows, reporting systems, business process automation, and knowledge tools.",
  },
];

export const STATIC_PROJECTS: Project[] = [
  {
    name: "Next11",
    link: "https://www.next11.com/",
    image:
      "https://cdn.prod.website-files.com/609a6a87708057326383b774/65a643e5c56b48d35b9382c7_Tiles.webp",
    stack: "React Native, Node.js, Firebase, LLM",
    category: "mobile-apps",
    content:
      "A performance-tracking app for football players and teams, using lightweight wearable tags to capture live physical, technical, and tactical training data.",
    featured: true,
  },
  {
    name: "BetterCoaching",
    link: "https://better-coaching.dk/",
    image:
      "https://better-coaching.dk/wp-content/uploads/2025/09/bc_camp_app_player1.png",
    stack: "React, React Native, Node.js, MongoDB, LLM",
    category: "mobile-apps",
    content:
      "A football club platform for planning training, sharing knowledge, managing drills, and improving coaching communication across youth teams.",
  },
  {
    name: "Mobile Daily News Feed App",
    link: "https://itunes.apple.com/mk/app/daily-feed-app/id1401337497",
    image:
      "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19NA2F_seYiNuin5Iu74v-DpJTbRLHdGF",
    stack: "React Native, Node.js, JavaScript, Flexbox",
    category: "mobile-apps",
    content:
      "iOS news feed aggregator delivering daily news through API services.",
  },
  {
    name: "AppStoreMetrix Addon",
    link: "https://chrome.google.com/webstore/detail/appstoremetrix/eonflbgifkcopaagegpajbafilncjief?hl=en",
    image:
      "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1na2Pj8dHqSUIaK8TlDC2fEZ6iVzFtRxq",
    stack: "JavaScript, Google Apps Script, Firebase",
    category: "google-web",
    content:
      "Google Spreadsheet add-on for pulling reports from app stores, analyzing data, and visualizing trends.",
  },
  {
    name: "Case Engine",
    link: "https://caseengine.com/",
    image:
      "https://caseengine.com/wp-content/uploads/2025/04/caseengine-larger.png",
    stack: "Wordpress, N8N",
    category: "web-apps",
    content:
      "Case Engine builds the AI authority, Search Visibility, and Local Presence that puts your firm at the top of AI Search, Google, and Maps, so high-value cases come to you first.",
  },
  {
    name: "Message Application With PGP Encryption",
    link: "Not Public",
    placeholder: "Encrypted messaging with PGP key exchange",
    stack: "Swift, Java, Node.js, PGP Encryption, Mail Server",
    category: "mobile-apps",
    content:
      "A secure messaging app with client-side encrypted messages and public key exchange infrastructure.",
  },
  {
    name: "Anywhr",
    link: "http://anywhr.de",
    placeholder: "Travel booking web application",
    stack: "React, Node.js, Webpack, MongoDB",
    category: "web-apps",
    content: "Web application for travel discovery and flight booking.",
  },
  {
    name: "Loni.ai",
    link: "https://loni.ai/",
    image:
      "https://loni.ai/wp-content/uploads/2021/08/Loni-logo_white-and-cyan_RGB-400-1-300x111.png",
    stack: "ReactJs, ReactNative, NodeJs",
    category: "web-apps",
    content:
      "Real-time vendor agnostic network management tool for your existing network, security, & cloud infrastructure with the power of true ZeroCode Automation.",
  },
  {
    name: "Fleet Management Tracking Company",
    link: "Not Public",
    image:
      "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19l0_U4v94G_DziyxInJ_zO-pXLqDOe57",
    stack: "ReactJs, NodeJs, ExpressJs, JavaScript, Docker, CSS Grid",
    category: "web-apps",
    content:
      "Application for vehicle tracking in real time and displaying it's information while can provide statistical data for it's track movement.",
  },
];

export const BUILD_ITEMS = [
  {
    title: "SaaS Platforms",
    description:
      "Subscription products, dashboards, cloud apps, and multi-user systems.",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform iOS and Android apps built with React Native.",
  },
  {
    title: "Real-Time Systems",
    description:
      "Live dashboards, tracking systems, WebSocket apps, and analytics.",
  },
  {
    title: "AI & Automation",
    description:
      "LLM workflows, Google Workspace tools, reporting, and business automation.",
  },
];

export const VALUES = [
  {
    title: "Client Partnership",
    description: "Close collaboration around real business problems.",
  },
  {
    title: "Engineering Excellence",
    description: "Scalable architecture, clean code, and maintainable systems.",
  },
  {
    title: "Modern Technologies",
    description:
      "Modern frameworks, cloud platforms, real-time systems, and AI workflows.",
  },
  {
    title: "Reliable Delivery",
    description: "Consistent execution with attention to quality and detail.",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  /** Person or role label shown in the byline. */
  name: string;
  role: string;
  /** Company name — matched to logo marquee brands when possible. */
  company: string;
  headline: string;
  /** Whole-star rating from 1 to 5. */
  rating: number;
  /** Optional logo URL override; otherwise resolved from company logos. */
  logoUrl?: string;
};

/** Homepage quotes — replace with approved client wording when ready. */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "next11",
    headline: "Shipped fast, stayed solid",
    quote:
      "WonderIT helped us ship a first useful product quickly, then kept hardening the parts our coaches and players open every day. Clear communication the whole way.",
    name: "Product lead",
    role: "Sports performance platform",
    company: "Next11",
    rating: 5,
  },
  {
    id: "better-coaching",
    headline: "Built for real operators",
    quote:
      "They treat architecture and UX as the same problem. The dashboard our coaches live in finally matches how the work actually happens.",
    name: "Operations manager",
    role: "Football club platform",
    company: "BetterCoaching",
    rating: 5,
  },
  {
    id: "case-engine",
    headline: "Automation without losing control",
    quote:
      "We stopped rebuilding the same reports by hand. The automation they put in place removed busywork without removing our control.",
    name: "Founder",
    role: "AI visibility product",
    company: "Case Engine",
    rating: 5,
  },
  {
    id: "loni",
    headline: "Reliable delivery end to end",
    quote:
      "From the first prototype to production release, the team stayed sharp on scope, quality, and timelines. We always knew what was shipping next.",
    name: "CTO",
    role: "Network management platform",
    company: "Loni.ai",
    rating: 5,
  },
  {
    id: "anywhr",
    headline: "Real-time systems done right",
    quote:
      "Our booking flows used to feel fragile under load. WonderIT rebuilt the product path so travelers get signal instead of noise.",
    name: "Head of product",
    role: "Travel discovery platform",
    company: "Anywhr",
    rating: 4,
  },
];

export const TEAM = [
  {
    name: "Kristijan Petrovski",
    title: "CEO / Full Stack Developer",
    image: "/team/team-kristijan.jpg?v=2",
    alt: "Kristijan Petrovski, CEO and full stack developer at WonderIT",
  },
  {
    name: "Dragan Trajkovski",
    title: "VP Sales",
    image: "/team/team-dragan.jpg?v=2",
    alt: "Dragan Trajkovski, VP Sales at WonderIT",
  },
  {
    name: "Andrea Zakovski",
    title: "Full Stack Developer",
    image: "/team/team-andrea.jpg?v=2",
    alt: "Andrea Zakovski, full stack developer at WonderIT",
  },
  {
    name: "Bojan Popov",
    title: "Full Stack Developer",
    image: "/team/team-bojan.jpg?v=2",
    alt: "Bojan Popov, full stack developer at WonderIT",
  },
  {
    name: "Darko Stojanovski",
    title: "Full Stack Developer",
    image: "/team/team-darko.jpg?v=2",
    alt: "Darko Stojanovski, full stack developer at WonderIT",
  },
  {
    name: "Mario Boskovski",
    title: "Full Stack Developer",
    image: "/team/team-mario.jpg?v=2",
    alt: "Mario Boskovski, full stack developer at WonderIT",
  },
  {
    name: "Ognen Petrovski",
    title: "Lead Designer",
    image: "/team/team-ognen.jpg?v=2",
    alt: "Ognen Petrovski, Lead Designer at WonderIT",
  },
  {
    name: "Angel Velkovski",
    title: "Senior QA Engineer",
    image: "/team/team-angel.jpg?v=2",
    alt: "Angel Velkovski, Senior QA Engineer at WonderIT",
  },
  {
    name: "Dime Nacevski",
    title: "Digital Growth Strategist",
    image: "/team/team-dime.jpg?v=6",
    alt: "Dime Nacevski, Digital Growth Strategist at WonderIT",
  },
];

export function formatCategory(category: string) {
  return category.replace(/-/g, " ");
}

export function mergeProjects(wpProjects: Project[]): Project[] {
  if (wpProjects.length === 0) return STATIC_PROJECTS;
  const merged = [...wpProjects];
  const names = new Set(merged.map((p) => p.name.toLowerCase()));
  for (const project of STATIC_PROJECTS) {
    if (!names.has(project.name.toLowerCase())) {
      merged.push(project);
    }
  }
  return merged;
}
