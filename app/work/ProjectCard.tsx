interface Project {
  name: string;
  link: string;
  image: string | null;
  stack: string;
  category: string;
  content: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const category = project.category.replace(/-/g, " ");
  const publicLink = project.link !== "Not Public" ? project.link.split(",")[0] : null;

  return (
    <article className="project-card">
      <div className="project-media project-media--logo">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="project-placeholder">
            <span>{project.name}</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <span className="project-kicker">{category}</span>
        <h3>{project.name}</h3>
        {project.stack ? <p className="project-stack">{project.stack}</p> : null}
        <p>{project.content}</p>
        {publicLink ? (
          <a
            className="project-link"
            href={publicLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        ) : (
          <span className="project-link">Not Public</span>
        )}
      </div>
    </article>
  );
}
