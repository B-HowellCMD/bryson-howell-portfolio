import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { RetroButton } from './RetroButton';
import { StartMenu } from './StartMenu';

interface TaskbarItem {
  id: string;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

interface TaskbarProps {
  items?: TaskbarItem[];
}

export const Taskbar: React.FC<TaskbarProps> = ({ items = [] }) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {showStartMenu && (
        <StartMenu onClose={() => setShowStartMenu(false)} />
      )}
      
      <div className={cn(
        'fixed bottom-0 left-0 right-0 h-12',
        'bg-ps-surface border-t border-ps-border backdrop-blur-md bg-opacity-95',
        'flex items-center px-3 gap-2 z-50'
      )}>
        {/* Start Button */}
        <RetroButton
          onClick={() => setShowStartMenu(!showStartMenu)}
          className={cn(
            'flex items-center gap-2 font-bold bg-ps-primary text-white hover:bg-ps-secondary',
            showStartMenu && 'shadow-pressed'
          )}
        >
          <div className="w-5 h-5 bg-ps-secondary rounded-sm flex items-center justify-center">
            <span className="text-xs text-white font-bold">PS</span>
          </div>
          PlayStation
        </RetroButton>

        {/* Quick Launch Separator */}
        <div className="w-px h-8 bg-ps-border mx-1" />

        {/* Task Items */}
        <div className="flex gap-2 flex-1">
          {items.map((item) => (
            <RetroButton
              key={item.id}
              onClick={item.onClick}
              className={cn(
                'flex items-center gap-1 max-w-[200px] truncate',
                item.active && 'bg-ps-primary text-white shadow-pressed'
              )}
            >
              <div className="w-3 h-3 bg-ps-accent rounded-sm" />
              {item.title}
            </RetroButton>
          ))}
        </div>

        {/* System Tray Separator */}
        <div className="w-px h-8 bg-ps-border mx-1" />

        {/* System Tray */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-ps-surface border border-ps-border rounded shadow-inset">
            <span className="font-ps text-sm text-ps-accent">
              {currentTime.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};