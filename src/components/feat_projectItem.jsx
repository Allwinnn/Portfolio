import { useRef } from "react";
import useReveal from "../hooks/useReveal";

import GitHubIcon from "../icons/GitHubIcon";
import ExternalIcon from "../icons/ExternalIcon";

export default function FeaturedProjectItem({
  proj,
  index,
}) {
  const ref = useRef(null);

  useReveal(ref, index * 100);

  const isOdd = index % 2 === 0;

  return (
    <li
      ref={ref}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        alignItems: "center",
        marginBottom: 100,
        opacity: 0,
        transform: "translateY(20px)",
        transition:
          "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .proj-content {
            grid-column: 1 / -1 !important;
            padding: 40px 40px 30px !important;
            text-align: left !important;
            background-color: rgba(17,34,64,0.9);
            border-radius: var(--border-radius);
          }

          .proj-image {
            grid-column: 1 / -1 !important;
            grid-row: 1 !important;
            opacity: 0.1 !important;
          }

          .proj-tech {
            justify-content: flex-start !important;
          }

          .proj-links {
            justify-content: flex-start !important;
            margin-left: -10px !important;
            margin-right: 0 !important;
          }
        }
      `}</style>

      <div
        className="proj-content"
        style={{
          position: "relative",
          gridColumn: isOdd ? "1 / 7" : "7 / -1",
          gridRow: "1 / -1",
          textAlign: isOdd ? "left" : "right",
          zIndex: 5,
        }}
      >
        <p
          style={{
            margin: "10px 0",
            color: "var(--green)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fz-xs)",
          }}
        >
          Featured Project
        </p>

        <h3
          style={{
            color: "var(--lightest-slate)",
            fontSize: "clamp(24px,5vw,28px)",
            marginBottom: 20,
          }}
        >
          <a
            href={proj.external}
            style={{ color: "inherit" }}
          >
            {proj.title}
          </a>
        </h3>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: 25,
            borderRadius: "var(--border-radius)",
            backgroundColor: "var(--light-navy)",
            color: "var(--light-slate)",
            fontSize: "var(--fz-lg)",
            lineHeight: 1.7,
            boxShadow:
              "0 10px 30px -15px var(--navy-shadow)",
          }}
        >
          {proj.description}
        </div>

        <ul
          className="proj-tech"
          style={{
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
            margin: "25px 0 10px",
            padding: 0,
            listStyle: "none",
            justifyContent: isOdd
              ? "flex-start"
              : "flex-end",
            gap: "0 20px",
          }}
        >
          {proj.tech.map((t, i) => (
            <li
              key={i}
              style={{
                color: "var(--light-slate)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fz-xs)",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div
          className="proj-links"
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: 10,
            justifyContent: isOdd
              ? "flex-start"
              : "flex-end",
            marginLeft: isOdd ? -10 : 0,
            marginRight: isOdd ? 0 : -10,
            color: "var(--lightest-slate)",
          }}
        >
          {proj.github && (
            <a
              href={proj.github}
              aria-label="GitHub"
              style={{
                padding: 10,
                display: "flex",
                color: "inherit",
                transition: "var(--transition)",
              }}
            >
              <div style={{ width: 20, height: 20 }}>
                <GitHubIcon />
              </div>
            </a>
          )}

          {proj.external && (
            <a
              href={proj.external}
              aria-label="External"
              style={{
                padding: 10,
                display: "flex",
                color: "inherit",
                transition: "var(--transition)",
              }}
            >
              <div style={{ width: 22, height: 22 }}>
                <ExternalIcon />
              </div>
            </a>
          )}
        </div>
      </div>

      <div
        className="proj-image"
        style={{
          gridColumn: isOdd ? "6 / -1" : "1 / 8",
          gridRow: "1 / -1",
          position: "relative",
          zIndex: 1,
          boxShadow:
            "0 10px 30px -15px var(--navy-shadow)",
        }}
      >
        <a
          href={proj.external || proj.github || "#"}
          style={{
            display: "block",
            width: "100%",
            backgroundColor: "var(--green)",
            borderRadius: "var(--border-radius)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              paddingBottom: "56.25%",
              position: "relative",
              backgroundColor: "var(--light-navy)",
              filter:
                "grayscale(100%) contrast(1) brightness(90%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
                color: "var(--slate)",
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                />

                <circle
                  cx="8.5"
                  cy="8.5"
                  r="1.5"
                />

                <polyline points="21 15 16 10 5 21" />
              </svg>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fz-xs)",
                }}
              >
                project screenshot
              </span>
            </div>
          </div>

          <div
            className="img-overlay"
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--navy)",
              mixBlendMode: "screen",
              transition: "var(--transition)",
            }}
          />
        </a>
      </div>
    </li>
  );
}