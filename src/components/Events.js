import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei'

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
    group.current.children[0].material.grayscale = 1 - data.range(1 / 3, 1 / 3) 
    
  })
  return (
    <group ref={group}>
      <Image position={[0, -height * 1.5+12.1, 0]} scale={[width, 8, 1]} url="https://i.imgur.com/5EXqErc.jpg" />
      </group>
  )
}

export default function Events() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={0.5} pages={8}>
          <Scroll>
            <Images />
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

