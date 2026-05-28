import { useRef, useState } from "react";

import useReveal from "../hooks/useReveal";

import FolderIcon from "../icons/FolderIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalIcon from "../icons/ExternalIcon";

export default function OtherProjectCard({
  proj,
  delay,
}) {
  const ref = useRef(null);

  useReveal(ref, delay);

  const [hovered, setHovered] = useState(false);

  return (
    <li
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition:
          "opacity 0.5s ease, transform 0.5s ease",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "2rem 1.75rem",
          borderRadius: "var(--border-radius)",
          backgroundColor: "var(--light-navy)",
          boxShadow:
            "0 10px 30px -15px var(--navy-shadow)",
          transform: hovered
            ? "translateY(-7px)"
            : "none",
          transition: "var(--transition)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 35,
            }}
          >
            <div
              style={{
                color: "var(--green)",
                width: 40,
                height: 40,
              }}
            >
              <FolderIcon />
            </div>

            <div
              style={{
                display: "flex",
                gap: 5,
                color: "var(--light-slate)",
              }}
            >
              {proj.github && (
                <a
                  href={proj.github}
                  style={{
                    display: "flex",
                    padding: "5px 7px",
                    color: "inherit",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  >
                    <GitHubIcon />
                  </div>
                </a>
              )}

              {proj.external && (
                <a
                  href={proj.external}
                  style={{
                    display: "flex",
                    padding: "5px 7px",
                    color: "inherit",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                    }}
                  >
                    <ExternalIcon />
                  </div>
                </a>
              )}
            </div>
          </div>

          <h3
            style={{
              margin: "0 0 10px",
              color: "var(--lightest-slate)",
              fontSize: "var(--fz-xxl)",
            }}
          >
            {proj.title}
          </h3>

          <p
            style={{
              color: "var(--light-slate)",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            {proj.desc}
          </p>
        </div>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0 15px",
            padding: 0,
            margin: "20px 0 0",
            listStyle: "none",
          }}
        >
          {proj.tech.map((t, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fz-xxs)",
                color: "var(--slate)",
                lineHeight: 1.75,
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}