import type { ReactNode } from "react";

export default function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="section page-intro">
      <p className="section-label">{label}</p>
      <h1>{title}</h1>
      {description ? <p className="lede">{description}</p> : null}
    </section>
  );
}
