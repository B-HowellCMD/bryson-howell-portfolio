import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { RetroButton } from './RetroButton';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  onClose?: () => void;
  onMinimize?: () => void;
  className?: string;
  resizable?: boolean;
}

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 600, height: 400 },
  onClose,
  onMinimize,
  className,
  resizable = true,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDragging(true);
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset]);

  return (
    <div
      className={cn(
        'absolute bg-window border border-ps-border shadow-window rounded-md overflow-hidden',
        'backdrop-blur-sm bg-opacity-95',
        'animate-window-open',
        className
      )}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: 10,
      }}
    >
      {/* Title Bar */}
      <div
        className={cn(
          'flex items-center justify-between h-10 px-3',
          'bg-titlebar text-white font-ps text-sm font-medium',
          'border-b border-ps-border cursor-move'
        )}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-ps-primary rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span>{title}</span>
        </div>
        
        <div className="flex items-center gap-1">
          {onMinimize && (
            <RetroButton variant="small" onClick={onMinimize}>
              <Minus size={12} />
            </RetroButton>
          )}
          <RetroButton variant="small">
            <Square size={12} />
          </RetroButton>
          {onClose && (
            <RetroButton variant="small" onClick={onClose}>
              <X size={12} />
            </RetroButton>
          )}
        </div>
      </div>

      {/* Window Content */}
      <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto bg-ps-surface text-ps-surface-foreground">
        {children}
      </div>

      {/* Resize Handle */}
      {resizable && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-ps-border opacity-50 hover:opacity-100 transition-opacity rounded-tl-md"
          style={{
            background: `linear-gradient(-45deg, 
              transparent 40%, 
              hsl(var(--ps-border)) 40%, 
              hsl(var(--ps-border)) 60%, 
              transparent 60%
            )`
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsResizing(true);
          }}
        />
      )}
    </div>
  );
};