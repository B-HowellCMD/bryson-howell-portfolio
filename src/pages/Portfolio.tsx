import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "Games Calendar",
      description: "A comprehensive calendar application for tracking game releases, events, and tournaments. Features real-time updates and personalized recommendations.",
      tech: ["React", "TypeScript", "API Integration", "Calendar UI"],
      color: "lime" as const,
      link: "https://github.com/b-howellcmd"
    },
    {
      title: "iRes - Resolution Manager", 
      description: "Advanced display resolution management tool with multi-monitor support, custom profiles, and automatic switching based on applications.",
      tech: ["System Integration", "Display APIs", "Profile Management"],
      color: "purple" as const,
      link: "https://github.com/b-howellcmd"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with detailed forecasts, interactive maps, and location-based alerts. Clean, intuitive interface design.",
      tech: ["Weather API", "Geolocation", "Data Visualization", "PWA"],
      color: "teal" as const,
      link: "https://github.com/b-howellcmd"
    },
    {
      title: "Portfolio Website",
      description: "This Game Boy Color inspired portfolio website showcasing my projects and skills with a nostalgic, interactive design.",
      tech: ["React", "Tailwind CSS", "Responsive Design", "Game Boy Aesthetic"],
      color: "yellow" as const,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gb-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gb-card rounded-lg p-8 shadow-gb-card border border-gb-border">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Game Developer & Software Engineer</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating engaging digital experiences through innovative game development, 
              system tools, and web applications. Combining creativity with technical expertise.
            </p>
            <Button className="bg-gb-lime hover:bg-gb-lime/80 text-white shadow-gb-button">
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">About Me</h2>
          <Card className="p-8 bg-gb-card shadow-gb-card border border-gb-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gb-lime">Technical Skills</h3>
                <div className="space-y-2">
                  {["React & TypeScript", "Game Development", "System Programming", "API Design", "UI/UX Design"].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gb-lime rounded-full"></div>
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gb-purple">Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced in developing both games and productivity tools, with a focus on user experience 
                  and performance optimization. Passionate about retro aesthetics and modern functionality.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-gb-card shadow-gb-card border border-gb-border">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Interested in collaborating or have a question? I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gb-teal hover:bg-gb-teal/80 text-white shadow-gb-button"
                				onClick={() => window.open('mailto:contact@brysonhowell.dev', '_blank')}
              >
                Send Email
              </Button>
              <Button 
                className="bg-gb-purple hover:bg-gb-purple/80 text-white shadow-gb-button"
                onClick={() => window.open('https://github.com/b-howellcmd', '_blank')}
              >
                GitHub Profile
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};