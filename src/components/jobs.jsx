import { useState, useRef } from "react";
import useReveal from "../hooks/useReveal";
import { jobs } from "../data/data";

export default function Jobs() {
  const [activeTab, setActiveTab] = useState(0);

  const ref = useRef(null);

  useReveal(ref);

  return (
    <section
      id="jobs"
      ref={ref}
      style={{
        maxWidth: 700,
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h2 className="numbered-heading">
        Where I've Worked
      </h2>

      <div
        style={{ display: "flex", gap: 0 }}
        className="jobs-inner"
      >
        <style>{`
          @media (max-width: 600px) {
            .jobs-inner {
              flex-direction: column !important;
            }
          }

          @media (max-width: 600px) {
            .tab-list {
              flex-direction: row !important;
              overflow-x: auto;
              width: 100% !important;
              border-left: none !important;
              border-bottom: 2px solid var(--lightest-navy);
              margin-bottom: 20px;
            }
          }

          @media (max-width: 600px) {
            .tab-btn {
              border-left: none !important;
              border-bottom: none !important;
              min-width: 120px;
              justify-content: center;
            }
          }
        `}</style>

        <div
          className="tab-list"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid var(--lightest-navy)",
            minWidth: 120,
          }}
        >
          {jobs.map((job, i) => (
            <button
              key={i}
              className="tab-btn"
              onClick={() => setActiveTab(i)}
              style={{
                display: "flex",
                alignItems: "center",
                height: "var(--tab-height)",
                padding: "0 20px 2px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color:
                  activeTab === i
                    ? "var(--green)"
                    : "var(--slate)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fz-xs)",
                textAlign: "left",
                whiteSpace: "nowrap",
                transition: "var(--transition)",
                borderLeft:
                  activeTab === i
                    ? "2px solid var(--green)"
                    : "none",
                marginLeft: -2,
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: "10px 5px 10px 20px",
            width: "100%",
          }}
        >
          <h3
            style={{
              marginBottom: 4,
              fontSize: "var(--fz-xxl)",
              fontWeight: 500,
              color: "var(--lightest-slate)",
            }}
          >
            {jobs[activeTab].title}{" "}
            <span style={{ color: "var(--green)" }}>
              @{" "}
              <a
                href={jobs[activeTab].url}
                className="inline-link"
              >
                {jobs[activeTab].company}
              </a>
            </span>
          </h3>

          <p
            style={{
              marginBottom: 25,
              color: "var(--light-slate)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--fz-xs)",
            }}
          >
            {jobs[activeTab].range}
          </p>

          <ul
            className="fancy-list"
            style={{
              fontSize: "var(--fz-md)",
              lineHeight: 1.7,
            }}
          >
            {jobs[activeTab].duties.map((d, i) => (
              <li
                key={i}
                style={{
                  position: "relative",
                  paddingLeft: 30,
                  marginBottom: 10,
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

                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}