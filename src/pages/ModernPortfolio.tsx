import { Scene3D } from '@/components/3d/Scene3D';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-retro-background text-foreground relative overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-retro-border bg-retro-surface/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Bryson Howell. Built with passion for learning and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};