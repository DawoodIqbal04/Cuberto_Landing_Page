import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VideoBar from "./components/VideoBar";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Inspiration from "./components/Inspiration";
import Services from "./components/Services";

export default function Home() {
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
    </main>
  );
}
