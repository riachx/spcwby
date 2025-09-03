import { Html, Preload, ScrollControls, Scroll } from '@react-three/drei';
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
  );
}
