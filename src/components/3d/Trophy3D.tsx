import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface Trophy3DProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
}

export function Trophy3D({ 
  position = [0, 0, 0],
  scale = 1,
  color = '#ffd700'
}: Trophy3DProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Cup */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.25, 0.15, 0.4, 16]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.8}
        />
      </mesh>

      {/* Handles */}
      {[-1, 1].map((side, i) => (
        <mesh key={i} position={[side * 0.25, 0.3, 0]} rotation={[0, 0, side * Math.PI / 4]}>
          <torusGeometry args={[0.1, 0.02, 8, 16]} />
          <meshStandardMaterial 
            color={color} 
            roughness={0.3} 
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.1, 16]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.8}
        />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
        <meshStandardMaterial 
          color="#8b7355" 
          roughness={0.5} 
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}
