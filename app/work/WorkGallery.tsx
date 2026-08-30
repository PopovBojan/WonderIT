"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/site-content";
import { categoryLabel, FILTER_TONES } from "./work-utils";

export default function WorkGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      counts.set(project.category, (counts.get(project.category) || 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [projects]);

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (!projects.length) {
    return <p className="lede">Projects will show here shortly.</p>;
  }

  return (
    <section className="work-studio" aria-labelledby="work-studio-title">
      <div className="work-studio__head">
        <div>
          <p className="section-label">All projects</p>
          <h2 id="work-studio-title">A wider look at what we build.</h2>
        </div>
        <p className="work-studio__lede">
          <strong>Filter by product type.</strong> Every card is a shipped
          system — some public, some still behind a login.
        </p>
      </div>

      <div className="work-toolbar">
        <div className="work-filters" role="tablist" aria-label="Filter projects">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            className={`work-filter${filter === "all" ? " is-active" : ""}`}
            data-tone={FILTER_TONES.all}
            onClick={() => setFilter("all")}
          >
            All work
            <em>{projects.length}</em>
          </button>
          {categories.map(([id, count]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              className={`work-filter${filter === id ? " is-active" : ""}`}
              data-tone={FILTER_TONES[id] || "violet"}
              onClick={() => setFilter(id)}
            >
              {categoryLabel(id)}
              <em>{count}</em>
            </button>
          ))}
        </div>
        <p className="work-count">
          Showing <b>{visible.length}</b> of {projects.length}
        </p>
      </div>

      {visible.length ? (
        <div className="work-grid">
          {visible.map((project, index) => (
            <ProjectCard
              key={`${project.name}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <p className="lede">No projects in this category yet.</p>
      )}
    </section>
  );
}
