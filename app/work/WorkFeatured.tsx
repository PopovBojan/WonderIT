import type { Project } from "@/lib/site-content";
import {
  categoryLabel,
  displayName,
  projectImageUrl,
  projectSlug,
  publicLink,
  stackTags,
} from "./work-utils";

function FeaturedCard({ project }: { project: Project }) {
  const href = publicLink(project);
  const image = projectImageUrl(project.image, 1400);
  const tags = stackTags(project.stack, 4);
  const slug = projectSlug(project.name);
  const titleId = `featured-${slug}`;
  const showVisit = Boolean(href) && slug !== "next11";

  return (
    <div className="work-featured-wrap">
      <article className="work-featured" aria-labelledby={titleId}>
      <div
        className={`work-featured__media${slug === "servicebriefai" ? " is-shot" : ""}`}
      >
        {image ? (
          <img src={image} alt={displayName(project.name)} />
        ) : (
          <div className="work-featured__placeholder">
            <span>{project.placeholder || project.name}</span>
          </div>
        )}
        <span className="work-featured__badge">Featured</span>
      </div>

      <div className="work-featured__body">
        <p className="work-featured__cat">{categoryLabel(project.category)}</p>
        <h2 id={titleId}>{displayName(project.name)}</h2>
        <p className="work-featured__copy">{project.content}</p>
        <div className="work-featured__foot">
          {tags.length ? (
            <ul className="work-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          {showVisit ? (
            <a
              className="button primary"
              href={href ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
              <span aria-hidden="true">→</span>
            </a>
          ) : null}
        </div>
        </div>
      </article>
      {project.content ? (
        <span className="work-tip" aria-hidden="true">
          {project.content}
        </span>
      ) : null}
    </div>
  );
}

export default function WorkFeatured({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="work-featured-row" aria-label="Featured case studies">
      {projects.map((project) => (
        <FeaturedCard key={project.name} project={project} />
      ))}
    </section>
  );
}
