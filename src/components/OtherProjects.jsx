import { useState } from "react";
import { otherProjects } from "../data/data";
import otherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  const [showMore, setShowMore] = useState(false);

  const LIMIT = 6;

  const displayed = showMore
    ? otherProjects
    : otherProjects.slice(0, LIMIT);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize:
            "clamp(24px,5vw,var(--fz-heading))",
          color: "var(--lightest-slate)",
          fontWeight: 600,
        }}
      >
        Other Noteworthy Projects
      </h2>

      <a
        href="#"
        className="inline-link"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-sm)",
          marginTop: 8,
        }}
      >
        view the archive
      </a>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(300px,1fr))",
          gap: 15,
          width: "100%",
          marginTop: 50,
        }}
      >
        {displayed.map((proj, i) => (
          <OtherProjectCard
            key={i}
            proj={proj}
            delay={i * 100}
          />
        ))}
      </ul>

      <button
        className="small-button"
        style={{ marginTop: 80 }}
        onClick={() => setShowMore(!showMore)}
      >
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
}
