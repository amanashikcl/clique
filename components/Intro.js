"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORD = "CLIQUE";

// Preloader: letters rise, counter runs 000 -> 100, letters exit, panel wipes up.
export default function Intro({ onReveal, onDone }) {
  const root = useRef(null);
  const count = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({ onComplete: onDone });

      tl.from(".intro-letter", {
        yPercent: 110,
        stagger: 0.06,
        duration: 0.9,
        ease: "power4.out",
      })
        .to(
          counter,
          {
            v: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count.current) {
                count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
              }
            },
          },
          0.2
        )
        .to(".intro-letter", {
          yPercent: -110,
          stagger: 0.04,
          duration: 0.6,
          ease: "power3.in",
        }, "+=0.15")
        .add(() => onReveal && onReveal(), "-=0.2")
        .to(root.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        }, "<");
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="intro" ref={root} aria-hidden="true">
      <div className="intro-label">Media · Creators · Culture</div>
      <div className="intro-word">
        {WORD.split("").map((l, i) => (
          <span className="intro-letter" key={i}>
            {l}
          </span>
        ))}
      </div>
      <div className="intro-count" ref={count}>
        000
      </div>
    </div>
  );
}
