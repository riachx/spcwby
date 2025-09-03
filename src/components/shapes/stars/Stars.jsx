import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

function Stars() {
  const starCount = 600;

  const groupRef = React.useRef();
  // Generate random positions for stars
  const positions = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(30),
    y: THREE.MathUtils.randFloatSpread(10),
    z: THREE.MathUtils.randFloatSpread(25),
  }));
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.2);
      groupRef.current.rotation.y = Math.cos(clock.elapsedTime * 0.2);
    }
  });
  return (
    <group ref={groupRef}>
      {positions.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereGeometry args={[0.005, 1, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

export default Stars;
