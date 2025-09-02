import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { ParticleButton } from '@/components/interactive/ParticleButton';
import { ExternalLink, Github, Calendar, Monitor, Cloud } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Games Calendar',
    description: 'A comprehensive calendar application for tracking game releases, events, and tournaments. Features real-time updates, personalized recommendations, and community integration.',
    tech: ['React', 'TypeScript', 'API Integration', 'Calendar UI', 'Real-time Updates'],
    color: 'purple' as const,
    icon: <Calendar className="w-8 h-8" />,
    link: 'https://github.com/your-username',
    delay: 0.1
  },
  {
    id: 2,
    title: 'iRes - Resolution Manager',
    description: 'Advanced display resolution management tool with multi-monitor support, custom profiles, and automatic switching based on applications. Built for power users.',
    tech: ['System Programming', 'Display APIs', 'Profile Management', 'Automation'],
    color: 'cyan' as const,
    icon: <Monitor className="w-8 h-8" />,
    link: 'https://github.com/your-username',
    delay: 0.2
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with detailed forecasts, interactive maps, and location-based alerts. Features a clean, intuitive interface with beautiful data visualization.',
    tech: ['Weather API', 'Geolocation', 'Data Visualization', 'PWA', 'React'],
    color: 'pink' as const,
    icon: <Cloud className="w-8 h-8" />,
    link: 'https://github.com/your-username',
    delay: 0.3
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            Featured <span className="bg-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in game development, web applications, and system tools.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <GlowCard glowColor={project.color} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-lg flex items-center justify-center mb-4
                    ${project.color === 'purple' ? 'bg-retro-purple/20 text-retro-purple' :
                      project.color === 'cyan' ? 'bg-retro-cyan/20 text-retro-cyan' :
                      'bg-retro-pink/20 text-retro-pink'}
                  `}>
                    {project.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-retro-surface-alt rounded-full text-foreground border border-retro-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <ParticleButton 
                      variant={project.color}
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </ParticleButton>
                    <ParticleButton 
                      variant="yellow"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </ParticleButton>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};