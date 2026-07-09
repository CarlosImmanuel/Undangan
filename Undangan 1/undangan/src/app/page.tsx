"use client";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Import semua komponen
import Cover from "../components/Cover";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Couple from "../components/Couple";
import Story from "../components/Story";
import Event from "../components/Event";
import Gallery from "../components/Gallery";
import Gift from "../components/Gift";
import Wishes from "../components/Wishes";
import Footer from "../components/Footer";
import MusicToggle from "../components/MusicToggle";

export default function Home() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  useEffect(() => {
    // Lenis Smooth Scroll Configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#f9f6f1] text-white font-sans overflow-hidden">
      {/* Cover Overlay - will slide up when Open Invitation is clicked */}
      <Cover onOpen={() => setIsCoverOpen(true)} />
      
      {/* Background Music Button (Play/Pause) */}
      <MusicToggle />

      {/* Main Sections */}
      <Hero playAnimation={isCoverOpen} />
      <Quote />
      <Couple />
      <Story />
      <Event />
      <Gallery />
      <Gift />
      <Wishes />
      <Footer />
    </main>
  );
}
