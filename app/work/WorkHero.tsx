import Link from "next/link";

export default function WorkHero() {
  return (
    <>
      <section className="work-hero" aria-labelledby="work-hero-title">
        <div className="work-hero__inner">
          <h1 id="work-hero-title">Our Work</h1>
        </div>
      </section>
      <nav className="work-crumb" aria-label="Breadcrumb">
        <Link href="/">WonderIT</Link>
        <span aria-hidden="true">›</span>
        <span>Work</span>
      </nav>
    </>
  );
}
