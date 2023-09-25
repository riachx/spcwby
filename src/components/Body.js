import '../App.css';
import React, { useState, useRef } from 'react';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { Environment, useScroll, Image as ImageImpl, Scroll, ScrollControls } from "@react-three/drei"
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { HueSaturation, Bloom, BrightnessContrast, EffectComposer, Vignette } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


extend({ OrbitControls, UnrealBloomPass });

function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.08)
  })
  return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
}

function Images() {
  const { width, height, camera } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()


  useFrame(({ camera }) => {


    if (group.current) {
      // Match the X-axis rotation of the object with the camera's X-axis rotation
      group.current.rotation.z = camera.rotation.z;
      group.current.rotation.y = camera.rotation.y;
      group.current.rotation.x = camera.rotation.x;

    }
    // 0=traffic cone, 1= 
    group.current.children[0].material.zoom = 1 + data.range(1 / 3, 1 / 3) / 3
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
      <Image position={[-2.5, -height - 12, 0]} scale={[width / 3, height, 1]} url="https://i.imgur.com/6EcFpIQ.jpg" />
      <Image position={[-1, -height - 29.1, 3]} scale={[1.5, 1.9, 1]} url="https://i.imgur.com/EeDc7jA.jpg" />
      <Image position={[2.5, -height - 12, 1]} scale={4} url="https://i.imgur.com/R9O1MVg.jpg" />
      <Image position={[2.0, -height - 29.1, 2]} scale={[1.3, 3, 1]} url="https://i.imgur.com/Df1sbBY.jpg" />
      <Image position={[0.4, -height - 28.8, 2.5]} scale={[1.1, 3, 1]} url="https://i.imgur.com/K1f4x0h.jpg" />
      <Image position={[-1.5, -height - 35, 0]} scale={[width / 1.5, height, 1]} url="https://i.imgur.com/d6GPiAP.jpg" />
      <Image position={[0, -height * 2 - height / 4 - 12, 0]} scale={[width, height, 1]} url="https://i.imgur.com/jsjxgZU.jpg" />
      <Image position={[3.5, -height * 2 - height / 4 - 32, -1]} scale={[width / 2, height, 1]} url="https://i.imgur.com/35aCyWk.jpg" />
      <Image position={[0, -height * 2 - height / 4 - 42, -1]} scale={[width, height, 1]} url="https://i.imgur.com/ukBXU0M.jpg" />
      <Image position={[-4, -height * 2 - height / 4 - 36, -1]} scale={5.5} url="https://i.imgur.com/Bj2qZdz.jpg" />
    </group>
  )
}

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
const SpcwbyModel = () => {
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
      <primitive object={obj.scene} position={[0.1, 0, 2.3]} scale={0.3} />
      <meshStandardMaterial attach="material" args={[{ color: 0xffffff, emissive: "white", emissiveIntensity:5}]} />
    </group>
  );
};

function Body() {



  const arrow = {
    position: 'fixed',
    color: 'white',
    left: '460px',
    top: '300px',
    fontSize: '42px',
  };
  const groupRef = React.useRef();
  const groupRef2 = React.useRef();
  const starCount = 350;
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
      
      <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <ScrollControls damping={1.2} pages={9}>
      <Scroll>
      
      {/* star field */}
      <group ref={groupRef} >
      {positions.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.005, 2, 2]} />
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


      {/* star field */}
      <group ref={groupRef2} position={[0,-10,10]}>
      {positions_lower.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.005, 2, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
    <group ref={groupRef2} position={[0,-40,10]}>
      {positions_lower.map((position, index) => (
        <mesh key={index} position={[position.x, position.y, position.z]}>
          <sphereBufferGeometry args={[0.005, 2, 2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
    <SpcwbyModel/>
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
      
      <Images />
      <Html>

            <div style={arrow}>↓
            </div>
          </Html>
        </Scroll>
      </ScrollControls>


      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur radius={0.75} luminanceThreshold={1} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
        <HueSaturation hue={4.191} />
        <BrightnessContrast brightness={-0.1} />

        {/*<LUT lut={texture2} />*/}
      </EffectComposer>

    </Canvas>
  );
};

export default Body;