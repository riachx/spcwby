import './App.css';
import React, {useEffect,useRef} from 'react';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Environment, useTexture, Effects, useScroll, Scroll, ScrollControls } from "@react-three/drei"
import { Html, Stars, OrbitControls,MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from 'three';
import { useControls } from 'leva';
import { SelectiveBloom,HueSaturation, Bloom, BrightnessContrast, DepthOfField, EffectComposer,LUT, Noise, Vignette } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import {Camera, Color, TextureLoader} from 'three';
import { LUTCubeLoader } from 'postprocessing'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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
  
  return (
    
    <mesh {...props} >
      {children}
      <meshStandardMaterial transparent={true} opacity={0.5} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={color} />
    </mesh>
  )
}

function Shapepink({ children, color, ...props }) {
  const texture2 = useLoader(TextureLoader, 'https://i.imgur.com/5ApXqsT.png');
  return (
    <mesh {...props} >
      {children}
      <meshStandardMaterial toneMapped={false} emissive={"red"} emissiveIntensity={1} color={color} />
    </mesh>
  )
}

const Model2 = () => {
  const obj = useLoader(GLTFLoader, './models/spcwbymodel.glb')
  const modelRef = useRef(); // Create a reference to the 3D object

  // Use the useFrame hook to update the rotation
  useFrame(({ camera }) => {
    if (modelRef.current) {
      // Match the X-axis rotation of the object with the camera's X-axis rotation
      modelRef.current.rotation.z = camera.rotation.z;
      modelRef.current.rotation.y = camera.rotation.y;
      modelRef.current.rotation.x = camera.rotation.x;
      
      
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={obj.scene} position={[0.1, 0, 2.2]} scale={0.3} />
      <meshStandardMaterial attach="material" args={[{ color: 0xffffff }]} />
    </group>
  );
};

const Model = () => {
  const obj = useLoader(OBJLoader, "./models/object.obj")
  return (
      <>
   
          <primitive object={obj.scene} position={[0, 1, 0]} children-0-castShadow={true} />
          
      </>
  );
};

function App() {

  {/*const reflight = React.useRef();
  const refSphere = React.useRef();
  const refSphere2 = React.useRef();

const reflight2 = React.useRef();*/}
  const objModel = useLoader(OBJLoader, '/Users/riachockalingam/Documents/spcwby/gitrepo/spcwby/src/maya2sketchfab.obj'); // Update the path


  const groupRef = React.useRef();
  const groupRef2 = React.useRef();
  const starCount = 500;

  // Generate random positions for stars
  const positions = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(10),
    y: THREE.MathUtils.randFloatSpread(10),
    z: THREE.MathUtils.randFloatSpread(20),

  }));

  const positions_lower = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(40),
    y: THREE.MathUtils.randFloatSpread(40),
    z: THREE.MathUtils.randFloatSpread(40),

  }));
  const texture = useLoader(TextureLoader, 'https://i.imgur.com/TUR0W67.png');
  //const fbx = useLoader(FBXLoader, "Car.fbx");
  //const texture2 = useLoader(LUTCubeLoader, "./assets/F-6800-STD.cube");
  //const fbxmodel = useLoader(FBXLoader, 'src/spacecowboy.fbx')
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
      
      <ScrollControls damping={2} pages={3}>
      <Scroll>
      
      {/* star field */}
      <group ref={groupRef} >
      {positions.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.005, 5, 5]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[6, 20, 20]}/>
      <meshBasicMaterial map={texture} side={THREE.BackSide}/>
      </mesh>
     
      <mesh rotation={[11,0,0]} position={[0,-5.4,0]}>
        <torusBufferGeometry args={[4, 0.1, 16, 100]}/>
        <meshStandardMaterial  toneMapped={false} emissive={"yellow"} emissiveIntensity={10} color={[0,30,0]} />
      </mesh>
      
      <mesh rotation={[11,0,0]} position={[0,-5.1,0]}>
        <torusBufferGeometry args={[4.2, 0.6, 16, 100]}/>
        <meshStandardMaterial   transparent={true} opacity={0.55} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={"red"} />
      </mesh>
      
      <primitive object={objModel} />
        
      {/* star field */}
      <group ref={groupRef2} position={[0,-10,10]}>
      {positions_lower.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.007, 5, 5]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
    <Model2/>
     {/*allows for sphere to glow
      <ambientLight position={[2,3,2]}>
      </ambientLight>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />*/}
      
      <Shapepink color={[100,100,0]} position={[0, 0, 0]} >
       <sphereBufferGeometry args={[0.6, 20, 15]}/>
      </Shapepink>
      
      <ambientLight intensity={0.2} />
      
      <Shape color={[5,0,0]} position={[0, 0, 0]} >
       <sphereBufferGeometry  args={[2.1, 20, 25]} />
      </Shape>
      </Scroll>
      </ScrollControls>

      
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur radius={0.75} luminanceThreshold={1} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
        <HueSaturation hue={4.191} />
        <BrightnessContrast brightness={-0.07}/>
        
        {/*<LUT lut={texture2} />*/}
      </EffectComposer>
      
    </Canvas>
  );
};

export default App;