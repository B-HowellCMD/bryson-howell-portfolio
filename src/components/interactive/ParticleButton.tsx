import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ReactNode, useState } from 'react';

interface ParticleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'purple' | 'cyan' | 'pink' | 'yellow';
  className?: string;
}

export const ParticleButton = ({ 
  children, 
  onClick, 
  variant = 'purple', 
  className = '' 
}: ParticleButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    onClick?.();
  };

  const variants = {
    purple: 'bg-neon-purple text-black hover:shadow-neon-purple',
    cyan: 'bg-neon-cyan text-black hover:shadow-neon-cyan',
    pink: 'bg-gradient-to-r from-retro-pink to-retro-purple text-black hover:shadow-neon-pink',
    yellow: 'bg-retro-yellow text-black hover:shadow-[0_0_20px_#f59e0b]'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        onClick={handleClick}
        className={`
          ${variants[variant]}
          relative overflow-hidden font-bold transition-all duration-300
          ${className}
        `}
      >
        <motion.div
          className="relative z-10"
          animate={isClicked ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
        
        {/* Particle effect */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={isClicked ? {
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.cos(i * Math.PI / 3) * 30],
              y: [0, Math.sin(i * Math.PI / 3) * 30],
            } : {}}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </Button>
    </motion.div>
  );
};