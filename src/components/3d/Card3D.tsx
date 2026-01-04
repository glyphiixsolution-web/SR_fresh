import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

interface Card3DProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  depth?: number;
}

export function Card3D({ 
  position = [0, 0, 0],
  color = '#ffffff',
  scale = 1,
  depth = 0.1
}: Card3DProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z = hovered ? 0.2 : 0;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[2, 1.2, depth]}
      radius={0.05}
      smoothness={4}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.05}
      />
    </RoundedBox>
  );
}
