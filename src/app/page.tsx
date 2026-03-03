import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function HomePage() {
  return (
    <div className="pageRoot">
      <a className="skipLink" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
