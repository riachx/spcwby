import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const SpcwbyModel = () => {
  const obj = useLoader(GLTFLoader, './models/spcwbymodel.glb');
  const modelRef = useRef();
  const { width } = useThree(state => state.viewport);
  let s;

  if (width > 4.8) {
    s = 0.3;
  } else {
    s = 0.2;
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
      <meshStandardMaterial
        attach="material"
        args={[{ color: 0xffffff, emissive: 'white', emissiveIntensity: 5 }]}
      />
    </group>
  );
};

export default SpcwbyModel;
