import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'small';
  children: React.ReactNode;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  variant = 'default', 
  children, 
  className,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    onMouseUp?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    onMouseLeave?.(e);
  };

  const baseClasses = cn(
    'font-ps text-xs font-medium transition-all duration-150',
    'bg-ps-surface text-ps-surface-foreground',
    'border border-ps-border rounded-sm',
    {
      'shadow-raised hover:shadow-glow': !isPressed,
      'shadow-pressed translate-y-0.5': isPressed,
    }
  );

  const variants = {
    default: 'px-4 py-1 min-w-[80px]',
    primary: 'px-6 py-2 min-w-[100px] text-sm font-medium',
    small: 'px-2 py-0.5 min-w-[60px] text-[10px]'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};