import { socialMedia } from "../data/data";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        textAlign: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fz-xxs)",
        color: "var(--light-slate)",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: 20,
          listStyle: "none",
          padding: 0,
          marginBottom: 10,
        }}
        className="footer-social"
      >
        <style>{`
          @media (min-width: 769px) {
            .footer-social {
              display: none !important;
            }
          }
        `}</style>

        {socialMedia.map(
          ({ name, url, icon: Icon }, i) => (
            <li key={i}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                style={{
                  color: "var(--light-slate)",
                  display: "flex",
                  width: 20,
                  height: 20,
                }}
              >
                <Icon />
              </a>
            </li>
          )
        )}
      </ul>

    </footer>
  );
}
