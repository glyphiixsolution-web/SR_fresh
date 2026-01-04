import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface SchoolBuildingProps {
  position?: [number, number, number];
  scale?: number;
}

export function SchoolBuilding({ 
  position = [0, 0, 0],
  scale = 1
}: SchoolBuildingProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main building */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshStandardMaterial 
          color="#f5ebe0" 
          roughness={0.6} 
          metalness={0.05}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[1.5, 0.5, 4]} />
        <meshStandardMaterial 
          color="#c97d60" 
          roughness={0.5} 
          metalness={0.1}
        />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.2, 0.76]}>
        <boxGeometry args={[0.3, 0.5, 0.05]} />
        <meshStandardMaterial 
          color="#8b5a3c" 
          roughness={0.4} 
          metalness={0.1}
        />
      </mesh>

      {/* Windows */}
      {[-0.5, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0.76]}>
          <boxGeometry args={[0.25, 0.25, 0.02]} />
          <meshStandardMaterial 
            color="#a8d8ea" 
            roughness={0.2} 
            metalness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Flag pole */}
      <mesh position={[1.2, 1.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial 
          color="#6c757d" 
          roughness={0.3} 
          metalness={0.4}
        />
      </mesh>

      {/* Flag */}
      <mesh position={[1.35, 1.8, 0]}>
        <planeGeometry args={[0.3, 0.2]} />
        <meshStandardMaterial 
          color="#ff9933" 
          side={2}
          roughness={0.6} 
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
