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

import '../App.css';
import React, { useState, useRef } from 'react';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { Environment, useScroll, Image as ImageImpl, Scroll, ScrollControls, Float, MeshTransmissionMaterial } from "@react-three/drei"
import { Html, OrbitControls, Text } from "@react-three/drei";
import * as THREE from 'three';
import { HueSaturation, Bloom, BrightnessContrast, EffectComposer, Vignette } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ OrbitControls, UnrealBloomPass });

// allows for hover effects on an image
function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.08)
  })
  return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
}

// returns all images
function Images() {
  const { width, height, camera } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()

  let p_image1;
  let p_image2;

  if (width > 7) {
    p_image1 = 5;
    p_image2 = 5;

  } else {
    p_image1 = 5;
    p_image2 = 5;
  }

  // Match the X-axis rotation of the object with the camera's X-axis rotation
  useFrame(({ camera }) => {
    if (group.current) {
      group.current.rotation.z = camera.rotation.z;
      group.current.rotation.y = camera.rotation.y;
      group.current.rotation.x = camera.rotation.x;

    }
    // Adds zooming and grayscale effects when scrolling
    group.current.children[0].material.zoom = 1 + data.range(1 / 3, 0.2 / 3) / 3
    group.current.children[0].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)

    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.grayscale = 1 - data.range(1.65 / 3, 0.2 / 3)

    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3

    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3

    group.current.children[7].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3

    group.current.children[8].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    group.current.children[8].material.grayscale = 1 - data.range(2.7 / 3, 0.5 / 3)
    group.current.children[8].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3


  })

  return (
    <group ref={group}>
      <Image position={[-width / 5, -height - 9, 0]} scale={[4.5, height, 1]} url="https://i.imgur.com/6EcFpIQ.jpg" />
      <Image position={[-1, -height - 29.1, 3]} scale={[1.5, 1.9, 1]} url="https://i.imgur.com/EeDc7jA.jpg" />
      <Image position={[width / 6, -height - 15 + width / 5, 1]} scale={4} url="https://i.imgur.com/R9O1MVg.jpg" />
      <Image position={[2.0, -height - 29.1, 2]} scale={[1.3, 3, 1]} url="https://i.imgur.com/Df1sbBY.jpg" />
      <Image position={[0.4, -height - 28.8, 2.5]} scale={[1.1, 3, 1]} url="https://i.imgur.com/K1f4x0h.jpg" />
      <Image position={[-1.5, -height - 35, 0]} scale={[width / 1.5, height, 1]} url="https://i.imgur.com/d6GPiAP.jpg" />
      <Image position={[0, -height * 2 - height / 4 - 11, 0]} scale={[width, height, 1]} url="https://i.imgur.com/w1L8AVL.jpg" />
      <Image position={[width / 5, -height * 2 - height / 4 - 32, -1]} scale={[width / 2, height, 1]} url="https://i.imgur.com/35aCyWk.jpg" />
      <Image position={[0, -height * 2 - height / 4 - 42, -1]} scale={[13, 9, 1]} url="https://i.imgur.com/ukBXU0M.jpg" />
      <Image position={[-4, -height * 2 - height / 4 - 36, -1]} scale={5.5} url="https://i.imgur.com/Bj2qZdz.jpg" />
    </group>
  )
}

function ShapeBlue({ children, color, ...props }) {
  const { width } = useThree((state) => state.viewport)
  let s;
  if (width > 4.8) {
    s = 1
  } else {
    s = 0.8
  }
  return (

    <mesh scale={s} {...props} >
      {children}
      <meshStandardMaterial transparent={true} opacity={0.5} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={color} />
    </mesh>
  )
}
function Shapepink({ children, color, ...props }) {

  const { width } = useThree((state) => state.viewport)
  let s;
  if (width > 4.8) {
    s = 1
  } else {
    s = 0.8
  }

  return (
    <mesh scale={s} {...props} >
      {children}
      <meshStandardMaterial toneMapped={false} emissive={"red"} emissiveIntensity={1} color={color} />
    </mesh>
  )
}
const SpcwbyModel = () => {
  const obj = useLoader(GLTFLoader, './models/spcwbymodel.glb')
  const modelRef = useRef(); 
  const { width } = useThree((state) => state.viewport)
  let s;

  if (width > 4.8) {
    s = 0.3

  } else {
    s = 0.2
  }

  // Allows for SpaceCowboy model to follow the camera
  useFrame(({ camera }) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = camera.rotation.z;
      modelRef.current.rotation.y = camera.rotation.y;
      modelRef.current.rotation.x = camera.rotation.x;

    }
  });
  return (
    <group ref={modelRef}>
      <primitive object={obj.scene} position={[0.1, 0, 2.3]} scale={s} />
      <meshStandardMaterial attach="material" args={[{ color: 0xffffff, emissive: "white", emissiveIntensity: 5 }]} />
    </group>
  );
};



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

                {/* white torus */}
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
                  <sphereGeometry args={[0.005, , 2]} />
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
            <Shapepink color={[100, 100, 0]} position={[0, 0, 0]} >
              <sphereGeometry args={[0.6, 20, 15]} />
            </Shapepink>

            <ambientLight intensity={0.2} />

            {/* Outer blue glowing sphere */}
            <ShapeBlue color={[5, 0, 0]} position={[0, 0, 0]} >
              <sphereGeometry args={[2.1, 20, 25]} />
            </ShapeBlue>
                
            {/* Gallery at bottom */}
            <Images />

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