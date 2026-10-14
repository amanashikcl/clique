"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling wired into GSAP's ticker so ScrollTrigger stays in sync.
// `locked` freezes scrolling while the intro plays.
export default function SmoothScroll({ locked }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (!lenis) return;
    if (locked) lenis.stop();
    else lenis.start();
  }, [locked]);

  return null;
}
