import { Image as ImageImpl } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

function GalleryImage({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? 'white' : '#ccc'),
      hovered ? 0.4 : 0.05
    );
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}

export default GalleryImage;
