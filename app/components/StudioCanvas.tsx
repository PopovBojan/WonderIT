type Mark = {
  kind: "tick" | "chip";
  text: string;
  top: string;
  tone?: "aqua" | "coral";
};

export default function StudioCanvas({
  wordmark,
  left,
  right,
}: {
  wordmark: string;
  left: Mark[];
  right: Mark[];
}) {
  return (
    <div className="studio-page__canvas" aria-hidden="true">
      <span className="studio-page__wordmark">{wordmark}</span>

      <div className="studio-page__rule studio-page__rule--left">
        {left.map((mark) => (
          <span
            key={`left-${mark.text}-${mark.top}`}
            className={
              mark.kind === "tick"
                ? "studio-page__tick"
                : `studio-page__chip${mark.tone ? ` studio-page__chip--${mark.tone}` : ""}`
            }
            style={{ top: mark.top }}
          >
            {mark.text}
          </span>
        ))}
      </div>

      <div className="studio-page__rule studio-page__rule--right">
        {right.map((mark) => (
          <span
            key={`right-${mark.text}-${mark.top}`}
            className={
              mark.kind === "tick"
                ? "studio-page__tick"
                : `studio-page__chip${mark.tone ? ` studio-page__chip--${mark.tone}` : ""}`
            }
            style={{ top: mark.top }}
          >
            {mark.text}
          </span>
        ))}
      </div>
    </div>
  );
}
