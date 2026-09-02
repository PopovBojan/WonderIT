import { getAllPosts, type BlogPost } from "@/lib/wp-graphql";
import PageCta from "../components/PageCta";
import InsightsCanvas from "./InsightsCanvas";
import InsightsFeed from "./InsightsFeed";
import InsightsHero from "./InsightsHero";
import { toInsightCard, uniqueTopics } from "./insights-utils";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Software Engineering & AI Insights | WonderIT",

  description:
    "Practical WonderIT insights on custom software, scalable architecture, AI automation, SaaS engineering, and modern digital product development.",

  keywords: [
    "software development blog",
    "AI development insights",
    "custom software engineering",
    "Next.js development",
    "React development",
    "mobile app development",
    "SaaS development",
    "automation systems",
    "digital product strategy",
    "software architecture",
    "web development",
    "AI integrations",
    "startup technology",
    "enterprise software",
  ],

  openGraph: {
    title: "WonderIT Blog - Software Engineering, AI & Product Innovation",

    description:
      "Insights on AI integrations, modern software development, scalable systems, SaaS products, automation, and digital transformation from the WonderIT team.",

    url: "https://wonderit.io/blog",
    siteName: "WonderIT",

    images: [
      {
        url: "https://wonderit.io/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WonderIT Blog",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WonderIT Blog - Software Engineering, AI & Product Innovation",

    description:
      "Thoughts, insights, and practical knowledge on AI, software engineering, SaaS platforms, and modern digital products.",

    images: ["https://wonderit.io/twitter-image"],
  },

  alternates: {
    canonical: "https://wonderit.io/blog",
  },
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = (await getAllPosts()) || [];
  } catch {
    posts = [];
  }

  const notes = posts.map(toInsightCard);
  const topics = uniqueTopics(notes);
  const latestYear = notes[0]
    ? new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        new Date(notes[0].date),
      )
    : String(new Date().getFullYear());

  return (
    <main className="insights-page">
      <InsightsCanvas />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "WonderIT Insights",
            url: "https://wonderit.io/blog",
            description:
              "Practical notes on software engineering, AI-powered products, and digital product strategy.",
            blogPost: notes.map((note) => ({
              "@type": "BlogPosting",
              headline: note.title,
              url: `https://wonderit.io/blog/${note.slug}`,
              datePublished: note.date,
              author: { "@type": "Person", name: note.author },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />

      <InsightsHero
        postCount={notes.length}
        topicCount={topics.length || 1}
        latestYear={latestYear}
      />

      <InsightsFeed posts={notes} />

      <PageCta title="Have a product question that isn't in these notes? Ask the team directly." />
    </main>
  );
}
