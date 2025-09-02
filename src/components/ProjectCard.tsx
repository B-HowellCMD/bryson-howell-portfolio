import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  color: 'lime' | 'purple' | 'teal' | 'yellow';
  link?: string;
}

export const ProjectCard = ({ title, description, tech, color, link }: ProjectCardProps) => {
  const colorClasses = {
    lime: 'border-gb-lime bg-gb-lime/10',
    purple: 'border-gb-purple bg-gb-purple/10', 
    teal: 'border-gb-teal bg-gb-teal/10',
    yellow: 'border-gb-yellow bg-gb-yellow/10'
  };

  const buttonColorClasses = {
    lime: 'bg-gb-lime hover:bg-gb-lime/80',
    purple: 'bg-gb-purple hover:bg-gb-purple/80',
    teal: 'bg-gb-teal hover:bg-gb-teal/80', 
    yellow: 'bg-gb-yellow hover:bg-gb-yellow/80'
  };

  return (
    <Card className={`p-6 border-2 ${colorClasses[color]} shadow-gb-card hover:shadow-xl transition-all duration-300`}>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground border border-border"
          >
            {item}
          </span>
        ))}
      </div>
      
      {link && (
        <Button 
          className={`${buttonColorClasses[color]} text-white shadow-gb-button`}
          onClick={() => window.open(link, '_blank')}
        >
          View Project
        </Button>
      )}
    </Card>
  );
};