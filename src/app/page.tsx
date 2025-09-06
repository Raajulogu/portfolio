import { ChessIcon } from "@/components/chess-icon";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { AchievementsSection } from "@/components/achievements-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen chess-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <ChessIcon className="w-8 h-8 text-primary animate-rotate-chess" />
              <span className="font-bold text-xl">RAJESHKUMAR</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#education" className="hover:text-primary transition-colors">
                Education
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChessIcon className="w-6 h-6 text-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Crafted with precision</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 RAJESHKUMAR.R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
