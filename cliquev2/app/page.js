"use client";

import { useState } from "react";
import Intro from "../components/Intro";
import SmoothScroll from "../components/SmoothScroll";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Vision from "../components/Vision";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <SmoothScroll locked={!introDone} />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}

      <nav className="nav">
        <a className="nav-logo" href="#top">Clique</a>
        <div className="nav-links">
          <a href="#vision">Vision</a>
          <a href="#work">What we do</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Hero play={introDone} />
        <Marquee />
        <Vision />
      </main>
    </>
  );
}
