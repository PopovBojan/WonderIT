import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { cache } from "react";
import { getPostBySlug } from "@/lib/wp-graphql";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const getPost = cache(getPostBySlug);

function plainText(value?: string) {
  return (value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/\s+/g, " ")
    .trim();
}

function metaDescription(value?: string) {
  const text = plainText(value);
  if (text.length <= 155) return text;
  return text.slice(0, 156).replace(/\s+\S*$/, "").replace(/[,:;–-]+$/, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPost(slug);
  } catch {
    post = null;
  }
  if (!post) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const description =
    metaDescription(post.excerpt || post.content) ||
    "Software engineering and digital product insights from the WonderIT team.";
  const url = `https://wonderit.io/blog/${post.slug}`;
  const image =
    post.featuredImage?.node.sourceUrl ||
    "https://wonderit.io/opengraph-image";

  return {
    title: `${post.title} | WonderIT Blog`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
      authors: post.author?.node?.name ? [post.author.node.name] : ["WonderIT"],
      tags: post.categories?.nodes.map((category) => category.name),
      images: [{ url: image, alt: post.featuredImage?.node.altText || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPost(slug);
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  const url = `https://wonderit.io/blog/${post.slug}`;
  const description =
    metaDescription(post.excerpt || post.content) ||
    "Software engineering and digital product insights from the WonderIT team.";
  const author = post.author?.node?.name || "WonderIT";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: plainText(post.title),
        description,
        datePublished: post.date,
        dateModified: post.modified || post.date,
        image:
          post.featuredImage?.node.sourceUrl ||
          "https://wonderit.io/opengraph-image",
        author: { "@type": "Person", name: author },
        publisher: { "@id": "https://wonderit.io/#organization" },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://wonderit.io/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://wonderit.io/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: plainText(post.title),
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <main className="blog-page blog-post-page subpage-padding min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container">
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-accent-primary mb-12 hover:translate-x-[-5px] transition-transform" style={{ fontSize: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative" style={{ top: '0.5px' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="relative" style={{ top: '-1px' }}>Back to Blog</span>
        </Link>

        {/* Post Header */}
        <header className="mb-16 max-w-4xl">
          <div className="flex gap-4 mb-6">
            
          </div>
          <h1 className="text-4xl mb-6 md:text-6xl mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-m text-text-secondary">
            By {author} · {new Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.date))}
          </p>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-[400px] md:h-[600px] mb-16 rounded-3xl overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>

        {/* Footer CTA */}
        <footer className="mt-24 py-16 border-t border-black/5 text-center">
          <h3 className="text-3xl mb-6">Have a project in mind?</h3>
          <p className="text-text-secondary mb-10 text-lg">Let&apos;s build something amazing together.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </footer>
      </div>
    </main>
  );
}
