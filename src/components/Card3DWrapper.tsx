import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Card3DWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Card3DWrapper({ children, delay = 0, className = '' }: Card3DWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        rotateX: -5,
        rotateY: 5,
        transition: { duration: 0.3 } 
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow ${className}`}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
