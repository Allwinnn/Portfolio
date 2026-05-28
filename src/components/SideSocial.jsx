import { email } from "../data/data";

export default function SideEmail() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 40,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <style>{`
        @media (max-width: 1080px) {
          .side-email {
            display: none !important;
          }
        }
      `}</style>

      <a
        href={`mailto:${email}`}
        className="side-email"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-xxs)",
          letterSpacing: "0.1em",
          writingMode: "vertical-rl",
          color: "var(--light-slate)",
          transition: "var(--transition)",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "var(--green)";
          e.target.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "var(--light-slate)";
          e.target.style.transform = "none";
        }}
      >
        {email}
      </a>

      <div
        style={{
          width: 1,
          height: 90,
          backgroundColor: "var(--light-slate)",
        }}
      />
    </div>
  );
}