import { CALENDLY_EMBED_SRC } from "../../lib/calendly";

export default function CalendlyEmbed() {
  return (
    <iframe
      src={CALENDLY_EMBED_SRC}
      title="Book a call with Calendly"
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      allow="fullscreen"
      style={{
        width: "100%",
        height: "600px",
        border: 0,
        display: "block",
        borderRadius: "12px",
      }}
    />
  );
}
