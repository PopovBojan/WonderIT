import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { getAllPosts, type BlogPost } from "@/lib/wp-graphql";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://wonderit.io";

  let posts: BlogPost[] = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Keep the static sitemap available if WordPress is temporarily offline.
  }

  const caseStudies = CASE_STUDIES;

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified || post.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.modified || study.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogUrls,
    ...caseStudyUrls,
  ];
}
