import type { Project } from "@/lib/site-content";
import { normalizeLogoUrl } from "@/lib/company-logos";

export const CATEGORY_LABELS: Record<string, string> = {
  "web-apps": "Web apps",
  "mobile-apps": "Mobile",
  "google-web": "Workspace",
};

const COVER_SLUGS = new Set(["next11", "bettercoaching", "servicebriefai"]);
export const FEATURED_SLUGS = ["bettercoaching", "servicebriefai"] as const;

export function projectSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function isFeaturedProject(name: string) {
  return FEATURED_SLUGS.includes(projectSlug(name) as (typeof FEATURED_SLUGS)[number]);
}

export const FILTER_TONES: Record<string, string> = {
  all: "violet",
  "web-apps": "aqua",
  "google-web": "coral",
  "mobile-apps": "green",
};

export function categoryLabel(category: string) {
  return CATEGORY_LABELS[category] || category.replace(/-/g, " ");
}

export function publicLink(project: Project) {
  if (!project.link || project.link === "Not Public") return null;
  return project.link.split(",")[0].trim();
}

export function stackTags(stack: string, limit = 6) {
  return stack
    .split(/,|\band\b/i)
    .map((tag) => tag.trim().replace(/^and\s+/i, ""))
    .filter(Boolean)
    .slice(0, limit);
}

export function displayName(name: string) {
  const trimmed = name.trim();
  const letters = trimmed.replace(/[^A-Za-z]/g, "");
  if (letters.length < 8) return trimmed;
  const upper =
    [...letters].filter((char) => char === char.toUpperCase()).length /
    letters.length;
  if (upper < 0.82) return trimmed;
  const acronyms = new Set(["pgp", "ios", "api", "llm", "sql", "aws", "ui", "n8n"]);
  return trimmed.toLowerCase().replace(/\b([a-z0-9]+)/g, (word) => {
    if (acronyms.has(word)) return word.toUpperCase();
    return word[0].toUpperCase() + word.slice(1);
  });
}

export function usesCoverImage(project: Project) {
  if (project.featured) return true;
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (COVER_SLUGS.has(slug)) return true;
  return /tiles|screenshot|app_player|cover/i.test(project.image || "");
}

export function projectImageUrl(url?: string, width = 960) {
  const normalized = normalizeLogoUrl(url);
  if (!normalized) return undefined;
  return normalized.replace(/=w\d+$/, `=w${width}`);
}

export function uniqueTechCount(projects: Project[]) {
  const techs = new Set<string>();
  for (const project of projects) {
    for (const tag of stackTags(project.stack, 20)) {
      techs.add(tag.toLowerCase());
    }
  }
  return techs.size;
}
