import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PlayStationStartupProps {
  onComplete: () => void;
}

export const PlayStationStartup: React.FC<PlayStationStartupProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'boot' | 'logo' | 'complete'>('boot');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLogo(true);
      setStage('logo');
    }, 1500);

    const timer2 = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-startup flex items-center justify-center">
      <div className="text-center">
        {stage === 'boot' && (
          <div className="animate-ps-boot">
            <div className="text-6xl font-bold font-ps text-white mb-4">
              SONY
            </div>
            <div className="text-lg font-ps text-ps-primary">
              Computer Entertainment
            </div>
          </div>
        )}
        
        {stage === 'logo' && showLogo && (
          <div className="animate-ps-logo-glow">
            <div className="relative">
              {/* PlayStation logo recreation */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* P symbol */}
                  <div className="inline-block mr-2">
                    <div className="w-12 h-16 bg-ps-primary relative">
                      <div className="absolute top-0 left-0 w-8 h-6 bg-ps-primary"></div>
                      <div className="absolute top-6 left-0 w-6 h-4 bg-ps-surface"></div>
                      <div className="absolute top-6 right-0 w-2 h-10 bg-ps-surface"></div>
                    </div>
                  </div>
                  
                  {/* S symbol */}
                  <div className="inline-block">
                    <div className="w-12 h-16 relative">
                      <div className="absolute top-0 left-0 w-full h-3 bg-ps-secondary"></div>
                      <div className="absolute top-0 left-0 w-3 h-8 bg-ps-secondary"></div>
                      <div className="absolute top-6 left-0 w-full h-3 bg-ps-secondary"></div>
                      <div className="absolute top-9 right-0 w-3 h-7 bg-ps-secondary"></div>
                      <div className="absolute bottom-0 left-0 w-full h-3 bg-ps-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-2xl font-ps text-white mb-2 tracking-wider">
                PlayStation
              </div>
              <div className="text-sm font-ps text-ps-accent">
                					Bryson Howell
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full opacity-10" 
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
             }}></div>
      </div>
    </div>
  );
};