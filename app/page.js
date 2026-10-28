"use client";

import { useState } from "react";
import Intro from "../components/Intro";
import SmoothScroll from "../components/SmoothScroll";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Vision from "../components/Vision";
import Nav from "../components/Nav";
import WhatWeDo from "../components/WhatWeDo";
import Partners from "../components/Partners";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [reveal, setReveal] = useState(false);

  return (
    <>
      <SmoothScroll locked={!introDone} />
      {!introDone && <Intro onReveal={() => setReveal(true)} onDone={() => setIntroDone(true)} />}

      <Nav />

      <main>
        <Hero play={reveal} />
        <Marquee />
        <Vision />
        <WhatWeDo />
        <Partners />
      </main>
    </>
  );
}
