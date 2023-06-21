import './App.css';
import React from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import Footer from './components/Footer';
import Header from './components/Header';
import { Html, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

extend({ OrbitControls });


function Sphere() {
  const ref = React.useRef();
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2, 20, 25]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
      <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Stars radius={400} depth={50} count={1500} factor={10} />
    </Canvas>
  );
};

export default App;