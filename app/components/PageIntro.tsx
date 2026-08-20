import type { ReactNode } from "react";
import Link from "next/link";

export default function PageIntro({
  label,
  title,
  description,
  crumbs,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <section className="section page-hero">
      {crumbs?.length ? (
        <nav className="work-crumb" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 ? <span aria-hidden="true"> › </span> : null}
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
            </span>
          ))}
        </nav>
      ) : null}
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {description ? <p className="lede">{description}</p> : null}
    </section>
  );
}
