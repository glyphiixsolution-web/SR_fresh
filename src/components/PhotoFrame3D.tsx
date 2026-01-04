import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PhotoFrame3DProps {
  children: ReactNode;
  delay?: number;
  onClick?: () => void;
}

export function PhotoFrame3D({ children, delay = 0, onClick }: PhotoFrame3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 20, z: -100 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -15,
        rotateX: -8,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer bg-white p-2"
    >
      <div 
        className="overflow-hidden rounded-xl"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </div>
      
      {/* 3D Frame Effect */}
      <div 
        className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none"
        style={{ transform: 'translateZ(25px)' }}
      />
    </motion.div>
  );
}
