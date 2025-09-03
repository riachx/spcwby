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

import { Environment, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, extend, useLoader } from '@react-three/fiber';
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
  Vignette,
} from '@react-three/postprocessing';
import React from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { UnrealBloomPass } from 'three-stdlib';
import '../../styles/App.css';
import ShapeBlue from '../shapes/ShapeBlue.jsx';
import ShapePink from '../shapes/ShapePink.jsx';
import SpcwbyModel from '../shapes/SpcwbyModel.jsx';
import { LowerStarField, UpperStarField } from '../shapes/stars/StarField.jsx';
import Torus from '../shapes/Torus.jsx';
import EventImages from './HomeImages.jsx';

extend({ OrbitControls, UnrealBloomPass });

function Body() {
  // Memoize arrow styles to prevent object recreation
  const arrow = React.useMemo(() => ({
    position: 'fixed',
    color: 'white',
    left: '370px',
    top: '300px',
    fontSize: '42px',
  }), []);
  const texture = useLoader(TextureLoader, 'https://i.imgur.com/py50lUS.jpg');

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        className="canvas"
        gl={{ alpha: true, clearColor: 'transparent', sortObjects: true }}
      >
        <Environment files="./hdr/misty2.hdr" />

        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ScrollControls damping={1.2} pages={9}>
          <Scroll>

            {/* Star field */}
            <UpperStarField />

            {/* Spinning sphere with rave image */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[6, 20, 20]} />
              <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>

            {/* Torus rings */}
            <Torus type="white" />
            <Torus type="pink" />
            <Torus type="blue" />

            {/* Lower star fields */}
            <LowerStarField position={[0, -10, 10]} size={0.005} />
            <LowerStarField position={[0, -40, 10]} size={0.008} />

            {/* Space Cowboy 3D Model */}
            <SpcwbyModel />

            {/* Inner pink glowing sphere */}
            <ShapePink color={[100, 100, 0]} position={[0, 0, 0]}>
              <sphereGeometry args={[0.6, 20, 15]} />
            </ShapePink>

            <ambientLight intensity={0.2} />

            {/* Outer blue glowing sphere */}
            <ShapeBlue color={[5, 0, 0]} position={[0, 0, 0]}>
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
              <div style={arrow}>↓</div>
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
}

export default Body;
