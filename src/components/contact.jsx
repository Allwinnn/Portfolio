import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import { email } from "../data/data";

export default function Contact() {
  const ref = useRef(null);

  useReveal(ref);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        maxWidth: 600,
        margin: "0 auto 100px",
        textAlign: "center",
        opacity: 0,
        transform: "translateY(20px)",
        transition:
          "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <p
        style={{
          color: "var(--green)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-md)",
          marginBottom: 20,
        }}
      >
        04. What's Next?
      </p>

      <h2
        style={{
          fontSize: "clamp(40px,5vw,60px)",
          color: "var(--lightest-slate)",
          fontWeight: 700,
          marginBottom: 20,
        }}
      >
        Get In Touch
      </h2>

      <p style={{ lineHeight: 1.7 }}>
        Although I'm not currently looking for any new
        opportunities, my inbox is always open. Whether
        you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <a
        className="big-button"
        href={`mailto:${email}`}
        style={{
          display: "inline-block",
          marginTop: 50,
        }}
      >
        Say Hello
      </a>
    </section>
  );
}