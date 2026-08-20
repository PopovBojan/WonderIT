import ProjectCarousel from './ProjectCarousel';
import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";
import PageCta from "../components/PageCta";
import { getProjects } from "@/lib/wp-graphql";
import { mergeProjects, type Project } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Software Projects & Case Studies | WonderIT",

  description:
    "Explore WonderIT web, mobile, SaaS, sports technology, real-time tracking, automation, and AI software projects.",

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
        url: "https://wonderit.io/opengraph-image",
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

interface WordPressProject {
  title?: string;
  projectFields?: {
    externalLink?: string;
    projectImageUrl?: string;
    techStack?: string;
    projectCategory?: string | string[];
    projectDescription?: string;
  };
}

export default async function WorkPage() {
  let wpProjects: WordPressProject[] = [];
  try {
    wpProjects = await getProjects();
  } catch {
    wpProjects = [];
  }

  const mappedWpProjects: Project[] = (wpProjects || []).map((node) => ({
    name: node.title || "",
    link: node.projectFields?.externalLink || "Not Public",
    image: node.projectFields?.projectImageUrl || undefined,
    stack: node.projectFields?.techStack || "",
    category:
      (Array.isArray(node.projectFields?.projectCategory)
        ? node.projectFields.projectCategory[0]
        : node.projectFields?.projectCategory) || "web-apps",
    content: node.projectFields?.projectDescription || "",
  }));

  const projects = mergeProjects(mappedWpProjects)
    .filter((project) => Boolean(project.name))
    .map((project) => ({
      ...project,
      featured:
        project.featured || project.name.toLowerCase() === "next11",
    }));

  return (
    <main className="work-page">
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
                image: project.image || undefined,
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
      <PageIntro
        label="Work"
        title="Software shipped for real operators."
        description="Explore custom software, mobile apps, SaaS, and AI-enhanced products built with React, Next.js, React Native, Node.js, and cloud technologies."
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Work" },
        ]}
      />

      <section className="section portfolio">
        <ProjectCarousel projects={projects} />
      </section>

      <PageCta title="Like the work? Let's talk about the product you want to ship next." />
    </main>
  );
}
