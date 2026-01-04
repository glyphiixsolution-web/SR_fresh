import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface Timeline3DProps {
  position?: [number, number, number];
  events?: number;
}

export function Timeline3D({ 
  position = [0, 0, 0],
  events = 5
}: Timeline3DProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central timeline */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, events * 0.6, 8]} />
        <meshStandardMaterial 
          color="#5e8eb8" 
          roughness={0.4} 
          metalness={0.3}
        />
      </mesh>

      {/* Event nodes */}
      {Array.from({ length: events }).map((_, i) => {
        const y = (i - (events - 1) / 2) * 0.6;
        const side = i % 2 === 0 ? 1 : -1;
        
        return (
          <group key={i} position={[0, y, 0]}>
            {/* Node sphere */}
            <mesh position={[side * 0.3, 0, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial 
                color="#ffd88a" 
                roughness={0.3} 
                metalness={0.4}
              />
            </mesh>
            
            {/* Connector */}
            <mesh position={[side * 0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
              <meshStandardMaterial 
                color="#5e8eb8" 
                roughness={0.4} 
                metalness={0.3}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
