/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const BuildingModel = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.2}>
      <group ref={meshRef} position={[0, -2, 0]}>
        {/* Main Tower Core */}
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[3, 10, 3]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            thickness={2}
            chromaticAberration={0.4}
            anisotropy={0.5}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.5}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#e2e2e2"
            background={new THREE.Color('#ffffff')}
          />
        </mesh>

        {/* Gold Accents / Structural Lines */}
        <mesh position={[1.51, 3, 1.51]}>
          <boxGeometry args={[0.1, 10, 0.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-1.51, 3, 1.51]}>
          <boxGeometry args={[0.1, 10, 0.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[1.51, 3, -1.51]}>
          <boxGeometry args={[0.1, 10, 0.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-1.51, 3, -1.51]}>
          <boxGeometry args={[0.1, 10, 0.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>

        {/* Horizontal Gold Rings */}
        {[0, 2, 4, 6, 8].map((y, i) => (
          <mesh key={i} position={[0, y - 1, 0]}>
            <boxGeometry args={[3.1, 0.1, 3.1]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
          </mesh>
        ))}

        {/* Base Podium */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[5, 2, 5]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

export default BuildingModel;
