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
    group.current.children[0].material.zoom = 1 + (data.range(0.0, 0.8 / 3)) / 3
    group.current.children[0].material.grayscale = 1 - data.range(1 / 3, 1 / 3) 
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(2 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(0.3 / 3, 1 / 3) / 2
    group.current.children[3].material.grayscale = 1 - data.range(0.1 / 3, 1 / 3) 
    group.current.children[4].material.zoom = 1 + data.range(0.3 / 3, 1 / 3) / 3
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    group.current.children[7].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 3

    group.current.children[8].material.grayscale = 1 - data.range(1.5 / 3, 0.2 / 3)
    group.current.children[8].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 4
    group.current.children[9].material.zoom = 1 + (1 - data.range(2 / 4, 1 / 3)) / 4
  })
  return (
    <group ref={group}>
      <Image position={[0, -height * 1.5+12.1, 0]} scale={[width, 8, 1]} url="https://i.imgur.com/5EXqErc.jpg" />
      <Image position={[0, -12, 1]} scale={[8, height, 1]} url="https://i.imgur.com/dvrTZNo.jpg" />
      <Image position={[2, -19, 0]} scale={[8,4,1]} url="https://i.imgur.com/iMxY2cw.jpg" />
      <Image position={[-2, -height, 2]} scale={[1.5, height/2, 1]} url="https://i.imgur.com/pGasRlB.jpg" />
      <Image position={[0, -height, 2.3]} scale={[1.5, height/2, 1]} url="https://i.imgur.com/eMZrowv.jpg" />
      <Image position={[2, -height, 2.6]} scale={[1.5,height/2,1]} url="https://i.imgur.com/awMbA3O.jpg" />
      
      <Image position={[0, -height * 2 - height / 4 - 30, 0]} scale={[width, height/1.2, 1]} url="https://i.imgur.com/67eWQDc.jpg" />
      <Image position={[-3, -height * 2 - 12, -2]} scale={[9, 8, 1]} url="https://i.imgur.com/k6veVr0.jpg" />
      <Image position={[4, -height * 2 - 14, 0]} scale={[4, 8, 1]} url="https://i.imgur.com/kHwc7Ey.jpg" />
      <Image position={[-2.6, -height * 2 - 21, -1]} scale={[8, 8, 1]} url="https://i.imgur.com/22xox7s.jpg" />
    </group>
  )
}

export default function HomeGallery() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={0.5} pages={8}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '390vh', left: '15em', fontSize: '90vw', fontFamily: 'Arial, sans-serif', padding: '20px' ,transform: 'scaleX(0.6)'}}></h1>
            <h1 style={{ position: 'absolute', top: '250vh', left: '60vw' , fontFamily: 'Arial, sans-serif', padding: '20px' ,transform: 'scaleX(1.4)'}}></h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '70vw' , fontFamily: 'Arial, sans-serif', left: '150px' , transform: 'scaleY(4)'}}></h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}


