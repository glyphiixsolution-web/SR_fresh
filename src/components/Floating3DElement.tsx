import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Floating3DElementProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  rotateIntensity?: number;
}

export function Floating3DElement({ 
  children, 
  duration = 3, 
  yOffset = 15,
  rotateIntensity = 3
}: Floating3DElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        rotateY: [-rotateIntensity, rotateIntensity, -rotateIntensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
}
