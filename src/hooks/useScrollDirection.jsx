import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("none");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolledToTop(y < 50);

      if (Math.abs(y - lastY) < 5) return;

      setScrollDir(y > lastY ? "down" : "up");
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDir, scrolledToTop };
}