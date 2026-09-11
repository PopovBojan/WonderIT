import type { Metadata } from "next";
import PageCta from "../components/PageCta";
import WorkCanvas from "../work/WorkCanvas";
import {
  featuredCaseStudies,
  getCaseStudies,
} from "@/lib/case-studies";
import CaseStudiesHero from "./CaseStudiesHero";
import CaseStudiesFeatured from "./CaseStudiesFeatured";
import CaseStudiesGallery from "./CaseStudiesGallery";

export const metadata: Metadata = {
  title: "Case Studies | WonderIT",
  description:
    "WonderIT case studies on sports-tech, field service AI, legal WordPress, mobile, SaaS, real-time systems, and software that operators actually use.",
  keywords: [
    "software case studies",
    "React Native case study",
    "sports technology software",
    "WordPress case study",
    "legal SEO websites",
    "SaaS case studies",
    "real-time mobile apps",
    "WonderIT portfolio",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | WonderIT",
    description:
      "Stories from products we shipped for coaches, clubs, field teams, and law firms — including Next11, ServiceBrief AI, and Case Engine.",
    url: "https://wonderit.io/case-studies",
    siteName: "WonderIT",
    images: [
      {
        url: "https://wonderit.io/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WonderIT case studies",
      },
    ],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();
  const featured = featuredCaseStudies(studies, 3);
  const featuredSlugs = new Set(featured.map((study) => study.slug));
  const gallery = studies.filter((study) => !featuredSlugs.has(study.slug));

  return (
    <main className="work-page case-studies-page">
      <WorkCanvas wordmark="CASES" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "WonderIT Case Studies",
            url: "https://wonderit.io/case-studies",
            description:
              "Case studies of custom software WonderIT shipped for real operators.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: studies.map((study, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://wonderit.io/case-studies/${study.slug}`,
                name: study.client,
              })),
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      <CaseStudiesHero />
      {featured.length ? <CaseStudiesFeatured studies={featured} /> : null}
      <CaseStudiesGallery studies={gallery} />
      <PageCta title="Working on something that needs this kind of care? Let's talk about the product you want to ship next." />
    </main>
  );
}
