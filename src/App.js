import './App.css';
import React, {useEffect} from 'react';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Environment, useTexture, Effects } from "@react-three/drei"
import { Html, Stars, OrbitControls,MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from 'three';
import { useControls } from 'leva';
import { SelectiveBloom,HueSaturation, Bloom, BrightnessContrast, DepthOfField, EffectComposer,LUT, Noise, Vignette } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import {Color, TextureLoader} from 'three';
import { LUTCubeLoader } from 'postprocessing'

extend({ OrbitControls, UnrealBloomPass });
/*
function Sphere() {
  const ref = React.useRef();
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1.4, 20, 25]} />
      <meshStandardMaterial color="red" roughness='0' envMapIntensity={0.5} />
      </mesh>
  );
}

function Sphere2() {
  const ref = React.useRef();
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2.2, 20, 25]} />
      <meshStandardMaterial color="#43539f" roughness='1' envMapIntensity={0.5} transparent={true} opacity='0.5' emissive={true} emissiveIntensity="50"/>
      </mesh>
  );
}*/


function Shape({ children, color, ...props }) {
  const texture2 = useLoader(TextureLoader, 'https://i.imgur.com/5ApXqsT.png');
  return (
    <mesh {...props} >
      {children}
      <meshStandardMaterial transparent={true} opacity={0.55} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={color} />
    </mesh>
  )
}

function Shapepink({ children, color, ...props }) {
  const texture2 = useLoader(TextureLoader, 'https://i.imgur.com/5ApXqsT.png');
  return (
    <mesh {...props} >
      {children}
      <meshStandardMaterial transparent={true} opacity={0.5} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={color} />
    </mesh>
  )
}

function App() {

  {/*const reflight = React.useRef();
  const refSphere = React.useRef();
  const refSphere2 = React.useRef();

const reflight2 = React.useRef();*/}
  const groupRef = React.useRef();
  const starCount = 500;

  // Generate random positions for stars
  const positions = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(10),
    y: THREE.MathUtils.randFloatSpread(10),
    z: THREE.MathUtils.randFloatSpread(20),

  }));
  const texture = useLoader(TextureLoader, 'https://i.imgur.com/5ApXqsT.png');
  //const texture2 = useLoader(LUTCubeLoader, "./assets/F-6800-STD.cube");

  return (
    <Canvas gl={{ alpha: true, clearColor: 'transparent', sortObjects: true }}>
      
      <Environment files="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/noon-grass/noon_grass_1k.hdr"  />
      
      {/* outer sphere code 
      <mesh ref={refSphere}>
      <sphereBufferGeometry args={[2.2, 20, 25]} />
      <meshStandardMaterial color="#43539f" roughness='0' envMapIntensity={3}  emissive={true} emissiveIntensity="50"/>
      </mesh>*/}

      {/*inner sphere code
      <mesh ref={refSphere2}>
      <sphereBufferGeometry args={[1.4, 20, 25]} />
      <meshStandardMaterial color="red" roughness='0' envMapIntensity={0.5} />
      </mesh>*/}

      <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      
      {/* star field */}
      <group ref={groupRef}>
      {positions.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.007, 5, 5]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
    
     {/*allows for sphere to glow
      <ambientLight position={[2,3,2]}>
      </ambientLight>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />*/}
      
      <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[6, 20, 25]}/>
      <meshBasicMaterial map={texture} side={THREE.BackSide}/>
      </mesh>

      <Shapepink color={[0,5,0]} scale={[0.5,0.5,0.5]} position={[0, 0, 0]} >
       <sphereBufferGeometry  args={[2.1, 20, 25]}/>
      </Shapepink>

      <Shape color={[5,0,0]} position={[0, 0, 0]} >
       <sphereBufferGeometry  args={[2.1, 20, 25]}/>
      </Shape>

      
      
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur radius={0.6} luminanceThreshold={1} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
        <HueSaturation hue={4.191} />
        <BrightnessContrast brightness={-0.07}/>
        
        {/*<LUT lut={texture2} />*/}
      </EffectComposer>
      
    </Canvas>
  );
};

export default App;