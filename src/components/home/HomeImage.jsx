import { Image as ImageImpl } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

// allows for hover effects on an image
const EventImage = React.memo(function EventImage({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);
  
  // Memoize target color to avoid recreation
  const targetColor = React.useMemo(() => new THREE.Color(), []);
  
  useFrame(() => {
    if (!ref.current?.material) {
      return;
    }
    
    // Only update if hover state changed or we're still transitioning
    const material = ref.current.material;
    const currentColor = material.color;
    const target = targetColor.set(hovered ? 'white' : '#ccc');
    const lerpSpeed = hovered ? 0.4 : 0.08;
    
    // Only lerp if we haven't reached the target or hover state changed
    if (hovered !== prevHovered || !currentColor.equals(target)) {
      currentColor.lerp(target, lerpSpeed);
      if (hovered !== prevHovered) {
        setPrevHovered(hovered);
      }
    }
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
});

export default EventImage;
