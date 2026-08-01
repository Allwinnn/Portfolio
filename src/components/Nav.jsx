import { useState, useEffect } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import { navLinks } from "../data/data";

export default function Nav() {
  const { scrollDir, scrolledToTop } = useScrollDirection();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);

    return () => clearTimeout(t);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 11,
    height: scrolledToTop ? "var(--nav-height)" : "70px",
    padding: "0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(10,25,47,0.85)",
    backdropFilter: "blur(10px)",
    boxShadow: scrolledToTop
      ? "none"
      : "0 10px 30px -10px var(--navy-shadow)",
    transform:
      scrollDir === "down" && !scrolledToTop
        ? "translateY(-100%)"
        : "translateY(0)",
    transition: "all 0.3s cubic-bezier(0.645,0.045,0.355,1)",
  };

  return (
    <>
      <header style={navStyle}>
        <a
          href="#"
          aria-label="home"
          style={{
            color: "var(--green)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fz-xxl)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
          }}
        >
          &lt; Alaa  /&gt;
        </a>

        <nav
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          className="desktop-nav"
        >
          <style>{`
            @media (max-width: 768px) {
              .desktop-nav {
                display: none !important;
              }
            }

            @media (min-width: 769px) {
              .mobile-menu-btn {
                display: none !important;
              }
            }
          `}</style>

          <ol
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "5px",
              counterReset: "nav-counter",
            }}
          >
            {navLinks.map((link, i) => (
              <li key={i} style={{ counterIncrement: "nav-counter" }}>
                <a
                  href={link.url}
                  style={{
                    padding: "10px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fz-xs)",
                    color: "var(--lightest-slate)",
                    transition: "var(--transition)",
                    opacity: mounted ? 1 : 0,
                    transitionDelay: `${i * 100}ms`,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--lightest-slate)")
                  }
                >
                  <span
                    style={{
                      color: "var(--green)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--fz-xxs)",
                      marginRight: 5,
                    }}
                  >
                    0{i + 1}.
                  </span>

                  {link.name}
                </a>
              </li>
            ))}
          </ol>

          <a
            className="small-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 15,
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.3s ${
                navLinks.length * 100
              }ms`,
            }}
          >
            Resume
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 10,
            color: "var(--green)",
          }}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10,
            backgroundColor: "rgba(10,25,47,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <ol
            style={{
              listStyle: "none",
              textAlign: "center",
              padding: 0,
            }}
          >
            {navLinks.map((link, i) => (
              <li key={i} style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    color: "var(--green)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fz-sm)",
                    marginBottom: 4,
                  }}
                >
                  0{i + 1}.
                </div>

                <a
                  href={link.url}
                  style={{
                    color: "var(--lightest-slate)",
                    fontSize: "var(--fz-xl)",
                    fontWeight: 600,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ol>

          <a
            className="small-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
}