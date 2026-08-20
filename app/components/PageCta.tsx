import { CALENDLY_URL } from "../../lib/calendly";

export default function PageCta({
  title = "Bring the idea, the spreadsheet, or the workflow. We'll turn it into software you actually like using.",
}: {
  title?: string;
}) {
  return (
    <section className="cta" aria-labelledby="page-cta-title">
      <h2 id="page-cta-title">{title}</h2>
      <div className="actions">
        <a className="button" href="/contact">
          Start a conversation
        </a>
        <a
          className="button secondary"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>
    </section>
  );
}
