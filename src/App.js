import './App.css';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Footer from './components/Footer';
import Header from './components/Header';
import { Html } from "@react-three/drei";
import * as THREE from 'three';

function Box() {
  const ref = React.useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Box />
    </Canvas>
  );
};

export default App;