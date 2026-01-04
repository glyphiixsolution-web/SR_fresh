import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface LabEquipmentProps {
  position?: [number, number, number];
  scale?: number;
}

export function LabEquipment({ 
  position = [0, 0, 0],
  scale = 1
}: LabEquipmentProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Beaker */}
      <mesh position={[-0.5, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.1, 0.4, 16]} />
        <meshStandardMaterial 
          color="#a8d8ea" 
          roughness={0.2} 
          metalness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Flask */}
      <group position={[0.5, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#c4e8c2" 
            roughness={0.2} 
            metalness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.15, 8]} />
          <meshStandardMaterial 
            color="#a8d8ea" 
            roughness={0.2} 
            metalness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Microscope */}
      <group position={[0, -0.3, 0.5]}>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
          <meshStandardMaterial 
            color="#5e8eb8" 
            roughness={0.3} 
            metalness={0.6}
          />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 0.05, 0.15]} />
          <meshStandardMaterial 
            color="#5e8eb8" 
            roughness={0.3} 
            metalness={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}
