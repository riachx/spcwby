import React from 'react';
import * as THREE from 'three';

// Generate star positions once outside component for performance
const generateStarPositions = (spread, count) =>
  [...Array(count)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(spread),
    y: THREE.MathUtils.randFloatSpread(spread),
    z: THREE.MathUtils.randFloatSpread(spread * 2),
  }));

const UPPER_POSITIONS = generateStarPositions(10, 500);
const LOWER_POSITIONS = generateStarPositions(40, 500);

// Upper star field component
export const UpperStarField = React.memo(() => {
  const groupRef = React.useRef();

  return (
    <group ref={groupRef}>
      {UPPER_POSITIONS.map((position, index) => (
        <mesh
          key={`star-upper-${index}`}
          position={[position.x, position.y, position.z]}
        >
          <sphereGeometry args={[0.005, 1, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
});

UpperStarField.displayName = 'UpperStarField';

// Lower star field component (reusable with different positions)
export const LowerStarField = React.memo(({ position, size = 0.005 }) => {
  const groupRef = React.useRef();

  return (
    <group ref={groupRef} position={position}>
      {LOWER_POSITIONS.map((starPos, index) => (
        <mesh
          key={`star-lower-${index}`}
          position={[starPos.x, starPos.y, starPos.z]}
        >
          <sphereGeometry args={[size, 1, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
});

LowerStarField.displayName = 'LowerStarField';
