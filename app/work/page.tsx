import ProjectCarousel from './ProjectCarousel';
import type { Metadata } from "next";
import { getProjects } from '@/lib/wp-graphql';

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

interface Project {
  name: string;
  link: string;
  image: string;
  stack: string;
  category: string;
  content: string;
}

export default async function WorkPage() {
  const wpProjects = await getProjects();
  console.log("Fetched WordPress Projects:", JSON.stringify(wpProjects, null, 2));

  const mappedWpProjects: Project[] = (wpProjects || []).map((node: any) => ({
    name: node.title || "",
    link: node.projectFields?.externalLink || "Not Public",
    image: node.projectFields?.projectImageUrl || "",
    stack: node.projectFields?.techStack || "",
    category: (Array.isArray(node.projectFields?.projectCategory)
      ? node.projectFields.projectCategory[0]
      : node.projectFields?.projectCategory) || "web-apps",
    content: node.projectFields?.projectDescription || "",
  }));

  return (
    <main className="subpage-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "wonderIT Portfolio Projects",
            itemListElement: mappedWpProjects.map((project, index) => ({
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
                  ? project.stack.split(",").map((s: string) => s.trim())
                  : [],
              },
            })),
          }),
        }}
      />
      {/* Work Hero */}
      <section className="py-12 bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Our <span className="gradient-text">Work</span></h1>
          <p className="text-m text-text-secondary max-w-2xl mx-auto" style={{ margin: '0 auto' }}>
            Explore our custom software, mobile app, SaaS, and AI-enhanced development projects built with React, Next.js, React Native, Node.js, and cloud technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section >
        <div className="container">
          <ProjectCarousel projects={mappedWpProjects} />
        </div>
      </section>
    </main>
  );
}
