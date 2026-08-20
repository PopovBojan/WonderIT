import Image from "next/image";
import type { Metadata } from "next";
import { cache } from "react";
import { getPostBySlug } from "@/lib/wp-graphql";
import { notFound } from "next/navigation";
import PageIntro from "../../components/PageIntro";

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
    <main className="blog-page blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageIntro
        label="Insights"
        title={post.title}
        description={`By ${author} · ${new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.date))}`}
        crumbs={[
          { href: "/", label: "WonderIT" },
          { href: "/blog", label: "Insights" },
          { label: "Article" },
        ]}
      />

      {post.featuredImage ? (
        <div className="blog-article__media">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 1180px"
            priority
          />
        </div>
      ) : null}

      <article className="blog-article">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
        <div className="blog-article__cta">
          <h2>Have a project in mind?</h2>
          <p className="lede">Let&apos;s turn it into production software.</p>
          <a className="button primary" href="/contact">
            Start a conversation
          </a>
        </div>
      </article>
    </main>
  );
}
