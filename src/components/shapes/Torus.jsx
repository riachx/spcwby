import React from 'react';

// Torus configurations for each variant
const TORUS_CONFIGS = {
  white: {
    rotation: [11, 0.2, 0],
    position: [0, 0, 0],
    scale: [2.8, 2.1, 1],
    geometry: [1.1, 0.06, 16, 100],
    material: {
      transparent: true,
      opacity: 0.15,
      emissive: 'red',
      emissiveIntensity: 1,
      color: 'red',
    },
  },
  pink: {
    rotation: [11, 0, 0],
    position: [0, -5.4, 0],
    geometry: [4, 0.1, 16, 100],
    material: {
      toneMapped: false,
      emissive: 'yellow',
      emissiveIntensity: 10,
      color: [0, 30, 0],
    },
  },
  blue: {
    rotation: [11, 0, 0],
    position: [0, -5.1, 0],
    geometry: [4.2, 0.6, 16, 100],
    material: {
      transparent: true,
      opacity: 0.55,
      toneMapped: false,
      emissive: 'red',
      emissiveIntensity: 10,
      color: 'red',
    },
  },
};

const Torus = React.memo(({ type }) => {
  const config = TORUS_CONFIGS[type];

  if (!config) {
    console.warn(`Invalid torus type: ${type}. Valid types: white, pink, blue`);
    return null;
  }

  return (
    <mesh
      rotation={config.rotation}
      position={config.position}
      scale={config.scale}
    >
      <torusGeometry args={config.geometry} />
      <meshStandardMaterial {...config.material} />
    </mesh>
  );
});

Torus.displayName = 'Torus';

export default Torus;
