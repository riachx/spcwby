import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import {
  galleryImageData,
  applyGalleryAnimations,
} from '../../data/galleryImages';
import GalleryImage from './GalleryImage';

function GalleryImages() {
  const { width, height } = useThree(state => state.viewport);
  const scrollData = useScroll();
  const group = useRef();

  // Clean animation system - all logic is now in galleryImages.js
  useFrame(() => {
    applyGalleryAnimations(group, scrollData);
  });

  return (
    <group ref={group}>
      {galleryImageData.map((imageData, index) => (
        <GalleryImage
          key={index}
          position={imageData.getPosition(width, height)}
          scale={imageData.getScale(width, height)}
          url={imageData.url}
        />
      ))}
    </group>
  );
}

export default GalleryImages;
