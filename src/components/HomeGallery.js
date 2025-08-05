import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei'
import '../App.css';

{/* Base credit to drcmda at https://codesandbox.io/s/yjhzv?file=/src/App.js:2286-2579  */}


function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05)
  })
  return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + (1 - data.range(0.5, 2 / 3)) / 4
    group.current.children[0].material.grayscale = 1 - data.range(0.01 / 10, 1 / 30) 
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(2 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(0.3 / 3, 1 / 3) / 2
    group.current.children[3].material.grayscale = 1 - data.range(0.1 / 3, 1 / 3) 
    group.current.children[4].material.zoom = 1 + data.range(0.3 / 3, 1 / 3) / 3
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    group.current.children[7].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 3

    group.current.children[8].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 4
    
    group.current.children[9].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 4

    group.current.children[10].material.grayscale = 1 - data.range(0.9 / 3, 0.1 / 3)

    group.current.children[14].material.zoom = 1 + (1 - data.range(0.4 / 3, 0.1 / 3)) / 4

  })
  return (
    <group ref={group}>
      <Image position={[0, -height * 1.5+12.1, 0]} scale={[width, 8, 1]} url="https://i.imgur.com/0bJ4URQ.jpg" />
      <Image position={[0, -12, 1]} scale={[8, height, 1]} url="https://i.imgur.com/om2kvnR.jpg" />
      <Image position={[2, -20, 0]} scale={[5,5,1]} url="https://i.imgur.com/F6D8rB4.jpg" />
      <Image position={[-2, -height, 2]} scale={[1.5, height/2, 1]} url="https://i.imgur.com/R9O1MVg.jpg" />
      <Image position={[0, -height, 2.3]} scale={[1.5, height/2, 1]} url="https://i.imgur.com/rrnaVCY.jpg" />
      
      <Image position={[2, -height, 2.6]} scale={[1.5,height/2,1]} url="https://i.imgur.com/zbZELzh.jpg" />
      <Image position={[3.4, -height * 2 - height / 4 - 16, -1]} scale={[7, 5, 1]} url="https://i.imgur.com/3Sct6DB.jpg" />
      <Image position={[-5, -height * 2 - 7, -3]} scale={[7, 8, 1]} url="https://i.imgur.com/Vo6ouG9.jpg" />
      <Image position={[2, -height * 2 - 10.5, 0]} scale={[4, 6, 1]} url="https://i.imgur.com/Hiu4HSr.jpg" />
      <Image position={[-4, -height * 2 - 16, -1]} scale={[5, 5, 1]} url="https://i.imgur.com/VQJ7t82.jpg" />
      
      <Image position={[3, -height * 2 - 25, -1]} scale={[5, 5, 1]} url="https://i.imgur.com/K9mXRGW.jpg" />
      <Image position={[-3, -height * 2 - 24, 0]} scale={[5, 7, 1]} url="https://i.imgur.com/ENb1Avr.jpg" />
      <Image position={[3.3, -height * 2 - 32, -1]} scale={[5, 6, 1]} url="https://i.imgur.com/TX4JWDH.jpg" />
      <Image position={[2, -height * 2 - 39, 1]} scale={[4, 5, 1]} url="https://i.imgur.com/02zrkYe.jpg" />
      <Image position={[-2, -height * 2 - 32, 1]} scale={[4, 5, 1]} url="https://i.imgur.com/65TxBm7.jpg" />
      
      <Image position={[-3, -height * 2 - 38, 0]} scale={[5, 9, 1]} url="https://i.imgur.com/PWC35N5.jpg" />
      <Image position={[0, -height * 2 - 45, 1]} scale={[8, 5, 1]} url="https://i.imgur.com/BilMD3V.jpg" />
      <Image position={[-2.5, -height * 2 - 52, 0]} scale={[5, 5, 1]} url="https://i.imgur.com/TsLo9gb.jpg" />
      <Image position={[3.2, -height * 2 - 53, -1]} scale={[5, 10, 1]} url="https://i.imgur.com/Hoeubov.jpg" />
      <Image position={[-3, -height * 2 - 60, -1]} scale={[5, 7, 1]} url="https://i.imgur.com/IRyRm8O.jpg" />
      
      <Image position={[0, -height * 2 - 67, 0.5]} scale={[9, 6, 1]} url="https://i.imgur.com/Jcij9ZI.jpg" />
      <Image position={[4, -height * 2 - 74, -2]} scale={[7, 5, 1]} url="https://i.imgur.com/XdBLDKX.jpg" />
      <Image position={[-width/4, -height * 2 - 77, -2]} scale={[6, 9, 1]} url="https://i.imgur.com/DRUOZFN.jpg" />
      <Image position={[0, -height * 2 - 86, 0]} scale={[9, 7, 1]} url="https://i.imgur.com/jiI9r9D.jpg" />
      
      <Image position={[0, -height * 2 - 92, -3]} scale={[width, height/15, 1]} url="https://i.imgur.com/YJ0Pqf0.jpg" />


      <Image position={[3, -height * 2 - 61, -1]} scale={[5, 3, 1]} url="https://i.imgur.com/m9AJ32H.jpg" />
      
      
    </group>
  )
}


export default function HomeGallery() {
  const arrow = {
    position: 'fixed',
    color: 'white',
    left: '480px',
    top: '270px',
    fontSize: '42px',
  };
  

  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={0.8} pages={14.5}>
          <Scroll>
            <Images />
            
            
            <Html>

            <div style={arrow}>↓
            </div>
           
          </Html>
          {/*<Logo/>*/}
          </Scroll>
          
          {/*<Scroll html>
            <h1 style={{ position: 'absolute', top: '390vh', left: '15em', fontSize: '90vw', fontFamily: 'Arial, sans-serif', padding: '20px' ,transform: 'scaleX(0.6)'}}></h1>
            <h1 style={{ position: 'absolute', top: '250vh', left: '60vw' , fontFamily: 'Arial, sans-serif', padding: '20px' ,transform: 'scaleX(1.4)'}}></h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', fontSize: '70vw' , fontFamily: 'Arial, sans-serif', left: '150px' , transform: 'scaleY(4)'}}></h1>
  </Scroll>*/}
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}

