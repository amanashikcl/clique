"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// STUB for the "Vision Statement" step of the flow. Placeholder copy.
// Demonstrates the K95-style scroll effect: words light up as you scroll.
const TEXT =
  "Placeholder vision statement. Replace this with what Clique believes in and where it is going.";

export default function Vision() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".vision-text .word", {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="vision" ref={root} id="vision">
      <p className="vision-tag">Vision</p>
      <p className="vision-text">
        {TEXT.split(" ").map((w, i) => (
          <span className="word" key={i}>
            {w}
          </span>
        ))}
      </p>
    </section>
  );
}
