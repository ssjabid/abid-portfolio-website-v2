import Navigation from "./components/Navigation";
import StarsBackground from "./components/StarsBackground";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Credentials from "./components/sections/Credentials";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden transition-colors duration-300">
      <StarsBackground />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Credentials />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
