import { motion } from 'framer-motion';
import { ParticleButton } from '@/components/interactive/ParticleButton';
import { ChevronDown, Github, Mail, ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 bg-neon-sunset bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            BRYSON
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-retro-cyan mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Computer Science Student & Aspiring Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate computer science student seeking internship opportunities to apply my skills in 
            software development, web applications, and innovative problem-solving.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ParticleButton variant="purple" onClick={scrollToProjects}>
              View My Work
            </ParticleButton>
            
            <ParticleButton 
              variant="cyan"
              onClick={() => window.open("mailto:bryson@example.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </ParticleButton>
            
            <ParticleButton 
              variant="pink"
              onClick={() => window.open('https://github.com/your-username', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </ParticleButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown 
          className="w-8 h-8 text-retro-purple cursor-pointer" 
          onClick={scrollToProjects}
        />
      </motion.div>
    </section>
  );
};