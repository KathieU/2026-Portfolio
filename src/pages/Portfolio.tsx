import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#FFFF00] selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}