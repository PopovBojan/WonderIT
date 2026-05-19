'use client';

interface Project {
  name: string;
  link: string;
  image: string;
  stack: string;
  category: string;
  content: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex flex-col relative overflow-hidden glass transition-all hover:translate-y-[-5px]"
      style={{ maxWidth: '600px', width: '100%', minWidth: 0, margin: '0 auto', borderRadius: '2.5rem' }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-black/10"
        style={{ height: '250px', minHeight: '250px', maxHeight: '250px', width: '100%' }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content — fixed 350px, button always at bottom */}
      <div
        className="p-8 flex flex-col"
        style={{ height: '400px', minHeight: '400px', maxHeight: '400px', overflow: 'hidden' }}
      >
        <span className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">
          {project.category.replace('-', ' ')}
        </span>

        <h3 className="text-l mb-1 font-semibold text-white">{project.name}</h3>
        <p className="text-s text-text-secondary/70 mb-3 font-mono">{project.stack}</p>

        <p
          className="text-s text-text-secondary text-sm"
          style={{
            flex: 1,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 5,
          }}
        >
          {project.content}
        </p>

        {/* Button always pinned to bottom */}
        <div className="mt-auto pt-3">
          {project.link !== 'Not Public' ? (
            <a
              href={project.link.split(',')[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view-project"
            >
              View Project
            </a>
          ) : (
            <span className="btn-not-public">Not Public</span>
          )}
        </div>
      </div>
    </div>
  );
}
