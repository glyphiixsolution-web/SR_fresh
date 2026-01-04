import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox, Text } from '@react-three/drei';

interface SubjectCubeProps {
  position?: [number, number, number];
  color?: string;
  icon?: string;
  label?: string;
  delay?: number;
}

export function SubjectCube({ 
  position = [0, 0, 0],
  color = '#5e8eb8',
  icon = '📚',
  label = '',
  delay = 0
}: SubjectCubeProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.1;
      meshRef.current.rotation.y = hovered 
        ? time * 0.5 
        : Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[0.8, 0.8, 0.8]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? '#7aabcc' : color} 
          roughness={0.5} 
          metalness={0.1}
        />
      </RoundedBox>
      
      {label && (
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.15}
          color="#2a2a2a"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      )}
    </group>
  );
}
