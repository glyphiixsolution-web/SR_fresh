import { Canvas } from '@react-three/fiber';
import { ReactNode, Suspense } from 'react';

interface Scene3DProps {
  children: ReactNode;
  camera?: { position: [number, number, number]; fov?: number };
  className?: string;
}

export function Scene3D({ 
  children, 
  camera = { position: [0, 0, 5], fov: 50 },
  className = ''
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Standard Lighting Setup */}
          <ambientLight intensity={0.6} color="#fff9e6" />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fffef8" />
          <directionalLight position={[-3, 2, -5]} intensity={0.3} color="#b8d4f1" />
          
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
