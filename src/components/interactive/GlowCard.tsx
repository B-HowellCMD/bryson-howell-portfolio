import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ReactNode, useState } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'yellow';
}

export const GlowCard = ({ children, className = '', glowColor = 'purple' }: GlowCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowStyles = {
    purple: 'shadow-neon-purple',
    cyan: 'shadow-neon-cyan',
    pink: 'shadow-neon-pink',
    yellow: '0 0 20px #f59e0b, 0 0 40px #f59e0b, 0 0 60px #f59e0b'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Card 
        className={`
          bg-dark-surface border-retro-border backdrop-blur-sm
          transition-all duration-500 relative overflow-hidden
          ${isHovered ? glowStyles[glowColor] : 'shadow-glass'}
          ${className}
        `}
        style={glowColor === 'yellow' && isHovered ? { boxShadow: glowStyles.yellow } : {}}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-glass opacity-50" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(45deg, transparent, ${
              glowColor === 'purple' ? '#a855f7' :
              glowColor === 'cyan' ? '#06b6d4' :
              glowColor === 'pink' ? '#ec4899' : '#f59e0b'
            }, transparent)`,
            opacity: isHovered ? 0.3 : 0,
          }}
          animate={{
            opacity: isHovered ? [0, 0.3, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </Card>
    </motion.div>
  );
};