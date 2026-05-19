import ProjectCarousel from './ProjectCarousel';
import type { Metadata } from "next";

const projects = [
  {
    name: "Next11",
    link: "https://www.next11.com/",
    image: "https://cdn.prod.website-files.com/609a6a87708057326383b774/65a643e5c56b48d35b9382c7_Tiles.webp",
    stack: "ReactNative, NodeJs, Firebase, LLM",
    category: "mobile-apps",
    content: "Next11 is a performance-tracking app for football players and teams. It works with lightweight wearable tags to capture live physical, technical, and tactical data during training and matches. Players can track their progress, review metrics, and set goals, while coaches get real-time insights for workload, performance, and team development.",
  },
  {
    name: "BetterCoaching",
    link: "https://better-coaching.dk/",
    image: "https://better-coaching.dk/wp-content/uploads/2025/09/bc_camp_app_player1.png",
    stack: "ReactJs, React Native, NodeJS, MongoDB, LLM",
    category: "mobile-apps",
    content: "Better Coaching is a digital platform built for football clubs and coaches. Plan, share knowledge, and optimise training across all teams—U5 to U19 (boys & girls). Access year-plans, age-specific drills, and communication tools to streamline daily practice and enhance player development.",
  },
  {
    name: "MOBILE DAILY NEWS FEED APP",
    link: "https://itunes.apple.com/mk/app/daily-feed-app/id1401337497",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19NA2F_seYiNuin5Iu74v-DpJTbRLHdGF",
    stack: "ReactNative, NodeJs, Javascript, Flexbox",
    category: "mobile-apps",
    content: "IOS News Feed aggregator built with React Native and NodeJs for delivering the latest daily news via API services.",
  },
  {
    name: "BEAM APP",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&sz=h373&id=1j0ZZAmfzHlnMP8_LTUJzJtBfMF6tw739",
    stack: "ReactJs, NodeJs, Firebase",
    category: "web-apps",
    content: "Web application for dispatching and tracking packages in realtime.",
  },
  {
    name: "APPSTOREMETRIX ADDON",
    link: "https://chrome.google.com/webstore/detail/appstoremetrix/eonflbgifkcopaagegpajbafilncjief?hl=en",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1na2Pj8dHqSUIaK8TlDC2fEZ6iVzFtRxq",
    stack: "Javascript, Google Apps Script, Firebase",
    category: "google-web",
    content: "Google Spreadsheet Addon for pulling up reports from App Store and Google Playstore, analyse data and visualize.",
  },
  {
    name: "MESSAGE APPLICATION WITH PGP ENCRYPTION",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=172ErxbtRFpaqtblXcOjqT6flXrtlQ-VL",
    stack: "Swift, Java, NodeJs, PGP Encryption, PGP Key Server, Mail Server",
    category: "mobile-apps",
    content: "Eclipse chat is an messaging application with main accent on encryption of messages. Every message is encrypted on the client with PGP encryption and key exchange server for exchanging public keys.",
  },
  {
    name: "ANYWHR",
    link: "http://anywhr.de",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1t3VIQNnDKsyvWK6EngrU1nF936d4AOIu",
    stack: "ReactJs, NodeJs, Webpack, MongoDB",
    category: "web-apps",
    content: "Web application for Traveling and Flight Booking.",
  },
  {
    name: "FLEET MANAGEMENT TRACKING COMPANY",
    link: "https://desktop.intelitrack.co.uk",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=19l0_U4v94G_DziyxInJ_zO-pXLqDOe57",
    stack: "ReactJs, NodeJs, ExpressJs, JavaScript, Docker, CSS Grid",
    category: "web-apps",
    content: "Application for vehicle tracking in real time and displaying it's information while can provide statistical data for it's track movement.",
  },
  {
    name: "GAMING PLATFORM FOR SIMILAR MATCHING PLAYERS",
    link: "https://www.fammapp.com/",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=11uDR7LkFhH5e3v72W6_bHp2sTL4J8bTZ",
    stack: "ReactJs, NodeJs, ElectronJS, RethinkDB, SocketIO",
    category: "web-apps",
    content: "Electron application for matching players depending on their preferences with ability to add friends and open conversation.",
  },
  {
    name: "SPREADSHEET IMAGE ADDON",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1gnZLFzDHtoLEoleXre5w5yFc6RCmUsmJ",
    stack: "Javascript, Google Apps Script, Firebase, API",
    category: "google-web",
    content: "Google Spreadsheet Addon for displaying Google Drive images and ability to search and insert directly in cell.",
  },
  {
    name: "INTELIZZZ FLEET MANAGEMENT APP",
    link: "https://itunes.apple.com/us/app/intelizzz/id1305245952?mt=8",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1HZBiU0ODDaoDVGgsZGQIAMeIHa8HRqFb",
    stack: "React Native, NodeJs, JavaScript, Flexbox",
    category: "mobile-apps",
    content: "Intelizzz is a unique tool designed for fleet managers or just regular people that wish to track and monitor their assets.",
  },
  {
    name: "MADTHREAD",
    link: "https://www.madthread.com",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1fl3sJWMc0QumzNy4qjpIKUTOealk1G7K",
    stack: "React Native, NodeJs, JavaScript, Flexbox",
    category: "mobile-apps",
    content: "Mobile E-commerce application to Rent, Wear and Swap clothes from famous brands.",
  },
  {
    name: "DEL MAR BOOKING APP",
    link: "https://owner.thisisdelmar.com",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1ATg82vx0CdrYAMGqMbWUh1eOD2kZHTg9",
    stack: "ReactJs, NodeJs, Express, MongoDb, Image Storage Server",
    category: "web-apps",
    content: "Web Application written in ReactJS to allow owner of properties to manage their reservations and have an overview of it.",
  },
  {
    name: "FACTORY MANAGEMENT APP",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1NWzXH1dD-S-Nt6ZVSqiQiGDb2MBMvh0S",
    stack: "NodeJs, Google Apps Script, Firebase",
    category: "google-web",
    content: "Web Application written in Google Apps Script allowing a factory to overview their production and shipment of goods.",
  },
  {
    name: "FILM STUDIO ACCOUNTING APP",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1Mv78Pqpw868wRMcoxKj1sOt75qhI1QqX",
    stack: "NodeJs, ReactJs, Airtable",
    category: "web-apps",
    content: "The accounting app is written in ReactJs and allows the user to input items add any payment rules, and have an extensive version control over every action taken.",
  },
  {
    name: "STOREFRONT SCHEDULER",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1z_u5JOqHaPHvdAovAEva7N_EOsArOqzt",
    stack: "Google Apps Script, Google Sheets",
    category: "google-web",
    content: "Google Spreadsheets add on developed to automate the process of generating worker schedules.",
  },
  {
    name: "MEDIA REPORT MANAGER",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1mv-CV5EzzYFfM_5tPuIFKw1kDfQdbW3o",
    stack: "ReactJs, NodeJs, Express, Airtable",
    category: "web-apps",
    content: "A two part web application made to allow reporters to enter their reports on an artist/event and present it to their client to review.",
  },
  {
    name: "FLEET MAINTENANCE MANAGEMENT",
    link: "Not Public",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1cuJfVskirArQNEYB1GVfJ9Px9iotQY16",
    stack: "Google Apps Script, Firebase",
    category: "google-web",
    content: "Web application used to track and notify whenever a vehicle within the database requires maintenance.",
  },
  {
    name: "BIG QUERY GOOGLE SHEETS ADDON",
    link: "https://gsuite.google.com/marketplace/app/cifl_connector_for_bigquery/998216722276",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w463&id=1IFQ1B1hGgSguB0gPWEynOmqmhNyROWnW",
    stack: "Google Apps Script, NodeJs, Firebase, Google Spreadsheets, BigQuery",
    category: "google-web",
    content: "Google Spreadsheets Addon allowing full integration of the user's Spreadsheets with Google BigQuery.",
  },
];

export const metadata: Metadata = {
  title:
    "Our Work | Web Apps, Mobile Apps & SaaS Projects | wonderIT",

  description:
    "Explore software projects built by wonderIT including mobile apps, SaaS platforms, real-time tracking systems, sports analytics tools, fleet management software, automation systems, and AI-powered applications.",

  keywords: [
    "software development portfolio",
    "React Native apps",
    "Next.js projects",
    "mobile app portfolio",
    "SaaS case studies",
    "AI software projects",
    "sports analytics software",
    "fleet management software",
    "real-time applications",
    "custom dashboards",
    "Firebase applications",
    "Node.js applications",
    "LLM powered applications",
    "automation tools",
  ],

  metadataBase: new URL("https://wonderit.io"),

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title:
      "Our Work | Web Apps, Mobile Apps & SaaS Projects | wonderIT",

    description:
      "Real-world software projects built with React, Next.js, React Native, Node.js, Firebase, MongoDB, and AI technologies.",

    url: "https://wonderit.io/work",

    siteName: "wonderIT",

    images: [
      {
        url: "https://wonderit.io/images/wonderIT-logo.webp",
        width: 1200,
        height: 630,
        alt: "wonderIT Portfolio",
      },
    ],

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkPage() {
  return (
    <main className="subpage-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "wonderIT Portfolio Projects",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.name,
                applicationCategory:
                  project.category === "mobile-apps"
                    ? "MobileApplication"
                    : "WebApplication",
                applicationSubCategory:
                  project.category === "google-web"
                    ? "Google Workspace Add-on"
                    : project.category === "mobile-apps"
                    ? "Mobile Application"
                    : "Web Application",
                operatingSystem:
                  project.category === "mobile-apps"
                    ? "iOS, Android"
                    : "Web Browser",
                description: project.content,
                url:
                  project.link !== "Not Public"
                    ? project.link
                    : undefined,
                image: project.image,
                creator: {
                  "@type": "Organization",
                  name: "wonderIT",
                  url: "https://wonderit.io",
                },
                keywords: project.stack
                  .split(",")
                  .map((s) => s.trim()),
              },
            })),
          }),
        }}
      />
      {/* Work Hero */}
      <section className="py-12 bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl">Our <span className="gradient-text">Work</span></h1>
          <p className="text-m text-text-secondary max-w-2xl mx-auto" style={{ margin: '0 auto' }}>
           Explore our custom software, mobile app, SaaS, and AI-enhanced development projects built with React, Next.js, React Native, Node.js, and cloud technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-24">
        <div className="container">
          <ProjectCarousel projects={projects} />
        </div>
      </section>
    </main>
  );
}
