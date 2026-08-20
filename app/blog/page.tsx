import Link from "next/link";
import Image from "next/image";
import { getAllPosts, type BlogPost } from "@/lib/wp-graphql";
import PageIntro from "../components/PageIntro";
import PageCta from "../components/PageCta";

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
    title:
      "WonderIT Blog - Software Engineering, AI & Product Innovation",

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
    title:
      "WonderIT Blog - Software Engineering, AI & Product Innovation",

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

  return (
    <main className="blog-page">
      <PageIntro
        label="Insights"
        title="Insights"
        description="Practical notes on modern software engineering, AI-powered applications, scalable architecture, automation, and digital product strategy."
        crumbs={[
          { href: "/", label: "WonderIT" },
          { label: "Insights" },
        ]}
      />

      <section className="section portfolio">
        {posts.length > 0 ? (
          <div className="project-grid">
            {posts.map((post) => (
              <article key={post.id} className="project-card">
                <div className="project-media project-media--cover">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>WonderIT</span>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <h3>{post.title}</h3>
                  <div
                    className="post-excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                  />
                  <Link href={`/blog/${post.slug}`} className="project-link">
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <article className="about-panel">
            <h3>No posts found</h3>
            <p>
              We&apos;re currently preparing some amazing content for you. Stay
              tuned!
            </p>
          </article>
        )}
      </section>

      <PageCta title="Have a product question that isn't on the blog? Ask the team directly." />
    </main>
  );
}
