import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import ImpactNumbersSection from "@/components/sections/ImpactNumbersSection";
import AboutAndChatSection from "@/components/sections/AboutAndChatSection";
import WhatIBringSection from "@/components/sections/WhatIBringSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TheHumanSection from "@/components/sections/TheHumanSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <FrameworkSection />
        <CompaniesSection />
        <ImpactNumbersSection />
        <AboutAndChatSection />
        <WhatIBringSection />
        <ExperienceSection />
        <ProjectsSection />
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
