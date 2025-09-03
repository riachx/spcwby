import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const SpcwbyModel = React.memo(() => {
  const obj = useLoader(GLTFLoader, './models/spcwbymodel.glb');
  const modelRef = useRef();
  const { width } = useThree(state => state.viewport);
  
  // Memoize scale calculation to avoid recalculation on every render
  const scale = useMemo(() => {
    return width > 4.8 ? 0.3 : 0.2;
  }, [width]);

  // Track previous camera rotation to avoid unnecessary updates
  const prevRotation = useRef({ x: 0, y: 0, z: 0 });

  // Optimized frame updates with threshold checking
  useFrame(({ camera }) => {
    if (!modelRef.current) {
      return;
    }
    
    const threshold = 0.001;
    const { x, y, z } = camera.rotation;
    const prev = prevRotation.current;
    
    // Only update if rotation changed significantly
    if (
      Math.abs(x - prev.x) > threshold ||
      Math.abs(y - prev.y) > threshold ||
      Math.abs(z - prev.z) > threshold
    ) {
      modelRef.current.rotation.set(x, y, z);
      prev.x = x;
      prev.y = y;
      prev.z = z;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={obj.scene} 
        position={[0.1, 0, 2.3]} 
        scale={scale} 
      />
    </group>
  );
});

export default SpcwbyModel;
