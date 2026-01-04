import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingBookProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
}

export function FloatingBook({ 
  position = [0, 0, 0], 
  color = '#5e8eb8',
  scale = 1 
}: FloatingBookProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.6, 0.8, 0.1]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.1}
      />
    </mesh>
  );
}
