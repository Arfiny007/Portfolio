import { Footer } from "@/components/footer";
import { PortfolioShell } from "@/components/portfolio-shell";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Infrastructure } from "@/components/sections/infrastructure";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { RecruiterBrief } from "@/components/sections/recruiter-brief";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <PortfolioShell>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[90] -translate-y-20 rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <main id="main" className="relative z-10">
        <Hero />
        {/*<RecruiterBrief />*/}
        <About />
        <TechStack />
        <Projects />
        <Infrastructure />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </PortfolioShell>
  );
}
