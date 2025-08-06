/**
 * 
 * Base credit to Paul Henschel, drcmda at https://codesandbox.io/s/horizontal-tiles-l4klb?file=/src/App.js:0-3575  
 */

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Text, Scroll, useScroll, Image} from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { Bloom, EffectComposer} from "@react-three/postprocessing"
import { pastEventImages, upcomingEventImages } from '../data/eventImages'

import '../App.css';

let imagesAdded = 1;
const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])
const state = proxy({
  clicked: null,
  urls: pastEventImages,
  urlsUpcoming: upcomingEventImages,
});

function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      child.scale.y = damp(child.scale.y, 0.2 + y / 6, 8, 8, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
      ))}
    </group>
  )
}

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const [showDance, setShowDance] = useState(false); // New state variable

  const click = () => {
    if (index === 0) {
      setShowDance(!showDance); // Toggle the state for the word "DANCE"
    }
    state.clicked = index === clicked ? null : index;
  }

  const over = () => hover(true)
  const out = () => hover(false)
  
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1 / urls.length, 3 / urls.length)

    let blackphoto=false;
    let offsetclick = 3;
    if(clicked === 0 || clicked === 1 || clicked === 2 || clicked === 3 || clicked === 14 || clicked === 15 || clicked === 16){
      blackphoto = true;
      offsetclick = 0;
    }
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, (clicked === index && !blackphoto) ? 7 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, (clicked === index && !blackphoto) ? 5 : scale[0], 6, delta)
    if (clicked !== null && index < clicked ) ref.current.position.x = damp(ref.current.position.x, position[0] - offsetclick, 6, delta)
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + offsetclick, 6, delta)
    if ((clicked === null || clicked === index)) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 9, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
  })
  
  return (
    <group>
      {showDance && clicked !== null && clicked === index && ( // Conditional rendering of the word "DANCE"
        <Text
          position={[position[0] - scale[0] / 4 + 5, position[1] + scale[1] / 2, position[2] + 0.1]}
          fontSize={0.3}
          color="white"
          font="Arial"
        >
        </Text>
      )}
      <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
    </group>
  )
}


function Items({ w = 3, gap = 0.2 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  imagesAdded = imagesAdded+0.9;
  let upcom_pos = 0;
  let upcom_scale = 0;

  if(width < 7 && width > 4.2){
    upcom_pos = 0.65;
  } else if (width <= 4.2){
    upcom_pos = 1;
    upcom_scale = 0.22;
  }

  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + (urls.length) * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
       
        <Text
          position={[-1.6 + upcom_pos,0,1.2]}
          fontSize={width/10 + upcom_scale}
          font="fonts/MerseyCowboy.otf"
          letterSpacing="0.08"
          scale={[1.4,1,1]}
          lineHeight= "0.75"
        >
          UP{'\n'}COM{'\n'}ING 
        </Text>

        {/*<Text
          position={[0.8,-0.9,2.8]}
          fontSize={0.07}
          color="white"
          
          font="fonts/HankenGrotesk-Light.ttf"
          letterSpacing="-0.02"
          lineHeight= "1"
          scale={[1.4,1,1]}
        >
          SCROLL RIGHT
        </Text>*/}

        {/*<Text
          position={[0.8,0.9,2.8]}
          fontSize={0.07}
          
          font="fonts/HankenGrotesk-Light.ttf"
          letterSpacing="-0.02"
          scale={[1.4,1,1]}
        >
          STAY TUNED . . .
        </Text>*/}

        {/*Placeholder question mark image. Put upcoming event here */}
        {/*<Image url={'https://i.imgur.com/uKlaQV8.jpg'} position={[0.8, 0, 2.8]} scale={[1.42857, 2, 0]} ></Image>*/}
        
        {/*'https://i.imgur.com/qChhnHL.jpg'*/} 
        <Image url={'https://i.imgur.com/6ITXWrg.jpg'} position={[0.8, 0, 2.8]} scale={[2, 2, 0]}></Image>
        
        
        <Text
          position={[5,0.2,2]}
          fontSize={1.5}
          color="white"
          font="fonts/MerseyCowboy.otf"
          letterSpacing="0"
          scale={[1.8,1,1]}
        >
          PAST
        </Text>
        <Text
          position={[9,0,1]}
          fontSize={0.5}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>
        
        <Text
          position={[5.7,-0.5,2.7]}
          fontSize={0.25}
          color="white"
          /*fix*/
          font="fonts/HankenGrotesk-Medium.ttf"
          letterSpacing="-0.07"
          lineHeight= "1"
          scale={[1.3,1,1]}
        >
          events
        </Text>

        
        <Image scale={[7,4,1]} position={[53.2,-0.2,0]} url={'https://i.imgur.com/UCfPWTM.jpg'}></Image>
        
        <Text
          position={[2,0,2.7]}
          fontSize={0.2}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>

        <Text
          position={[58.3,0,0]}
          fontSize={0.8}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>

        <Text
          position={[53.7,-1.1,1]}
          fontSize={0.25}
          color="white"
          /*fix*/
          font="fonts/HankenGrotesk-Medium.ttf"
          letterSpacing="-0.07"
          lineHeight= "1"
          scale={[1.3,1,1]}
        >
          events
        </Text>




        <Image scale={[7,4,1]} position={[93,-0.2,0]} url={'https://i.imgur.com/w9bayj5.jpg'}></Image>
        <Text
          position={[95.8,0,0]}
          fontSize={0.8}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>
        
        <Text
          position={[92,-1.1,1]}
          fontSize={0.25}
          color="white"
          /*fix*/
          font="fonts/HankenGrotesk-Medium.ttf"
          letterSpacing="-0.07"
          lineHeight= "1"
          scale={[1.3,1,1]}
        >
          events
        </Text>

       
        </Scroll>
    </ScrollControls>
  )
}

function Stars(){
  const starCount = 600;

  const groupRef = React.useRef();
  // Generate random positions for stars
  const positions = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(30),
    y: THREE.MathUtils.randFloatSpread(10),
    z: THREE.MathUtils.randFloatSpread(25),
  }));
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.2);
      groupRef.current.rotation.y = Math.cos(clock.elapsedTime * 0.2);
    }
  });
  return(
    <group ref={groupRef} >
              {positions.map((position, index) => (
                <mesh key={index} position={[position.x, position.y, position.z]}>
                  <sphereGeometry args={[0.005, 2, 2]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              ))}
            </group>
  )

}

function Events() {
return(
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
   
    <Items/>
    <Stars/>
    <EffectComposer disableNormalPass>
    <Bloom mipmapBlur radius={5} luminanceThreshold={1} />
      </EffectComposer>
  </Canvas>
);
};
export default Events;