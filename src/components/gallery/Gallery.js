import { Html, Preload, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import '../../App.css';
import GalleryImages from './GalleryImages';
/* Base credit to drcmda at https://codesandbox.io/s/yjhzv?file=/src/App.js:2286-2579  */

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
            <GalleryImages />
            <Html>
              <div style={arrow}>↓</div>
            </Html>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
