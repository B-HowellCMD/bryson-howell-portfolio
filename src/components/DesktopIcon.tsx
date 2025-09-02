import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onDoubleClick?: () => void;
  position?: { x: number; y: number };
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon: Icon,
  label,
  onDoubleClick,
  position = { x: 20, y: 20 }
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setIsSelected(true);
    
    // Reset selection after a short delay
    setTimeout(() => setIsSelected(false), 2000);
    
    if (clickTimeout) {
      // This is a double click
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      onDoubleClick?.();
    } else {
      // This is the first click, wait for potential second click
      const timeout = setTimeout(() => {
        setClickTimeout(null);
        // Single click action (if needed)
      }, 300);
      setClickTimeout(timeout);
    }
  };

  return (
    <div
      className={cn(
        'absolute flex flex-col items-center cursor-pointer',
        'w-20 h-20 p-1 select-none',
        isSelected && 'bg-primary/30 border border-primary border-dashed'
      )}
      style={{ left: position.x, top: position.y }}
      onClick={handleClick}
    >
      <div className={cn(
        'w-10 h-10 mb-1 flex items-center justify-center',
        'bg-ps-surface border border-ps-border rounded-md',
        'shadow-raised hover:shadow-glow transition-all duration-200',
        isSelected && 'ring-2 ring-ps-primary'
      )}>
        <Icon size={24} className="text-ps-primary" />
      </div>
      
      <span className={cn(
        'font-ps text-xs text-center leading-tight',
        'text-ps-surface-foreground max-w-full break-words',
        isSelected && 'bg-ps-primary text-white px-2 py-0.5 rounded'
      )}>
        {label}
      </span>
    </div>
  );
};