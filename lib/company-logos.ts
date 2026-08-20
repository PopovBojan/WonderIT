import type { Project } from "./site-content";
import { STATIC_PROJECTS } from "./site-content";

export type CompanyLogo = {
  id: string;
  name: string;
  /** Optional image URL — used when present, otherwise a text wordmark is shown. */
  logoUrl?: string;
  /** True when the mark is light/white and needs a dark tile. */
  onDark?: boolean;
};

function logoLooksLight(name: string, url?: string) {
  const haystack = `${name} ${url ?? ""}`.toLowerCase();
  return /white|inverted|on[-_]?dark|light[-_]?logo/.test(haystack);
}

/** Prefer a stable Google-hosted thumbnail when WP stores Drive links. */
export function normalizeLogoUrl(url?: string): string | undefined {
  if (!url) return undefined;

  const driveId =
    url.match(/[?&]id=([^&]+)/)?.[1] ||
    url.match(/\/d\/([^/]+)/)?.[1] ||
    url.match(/\/file\/d\/([^/]+)/)?.[1];

  if (driveId) {
    return `https://lh3.googleusercontent.com/d/${driveId}=w320`;
  }

  return url;
}

export function projectsToLogos(projects: Project[]): CompanyLogo[] {
  return projects
    .map((project, index) => {
      const logoUrl = normalizeLogoUrl(project.image);
      return {
        id: `${slugify(project.name)}-${index}`,
        name: project.name,
        logoUrl,
        onDark: logoLooksLight(project.name, logoUrl),
      };
    })
    .filter((logo) => Boolean(logo.logoUrl));
}

export type TestimonialLogoNode = {
  title?: string | null;
  slug?: string | null;
  databaseId?: number | null;
  testimonialLogos?: {
    image?: string | null;
  } | null;
};

/** Map WPGraphQL `testimonialLogos` CPT nodes into marquee logos. */
export function testimonialLogosToCompanyLogos(
  nodes: TestimonialLogoNode[],
): CompanyLogo[] {
  return nodes
    .map((node, index) => {
      const name = node.title?.trim() || `logo-${index}`;
      const id = node.slug
        ? `${slugify(node.slug)}-${node.databaseId ?? index}`
        : `${slugify(name)}-${node.databaseId ?? index}`;
      const logoUrl = normalizeLogoUrl(node.testimonialLogos?.image ?? undefined);
      return {
        id,
        name,
        logoUrl,
        onDark: logoLooksLight(name, logoUrl),
      };
    })
    .filter((logo) => Boolean(logo.logoUrl));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Fallback when remote testimonial logos are unavailable. */
export const COMPANY_LOGOS: CompanyLogo[] = projectsToLogos(STATIC_PROJECTS);

export function shuffleLogos(logos: CompanyLogo[]): CompanyLogo[] {
  const next = [...logos];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}
