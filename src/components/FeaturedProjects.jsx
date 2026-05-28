import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import { featuredProjects } from "../data/data";
import FeaturedProjectItem from "./feat_ProjectItem";

export default function FeaturedProjects() {
  const titleRef = useRef(null);

  useReveal(titleRef);

  return (
    <section id="projects">
      <h2
        className="numbered-heading"
        ref={titleRef}
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition:
            "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        Some Things I've Built
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {featuredProjects.map((proj, i) => (
          <FeaturedProjectItem
            key={i}
            proj={proj}
            index={i}
          />
        ))}
      </ul>
    </section>
  );
}