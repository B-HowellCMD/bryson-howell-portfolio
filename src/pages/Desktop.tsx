import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Window } from '@/components/Window';
import { Taskbar } from '@/components/Taskbar';
import { DesktopIcon } from '@/components/DesktopIcon';
import { RetroButton } from '@/components/RetroButton';
import { PlayStationStartup } from '@/components/PlayStationStartup';
import { User, Code, FileText, Calendar, CloudRain, Monitor, Github, Linkedin, Mail } from 'lucide-react';

interface OpenWindow {
  id: string;
  title: string;
  component: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export const Desktop = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [showStartup, setShowStartup] = useState(true);

  const openWindow = (window: Omit<OpenWindow, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setOpenWindows(prev => [...prev, { ...window, id }]);
  };

  const closeWindow = (id: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    // In a real implementation, you'd handle window minimization
    console.log('Minimize window:', id);
  };

  const AboutMeContent = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-ps-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
          <User size={40} className="text-white" />
        </div>
        				<h2 className="font-ps text-xl font-bold mb-2 text-ps-primary">Bryson Howell</h2>
        <p className="font-ps text-sm text-ps-accent">Full-Stack Developer</p>
      </div>
      
      <div className="space-y-3">
        <p className="font-ps text-sm leading-relaxed">
          Welcome to my PlayStation-inspired developer portfolio! I'm a passionate 
          full-stack developer with experience in modern web technologies and a love 
          for creating interactive experiences.
        </p>
        
        <div className="grid grid-cols-3 gap-2">
          <RetroButton 
            className="flex items-center gap-1 bg-ps-primary text-white hover:bg-ps-secondary"
            onClick={() => window.open('https://github.com/b-howellcmd', '_blank')}
          >
            <Github size={12} />
            GitHub
          </RetroButton>
          <RetroButton 
            className="flex items-center gap-1 bg-ps-accent text-white hover:bg-ps-primary"
            				onClick={() => window.open('https://linkedin.com/in/brysonhowell', '_blank')}
          >
            <Linkedin size={12} />
            LinkedIn
          </RetroButton>
          <RetroButton className="flex items-center gap-1 bg-ps-secondary text-white hover:bg-ps-primary">
            <Mail size={12} />
            Email
          </RetroButton>
        </div>
      </div>
    </div>
  );

  const ProjectsContent = () => (
    <div className="space-y-4">
      <h2 className="font-ps text-lg font-bold mb-4 text-ps-primary">My Projects</h2>
      
      <div className="space-y-4">
        <div className="p-4 border border-ps-border bg-ps-surface rounded-lg hover:shadow-glow transition-shadow">
          <h3 className="font-ps font-bold mb-2 flex items-center gap-2 text-ps-accent">
            <Calendar size={18} />
            Video Game Release Calendar
          </h3>
          <p className="font-ps text-sm mb-3">
            A modern web app showcasing upcoming video game releases in an interactive calendar format.
          </p>
          <div className="flex gap-2">
            <RetroButton variant="small" className="bg-ps-primary text-white">View Live</RetroButton>
            <RetroButton variant="small" className="bg-ps-secondary text-white">Source Code</RetroButton>
          </div>
        </div>
        
        <div className="p-4 border border-ps-border bg-ps-surface rounded-lg hover:shadow-glow transition-shadow">
          <h3 className="font-ps font-bold mb-2 flex items-center gap-2 text-ps-accent">
            <Monitor size={18} />
            iRes System Monitor
          </h3>
          <p className="font-ps text-sm mb-3">
            A Node.js terminal application that displays macOS system resource allocations in real-time.
          </p>
          <div className="flex gap-2">
            <RetroButton variant="small" className="bg-ps-accent text-white">View Demo</RetroButton>
            <RetroButton variant="small" className="bg-ps-primary text-white">Source Code</RetroButton>
          </div>
        </div>
        
        <div className="p-4 border border-ps-border bg-ps-surface rounded-lg hover:shadow-glow transition-shadow">
          <h3 className="font-ps font-bold mb-2 flex items-center gap-2 text-ps-accent">
            <CloudRain size={18} />
            React Weather App
          </h3>
          <p className="font-ps text-sm mb-3">
            A responsive weather application built with React.js featuring current conditions and forecasts.
          </p>
          <div className="flex gap-2">
            <RetroButton variant="small" className="bg-ps-warning text-white">View Live</RetroButton>
            <RetroButton variant="small" className="bg-ps-secondary text-white">Source Code</RetroButton>
          </div>
        </div>
      </div>
    </div>
  );

  const ResumeContent = () => (
    <div className="space-y-4">
      <h2 className="font-ps text-lg font-bold mb-4 text-ps-primary">Resume & Contact</h2>
      
      <div className="space-y-4 font-ps text-sm">
        <section>
          <h3 className="font-bold mb-2 border-b border-ps-border pb-1 text-ps-accent">Contact Information</h3>
          				<p><strong>Email:</strong> bryson.howell@example.com</p>
				<p><strong>LinkedIn:</strong> linkedin.com/in/brysonhowell</p>
          <p><strong>GitHub:</strong> github.com/b-howellcmd</p>
        </section>
        
        <section>
          <h3 className="font-bold mb-2 border-b border-ps-border pb-1 text-ps-accent">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-ps-primary text-white px-2 py-1 text-xs rounded">JavaScript</div>
            <div className="bg-ps-secondary text-white px-2 py-1 text-xs rounded">React.js</div>
            <div className="bg-ps-accent text-white px-2 py-1 text-xs rounded">Node.js</div>
            <div className="bg-ps-warning text-white px-2 py-1 text-xs rounded">TypeScript</div>
            <div className="bg-ps-primary text-white px-2 py-1 text-xs rounded">HTML/CSS</div>
            <div className="bg-ps-secondary text-white px-2 py-1 text-xs rounded">Git</div>
          </div>
        </section>
        
        <section>
          <h3 className="font-bold mb-2 border-b border-ps-border pb-1 text-ps-accent">Specializations</h3>
          <div>• Full-stack web development</div>
          <div>• Interactive UI/UX design</div>
          <div>• System monitoring tools</div>
          <div>• Modern JavaScript frameworks</div>
        </section>
      </div>
      
      <div className="flex gap-2 pt-4">
        <RetroButton className="bg-ps-primary text-white">Download PDF</RetroButton>
        <RetroButton className="bg-ps-secondary text-white">Print Resume</RetroButton>
      </div>
    </div>
  );

  const desktopIcons = [
    {
      icon: User,
      label: 'About Me',
      position: { x: 20, y: 20 },
      onDoubleClick: () => openWindow({
        				title: 'About Me - Bryson Howell',
        component: <AboutMeContent />,
        position: { x: 50, y: 50 },
        size: { width: 400, height: 500 }
      })
    },
    {
      icon: Code,
      label: 'Projects',
      position: { x: 20, y: 120 },
      onDoubleClick: () => openWindow({
        title: 'My Projects',
        component: <ProjectsContent />,
        position: { x: 150, y: 100 },
        size: { width: 500, height: 600 }
      })
    },
    {
      icon: FileText,
      label: 'Resume',
      position: { x: 20, y: 220 },
      onDoubleClick: () => openWindow({
        				title: 'Resume - Bryson Howell',
        component: <ResumeContent />,
        position: { x: 250, y: 150 },
        size: { width: 450, height: 550 }
      })
    },
  ];

  const taskbarItems = openWindows.map(window => ({
    id: window.id,
    title: window.title,
    active: true,
    onClick: () => {
      // In a real implementation, you'd bring window to front
      console.log('Focus window:', window.id);
    }
  }));

  return (
    <div className="min-h-screen bg-desktop relative overflow-hidden font-ps">
      {showStartup && (
        <PlayStationStartup onComplete={() => setShowStartup(false)} />
      )}
      
      {/* Desktop Icons */}
      {desktopIcons.map((icon, index) => (
        <DesktopIcon
          key={index}
          icon={icon.icon}
          label={icon.label}
          position={icon.position}
          onDoubleClick={icon.onDoubleClick}
        />
      ))}

      {/* Open Windows */}
      {openWindows.map(window => (
        <Window
          key={window.id}
          title={window.title}
          initialPosition={window.position}
          initialSize={window.size}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
        >
          {window.component}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar items={taskbarItems} />
    </div>
  );
};