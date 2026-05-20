import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AskPoojaSection from "@/components/sections/AskPoojaSection";
import TheHumanSection from "@/components/sections/TheHumanSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ExperienceSection />
        <ProjectsSection />
        <AskPoojaSection />
        <TheHumanSection />
        <ConnectSection />
      </main>
      <footer className="py-8 px-6 border-t border-[#E2D9CF] text-center">
        <p className="text-sm text-[#78716C]">
          © 2026 Pooja Lathkar · Built with Claude Code
        </p>
      </footer>
    </>
  );
}
