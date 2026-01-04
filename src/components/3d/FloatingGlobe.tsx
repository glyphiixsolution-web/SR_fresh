import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGlobeProps {
  position?: [number, number, number];
  scale?: number;
}

export function FloatingGlobe({ 
  position = [0, 0, 0],
  scale = 1
}: FloatingGlobeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Globe sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#6ba3d1" 
          roughness={0.6} 
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 50]} />
        <meshStandardMaterial 
          color="#ffd88a" 
          roughness={0.4} 
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}
