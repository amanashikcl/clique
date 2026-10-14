"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// PLACEHOLDER COPY — replace with Clique's real headline and sub-copy.
const LINES = [
  { text: "We make" },
  { text: "culture", accent: true },
  { text: "travel." },
];

export default function Hero({ play }) {
  const root = useRef(null);
  const glow = useRef(null);

  // Entrance, runs once the intro has finished.
  useLayoutEffect(() => {
    if (!play) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.8 })
        .from(".line-inner", { yPercent: 110, stagger: 0.12, duration: 1.1 }, "-=0.5")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".scroll-cue", { opacity: 0, duration: 0.8 }, "-=0.6");
    }, root);
    return () => ctx.revert();
  }, [play]);

  // Headline drifts and fades as the user scrolls away.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-title", {
        yPercent: -18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // Orange glow follows the cursor.
  useEffect(() => {
    const el = glow.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" });
    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className={`hero${play ? "" : " hero-pre"}`} ref={root} id="top">
      <div className="hero-glow" ref={glow} />
      <p className="hero-eyebrow">Media company · Est. placeholder</p>
      <h1 className="hero-title">
        {LINES.map((l, i) => (
          <span className="line-mask" key={i}>
            <span className={`line-inner${l.accent ? " accent" : ""}`}>{l.text}</span>
          </span>
        ))}
      </h1>
      <div className="hero-foot">
        <p className="hero-sub">
          Placeholder sub-copy: one or two lines on who Clique is and what it does for creators and brands.
        </p>
        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="bar" />
        </div>
      </div>
    </section>
  );
}
