import { email } from "../data/data";

export default function Hero() {
  const items = [
    <p
      style={{
        margin: "0 0 30px 4px",
        color: "var(--green)",
        fontFamily: "var(--font-mono)",
        fontSize: "clamp(var(--fz-sm),5vw,var(--fz-md))",
        fontWeight: 400,
      }}
    >
      Hi, my name is
    </p>,

    <h2 className="big-heading">B Allwin Raj.</h2>,

    <p
      style={{
        margin: "20px 0 0",
        maxWidth: 540,
        lineHeight: 1.6,
        color: "var(--slate)",
      }}
    >
      AI & Data Science Student | Full-Stack AI Engineer .
    </p>,

    <p
      style={{
        margin: "20px 0 0",
        maxWidth: 540,
        lineHeight: 1.6,
        color: "var(--slate)",
      }}
    >
      Final-year AI & Data Science student at <a href="#" className="inline-link">
        
      Shiv Nadar Univerity, Chennai</a> with hands-on experience in full-stack development and AI-driven application engineering, focused on building scalable and intelligent systems.
     
      
    </p>,

    <a
      className="big-button"
      href={`mailto:${email}`}
      style={{
        display: "inline-block",
        marginTop: 50,
      }}
    >
      Get In Touch
    </a>,
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 0 0 0",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="fade-up"
          style={{
            animationDelay: `${(i + 1) * 100}ms`,
          }}
        >
          {item}
        </div>
      ))}
    </section>
  );
}