import './App.css';
import React from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import Footer from './components/Footer';
import Header from './components/Header';
import { Environment, useTexture } from "@react-three/drei"
import { Html, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { useControls } from 'leva';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'


extend({ OrbitControls });

function Sphere() {
  const ref = React.useRef();
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1.4, 20, 25]} />
      <meshStandardMaterial color="red" roughness='0' envMapIntensity={0.5}  emissive={true} emissiveIntensity="5"/>
      </mesh>
  );
}

function Sphere2() {
  const ref = React.useRef();
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2.2, 20, 25]} />
      <meshStandardMaterial color="blue" roughness='0' envMapIntensity={0.5} transparent={true} opacity='0.5'/>
      </mesh>
  );
}

function App() {
  return (
    <Canvas>

<Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
      <Sphere2 />
      <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Stars radius={400} depth={50} count={1500} factor={10} />

      <EffectComposer disableNormalPass multisampling={0}>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.6} height={300} />
        <Noise opacity={0.09} />
      
    </EffectComposer>
    </Canvas>
  );
};

export default App;