import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

export default function Events() {
  
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <mesh>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    </Canvas>
  )
}

