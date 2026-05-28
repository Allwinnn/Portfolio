import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import { skills } from "../data/data";

export default function About() {
  const ref = useRef(null);

  useReveal(ref);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        maxWidth: 900,
        opacity: 0,
        transform: "translateY(20px)",
        transition:
          "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h2 className="numbered-heading">About Me</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: 50,
        }}
        className="about-inner"
      >
        <style>{`
          @media (max-width: 768px) {
            .about-inner {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div>
          <p
            style={{
              marginBottom: 15,
              lineHeight: 1.7,
            }}
          >
            Hello! My name is{" "}
            <strong
              style={{
                color: "var(--lightest-slate)",
              }}
            >
              B Allwin Raj
            </strong>{" "}
            and I enjoy creating things that live on the
            internet. My interest in web development
            started back in college when I decided to try
            building a simple website — turns out, it was
            the beginning of a lifelong passion for code
            and design.
          </p>

          <p
            style={{
              marginBottom: 15,
              lineHeight: 1.7,
            }}
          >
            Fast-forward to today, and I've had the
            privilege of working at{" "}
            <a href="#" className="inline-link">
              a startup
            </a>
            ,{" "}
            <a href="#" className="inline-link">
              a design agency
            </a>
            , and{" "}
            <a href="#" className="inline-link">
              a product company
            </a>
            . My main focus these days is building
            accessible, inclusive products and digital
            experiences for a variety of clients.
          </p>

          <p
            style={{
              marginBottom: 20,
              lineHeight: 1.7,
            }}
          >
            Here are a few technologies I've been working
            with recently:
          </p>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2,minmax(140px,200px))",
              gap: "0 10px",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {skills.map((skill, i) => (
              <li
                key={i}
                style={{
                  position: "relative",
                  marginBottom: 10,
                  paddingLeft: 20,
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fz-xs)",
                  color: "var(--slate)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--green)",
                  }}
                >
                  ▹
                </span>

                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}