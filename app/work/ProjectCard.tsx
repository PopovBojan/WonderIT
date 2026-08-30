"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import type { Project } from "@/lib/site-content";
import { detectLightLogo, logoLooksLight } from "@/lib/detect-light-logo";
import {
  categoryLabel,
  displayName,
  projectImageUrl,
  publicLink,
  stackTags,
  usesCoverImage,
} from "./work-utils";

function CardShell({
  href,
  className,
  children,
}: {
  href: string | null;
  className: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return <article className={className}>{children}</article>;
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = publicLink(project);
  const image = projectImageUrl(project.image, 720);
  const cover = usesCoverImage(project);
          const tags = stackTags(project.stack, 3);
  const [light, setLight] = useState(
    logoLooksLight(project.name, project.image),
  );
  const number = String(index + 1).padStart(2, "0");

  return (
    <CardShell
      href={href}
      className={`work-card${cover ? " is-cover" : ""}${light && !cover ? " is-light" : ""}`}
    >
      <div className="work-card__media">
        <span className="work-card__index" aria-hidden="true">
          {number}
        </span>
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            onLoad={(event) => {
              if (cover || light) return;
              if (detectLightLogo(event.currentTarget)) setLight(true);
            }}
          />
        ) : (
          <div className="work-card__placeholder">
            <span>{project.placeholder || project.name.slice(0, 18)}</span>
          </div>
        )}
      </div>
      <div className="work-card__body">
        <span className="work-card__cat">{categoryLabel(project.category)}</span>
        <h3>{displayName(project.name)}</h3>
        <p>{project.content}</p>
        {tags.length ? (
          <ul className="work-tags work-tags--compact">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        <span className={href ? "work-card__cta" : "work-card__private"}>
          {href ? (
            <>
              View project <i aria-hidden="true">→</i>
            </>
          ) : (
            "Not public"
          )}
        </span>
      </div>
    </CardShell>
  );
}
