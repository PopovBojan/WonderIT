import type { BlogPost } from "@/lib/wp-graphql";

export type InsightCardData = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  categorySlug: string;
  image?: string;
  imageAlt?: string;
  author: string;
};

export const TOPIC_TONES = ["violet", "aqua", "coral", "green"] as const;

export function stripHtml(value?: string) {
  return (value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8217;|&rsquo;|&#039;/g, "’")
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

const TOPIC_RULES: Array<{
  slug: string;
  name: string;
  test: RegExp;
}> = [
  { slug: "ai", name: "AI", test: /\bai\b|artificial intelligence|llm|servicebrief|machine learning/i },
  { slug: "mobile", name: "Mobile", test: /react native|mobile app|ios|android/i },
  { slug: "web", name: "Web", test: /next\.js|react\.js|web application|frontend/i },
  { slug: "product", name: "Product", test: /digital product|architecture|saas|scalable|product strategy/i },
];

export function inferTopic(title: string, excerpt = "") {
  const fromTitle = TOPIC_RULES.find((rule) => rule.test.test(title));
  if (fromTitle) return { name: fromTitle.name, slug: fromTitle.slug };
  const fromExcerpt = TOPIC_RULES.find((rule) => rule.test.test(excerpt));
  return fromExcerpt
    ? { name: fromExcerpt.name, slug: fromExcerpt.slug }
    : { name: "Notes", slug: "notes" };
}

export function primaryCategory(post: BlogPost) {
  const nodes = post.categories?.nodes ?? [];
  const preferred = nodes.find(
    (node) => node.slug && node.slug !== "uncategorized",
  );
  if (preferred) {
    return { name: preferred.name, slug: preferred.slug };
  }
  return inferTopic(stripHtml(post.title), stripHtml(post.excerpt));
}

export function toInsightCard(post: BlogPost): InsightCardData {
  const category = primaryCategory(post);
  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title),
    excerpt: stripHtml(post.excerpt),
    date: post.date,
    dateLabel: formatPostDate(post.date),
    category: category.name,
    categorySlug: category.slug,
    image: post.featuredImage?.node.sourceUrl,
    imageAlt: post.featuredImage?.node.altText || stripHtml(post.title),
    author: post.author?.node?.name || "WonderIT",
  };
}

export function uniqueTopics(posts: InsightCardData[]) {
  const counts = new Map<string, { name: string; count: number }>();
  for (const post of posts) {
    const current = counts.get(post.categorySlug);
    if (current) {
      current.count += 1;
    } else {
      counts.set(post.categorySlug, { name: post.category, count: 1 });
    }
  }
  return [...counts.entries()]
    .map(([slug, value]) => ({ slug, ...value }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function topicTone(slug: string, topics: { slug: string }[]) {
  const index = Math.max(
    0,
    topics.findIndex((topic) => topic.slug === slug),
  );
  return TOPIC_TONES[(index + 1) % TOPIC_TONES.length];
}
