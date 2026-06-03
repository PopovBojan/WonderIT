import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/wp-graphql";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | WonderIT - Software Engineering, AI & Digital Product Insights",

  description:
    "Explore insights from WonderIT on custom software development, AI-powered applications, scalable architecture, product engineering, automation, and modern digital experiences.",

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
        url: "https://wonderit.io/images/og-image.jpg",
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

    images: ["https://wonderit.io/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://wonderit.io/blog",
  },
};

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = (await getAllPosts()) || [];
  } catch {
    posts = [];
  }

  return (
    <main className="blog-page subpage-padding min-h-screen">
      <div className="container py-12">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl mb-6">
            Insights & <span className="gradient-text">Innovations</span>
          </h1>
          <p className="text-m text-text-secondary  mb-6">
            Discover insights on modern software engineering, AI-powered
            applications, scalable architecture, automation systems, and
            digital product strategy.
          </p>
          <p className="text-m text-text-secondary  mb-6">
            At WonderIT, we share practical knowledge, technical expertise,
            and industry perspectives to help businesses build smarter
            digital experiences and future-ready products.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-3 items-stretch py-12">
          {posts && posts.map((post: any) => (
            <article key={post.id} className="glass rounded-2xl overflow-hidden flex flex-col h-550">
             
                <div className="relative h-150 w-full overflow-hidden shrink-0">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full glass flex items-center justify-center p-8">
                      <Image
                        src="https://wonderit.io/images/wonderIT-logo.webp"
                        alt="WonderIT Logo"
                        width={120}
                        height={60}
                        className="object-contain "
                      />
                    </div>
                  )}
                  
                </div>

                <div className="h-300 p-8 pb-4 overflow-hidden">
                  
                  <h2 className="text-2xl mb-4 line-clamp-3">
                    {post.title}
                  </h2>
                  <div
                    className="text-text-secondary text-m line-clamp-7"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
             

              <div className="h-100 p-8 pt-0 flex items-center">
                <Link href={`/blog/${post.slug}`} className="button primary">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>

        {(!posts || posts.length === 0) && (
          <div className="text-center py-12 glass rounded-2xl">
            <h3 className="text-2xl mb-4">No posts found</h3>
            <p className="text-text-secondary">We're currently preparing some amazing content for you. Stay tuned!</p>
          </div>
        )}
      </div>
    </main>
  );
}
