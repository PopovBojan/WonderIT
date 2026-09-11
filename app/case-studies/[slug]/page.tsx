import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageCta from "../../components/PageCta";
import { getCaseStudy, getCaseStudies } from "@/lib/case-studies";
import CaseStudyTemplate from "../CaseStudyTemplate";

function plainText(value?: string) {
  return (value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/\s+/g, " ")
    .trim();
}

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return {
      title: "Case study not found",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://wonderit.io/case-studies/${study.slug}`;
  const description = study.seoDescription || plainText(study.overview);
  const image = study.image || "https://wonderit.io/opengraph-image";

  return {
    title: study.seoTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: study.seoTitle,
      description,
      images: [{ url: image, alt: study.imageAlt || study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seoTitle,
      description,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = `https://wonderit.io/case-studies/${study.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.title,
        description: study.seoDescription,
        image: study.image,
        author: { "@type": "Organization", name: "WonderIT" },
        publisher: { "@id": "https://wonderit.io/#organization" },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        about: { "@type": "Organization", name: study.client },
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
            name: "Case studies",
            item: "https://wonderit.io/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.client,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <main className="work-page case-studies-page case-study-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CaseStudyTemplate study={study} />
      <PageCta title={study.ctaHeading} />
    </main>
  );
}
