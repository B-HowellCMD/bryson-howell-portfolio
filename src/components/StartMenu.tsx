import React from 'react';
import { cn } from '@/lib/utils';
import { RetroButton } from './RetroButton';
import { User, Folder, Settings, Power, FileText, Code, Gamepad2 } from 'lucide-react';

interface StartMenuProps {
  onClose: () => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ onClose }) => {
  const menuItems = [
    { icon: User, label: 'About Me', onClick: () => {} },
    { icon: Code, label: 'Projects', onClick: () => {} },
    { icon: FileText, label: 'Resume', onClick: () => {} },
    { icon: Gamepad2, label: 'Games', onClick: () => {} },
    { type: 'separator' },
    { icon: Folder, label: 'Documents', onClick: () => {} },
    { icon: Settings, label: 'Settings', onClick: () => {} },
    { type: 'separator' },
    { icon: Power, label: 'Shut Down...', onClick: () => {} },
  ];

  return (
    <div 
      className="fixed inset-0 z-40" 
      onClick={onClose}
    >
      <div 
        className={cn(
          'absolute bottom-12 left-3 w-72 bg-ps-surface border border-ps-border rounded-lg shadow-window',
          'backdrop-blur-md bg-opacity-95 overflow-hidden'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Start Menu Banner */}
        <div className="bg-titlebar text-white p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-ps-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">PS</span>
          </div>
          <div>
            <div className="font-ps text-sm font-bold">PlayStation Menu</div>
            				<div className="font-ps text-xs opacity-75">Bryson Howell</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2">
          {menuItems.map((item, index) => {
            if (item.type === 'separator') {
              return (
                <div 
                  key={index}
                  className="h-px bg-ps-border my-2 mx-2"
                />
              );
            }

            const Icon = item.icon!;
            return (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 cursor-pointer rounded transition-colors',
                  'hover:bg-ps-primary hover:text-white'
                )}
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
              >
                <Icon size={16} className="text-ps-accent" />
                <span className="font-ps text-sm text-ps-surface-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};