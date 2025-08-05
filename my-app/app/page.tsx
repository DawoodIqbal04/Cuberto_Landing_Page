"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VideoBar from "./components/VideoBar";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Inspiration from "./components/Inspiration";
import Services from "./components/Services";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

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
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoBar />
      <About />
      <Projects />
      <Resources />
      <Inspiration />
      <Services />
      <PreFooter />
      <Footer />
    </main>
  );
}
