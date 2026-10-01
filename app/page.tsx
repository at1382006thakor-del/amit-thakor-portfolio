import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Internship from "@/components/Internship";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Certifications />
      <Achievements />
      <Services />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
