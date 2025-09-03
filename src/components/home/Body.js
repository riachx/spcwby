// IMPORTANT NOTICE: This hue of this scene is offset in a 
// postprocessing filter called HueSaturation.
// Any images or objects with color or must be offset
// to achieve the correct color.
//
// Ex: the traffic cone image is technically cyan, and offset 
// by the HueSaturation to achieve an orange color.
//
// This is implemented because of the emissive limitations 
// of three.js.
//
// Please be aware that any modifications to this behavior should
// take this hue shift into consideration.

import '../../App.css';
import React from 'react';
import { Canvas, extend, useLoader } from '@react-three/fiber';
import { Environment, Scroll, ScrollControls} from "@react-three/drei"
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { HueSaturation, Bloom, BrightnessContrast, EffectComposer, Vignette } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import { TextureLoader } from 'three';
import EventImages from './HomeImages'
import SpcwbyModel from '../shapes/SpcwbyModel'
import ShapeBlue from '../shapes/ShapeBlue'
import ShapePink from '../shapes/ShapePink'

extend({ OrbitControls, UnrealBloomPass });


function Body() {

  // scrollable arrow
  const arrow = {
    position: 'fixed',
    color: 'white',
    left: '370px', 
    top: '300px',
    fontSize: '42px',
  };


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
  const texture = useLoader(TextureLoader, 'https://i.imgur.com/py50lUS.jpg');
  
  return (
    <div style={{ width: "100%", height: "100%" }}>
      
      <Canvas className="canvas" gl={{ alpha: true, clearColor: 'transparent', sortObjects: true }}>

      
        <Environment files="./hdr/misty2.hdr" />

        <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ScrollControls damping={1.2} pages={9}>
          <Scroll>

            {/* star field */}
            <group ref={groupRef} >
              {positions.map((position, index) => (
                <mesh key={index} position={[position.x, position.y, position.z]}>
                  <sphereGeometry args={[0.005, 2, 2]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              ))}
            </group>

            {/* Spinning sphere with rave image */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[6, 20, 20]} />
              <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>

                {/* White torus */}
            <mesh rotation={[11, 0.2, 0]} position={[0, 0, 0]} scale={[2.8,2.1,1]}>
              <torusGeometry args={[1.1, 0.06, 16, 100]} />
              <meshStandardMaterial transparent={true} opacity={0.15}  emissive={"red"} emissiveIntensity={1} color={"red"}/>
              {/*<MeshTransmissionMaterial transparent={true} opacity={0.2} backside backsideThickness={1} thickness={1} />*/}
            </mesh>

            {/* Pink torus */}
            <mesh rotation={[11, 0, 0]} position={[0, -5.4, 0]}>
              <torusGeometry args={[4, 0.1, 16, 100]} />
              <meshStandardMaterial toneMapped={false} emissive={"yellow"} emissiveIntensity={10} color={[0, 30, 0]} />
            </mesh>

            {/* Blue torus */}
            <mesh rotation={[11, 0, 0]} position={[0, -5.1, 0]}>
              <torusGeometry args={[4.2, 0.6, 16, 100]} />
              <meshStandardMaterial transparent={true} opacity={0.55} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={"red"} />
            </mesh>

            {/* Star fields */}
            <group ref={groupRef2} position={[0, -10, 10]}>
              {positions_lower.map((position, index) => (
                <mesh key={index} position={[position.x, position.y, position.z]}>
                  <sphereGeometry args={[0.005, 1, 2]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              ))}
            </group>
            <group ref={groupRef2} position={[0, -40, 10]}>
              {positions_lower.map((position, index) => (
                <mesh key={index} position={[position.x, position.y, position.z]}>
                  <sphereGeometry args={[0.008, 1, 2]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              ))}
            </group>

            {/* Space Cowboy 3D Model */}
        
            <SpcwbyModel />
            {/* Inner pink glowing sphere */}
            <ShapePink color={[100, 100, 0]} position={[0, 0, 0]} >
              <sphereGeometry args={[0.6, 20, 15]} />
            </ShapePink>

            <ambientLight intensity={0.2} />

            {/* Outer blue glowing sphere */}
            <ShapeBlue color={[5, 0, 0]} position={[0, 0, 0]} >
              <sphereGeometry args={[2.1, 20, 25]} />
            </ShapeBlue>
            
           {/*
           <AboutText
              position={[-2, 2, 1]}
              color="white"
              fontSize={0.15}
              font=""
              anchorX="center"
              fontWeight={100}
              anchorY="middle"
              text="WEST COAST"
              opacity={0.5}
            />
            <AboutText
              position={[-2, 1.85, 1]}
              color="white"
              fontSize={0.15}
              font=""
              anchorX="center"
              fontWeight={100}
              anchorY="middle"
              text="ELECTRONIC MUSIC"
              opacity={0.5}
            />
            <AboutText
              position={[-2, 1.7, 1]}
              color="white"
              fontSize={0.15}
              font=""
              anchorX="center"
              fontWeight={100}
              anchorY="middle"
              text="ART COLLECTIVE"
              opacity={0.5}
            />*/}

            {/* Gallery at bottom */}
            <EventImages />
            

            {/* Scrolling arrow */}
            <Html>
              <div style={arrow}>↓
              </div>
            </Html>
          </Scroll>
        </ScrollControls>

        {/* Postprocessing effects: note lines 1-13 */}
        <EffectComposer disableNormalPass>
          <Bloom mipmapBlur radius={0.75} luminanceThreshold={1} />
          <Vignette eskil={false} offset={0.1} darkness={0.7} />
          <HueSaturation hue={4.191} />
          <BrightnessContrast brightness={-0.1} />
        </EffectComposer>
        
      </Canvas>
    </div>
  );
};

export default Body;