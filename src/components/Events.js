import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Text, Scroll, useScroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

{/* Base credit to drcmda at https://codesandbox.io/s/horizontal-tiles-l4klb?file=/src/App.js:0-3575  */}

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])
const state = proxy({
  clicked: null,
  urls: [
    // Replace these with your Imgur image URLs

    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/2h9YkW0.jpg',
    'https://i.imgur.com/iUzPOYA.jpg',
    'https://i.imgur.com/1cX2G9g.jpg',
    'https://i.imgur.com/aVkwn6R.jpg',
    'https://i.imgur.com/DqwnEOp.jpg',
    'https://i.imgur.com/wnWMXri.jpg',
    'https://i.imgur.com/671XFqM.jpg',
    'https://i.imgur.com/3rGON50.jpg',
    'https://i.imgur.com/cu2027a.jpg',
    'https://i.imgur.com/MSu1S4R.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/5dN7lHI.jpg',
    'https://i.imgur.com/4ezhjOZ.jpg',
    'https://i.imgur.com/itwyxCa.jpg',
    'https://i.imgur.com/JHdgbR9.jpg',
    'https://i.imgur.com/w6zYvsP.jpg',
    'https://i.imgur.com/ZXgOZcF.jpg',
    'https://i.imgur.com/XxoPcub.jpg',
    'https://i.imgur.com/LHFcsJP.jpg',
    'https://i.imgur.com/YBRTKRS.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/tjqjd4x.jpg',
    'https://i.imgur.com/GoL8szI.jpg',
    'https://i.imgur.com/wgrh1an.jpg',
    // Add more Imgur image URLs as needed
  ],
});

function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
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
  
  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + (urls.length) * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
        
        <Text
          position={[-1.6,0,1.2]}
          fontSize={1.4}
          font="fonts/MerseyCowboy.otf"
          letterSpacing="0.08"
          scale={[1.4,1,1]}
          lineHeight= "0.75"
        >
          UP{'\n'}COM{'\n'}ING 
        </Text>

        <Text
          position={[-0.9,0.6,1.2]}
          fontSize={0.1}
          color="white"
          /*fix*/
          font="fonts/ArialRegular.otf"
          letterSpacing="-0.02"
          lineHeight= "1"
          scale={[1.5,1,1]}
        >
          SCROLL RIGHT
        </Text>


        <Text
          position={[0.85,-0.9,2.8]}
          fontSize={0.07}
          /*fix*/
          font="fonts/arial-black.woff"
          letterSpacing="-0.02"
          scale={[1.5,1,1]}
        >
          STAY TUNED . . .
        </Text>

        <Image position={[0.8,0,2.8]} scale={[1.42857,2,0]} url={'https://i.imgur.com/uKlaQV8.jpg'}></Image>
        
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
          position={[6.3,-0.75,2.7]}
          fontSize={0.25}
          color="white"
          /*fix*/
          font="fonts/arial-black.woff"
          letterSpacing="-0.02"
          lineHeight= "1"
        >
          EVENTS
        </Text>

        <Text
          position={[47.9,0.2,0]}
          fontSize={2.5}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.06"
        >
          2022
        </Text>

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
          position={[51.7,0,0]}
          fontSize={0.8}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>

        <Text
          position={[48,-1.1,1]}
          fontSize={0.2}
          color="white"
          /*fix*/
          font="fonts/arial-black.woff"
          letterSpacing="-0.02"
          lineHeight= "1"
        >
          EVENTS
        </Text>



        <Text
          position={[86.5,0.2,0]}
          fontSize={2.5}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.06"
        >
          2021
        </Text>
        <Text
          position={[90,0,0]}
          fontSize={0.8}
          color="white"
          font="fonts/arial-black.woff"
          letterSpacing="-0.08"
          lineHeight= "1"
        >
          {'>'}
        </Text>
        
        <Text
          position={[88,-1.1,1]}
          fontSize={0.2}
          color="white"
          /*fix*/
          font="fonts/arial-black.woff"
          letterSpacing="-0.02"
          lineHeight= "1"
        >
          EVENTS
        </Text>
        </Scroll>
    </ScrollControls>
  )
}

function Stars(){
  const starCount = 400;

  const groupRef = React.useRef();
  // Generate random positions for stars
  const positions = [...Array(starCount)].map(() => ({
    x: THREE.MathUtils.randFloatSpread(25),
    y: THREE.MathUtils.randFloatSpread(25),
    z: THREE.MathUtils.randFloatSpread(25),
  }));
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
  </Canvas>
);
};
export default Events;