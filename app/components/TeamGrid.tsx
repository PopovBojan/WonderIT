import { TEAM } from "../../lib/site-content";

function memberClass(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {TEAM.map((member) => (
        <article
          key={member.name}
          className={`team-card team-card--${memberClass(member.name)}`}
        >
          <div className="team-photo">
            <img src={member.image} alt={member.alt} loading="lazy" />
          </div>
          <div className="team-meta">
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
