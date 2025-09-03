import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import EventImage from './HomeImage.jsx';

// Returns all images
function EventImages() {
  const { width, height } = useThree(state => state.viewport);
  const data = useScroll();
  const group = useRef();

  // Match the X-axis rotation of the object with the camera's X-axis rotation
  useFrame(({ camera }) => {
    if (group.current) {
      group.current.rotation.z = camera.rotation.z;
      group.current.rotation.y = camera.rotation.y;
      group.current.rotation.x = camera.rotation.x;
    }
    // Adds zooming and grayscale effects when scrolling
    group.current.children[0].material.zoom =
      1 + data.range(1 / 3, 0.2 / 3) / 3;
    group.current.children[0].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);

    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.grayscale =
      1 - data.range(1.65 / 3, 0.2 / 3);

    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;

    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;

    group.current.children[7].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;

    group.current.children[8].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    group.current.children[8].material.grayscale =
      1 - data.range(2.7 / 3, 0.5 / 3);
    group.current.children[8].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });

  return (
    <group ref={group}>
      <EventImage
        position={[-width / 5, -height - 9, 0]}
        scale={[4.5, height, 1]}
        url="https://i.imgur.com/6EcFpIQ.jpg"
      />
      <EventImage
        position={[-1, -height - 29.1, 3]}
        scale={[1.5, 1.9, 1]}
        url="https://i.imgur.com/EeDc7jA.jpg"
      />
      <EventImage
        position={[width / 6, -height - 15 + width / 5, 1]}
        scale={4}
        url="https://i.imgur.com/R9O1MVg.jpg"
      />
      <EventImage
        position={[2.0, -height - 29.1, 2]}
        scale={[1.3, 3, 1]}
        url="https://i.imgur.com/Df1sbBY.jpg"
      />
      <EventImage
        position={[0.4, -height - 28.8, 2.5]}
        scale={[1.1, 3, 1]}
        url="https://i.imgur.com/K1f4x0h.jpg"
      />
      <EventImage
        position={[-1.5, -height - 35, 0]}
        scale={[width / 1.5, height, 1]}
        url="https://i.imgur.com/d6GPiAP.jpg"
      />
      <EventImage
        position={[0, -height * 2 - height / 4 - 11, 0]}
        scale={[width, height, 1]}
        url="https://i.imgur.com/w1L8AVL.jpg"
      />
      <EventImage
        position={[width / 5, -height * 2 - height / 4 - 32, -1]}
        scale={[width / 2, height, 1]}
        url="https://i.imgur.com/35aCyWk.jpg"
      />
      <EventImage
        position={[0, -height * 2 - height / 4 - 42, -1]}
        scale={[13, 9, 1]}
        url="https://i.imgur.com/ukBXU0M.jpg"
      />
      <EventImage
        position={[-4, -height * 2 - height / 4 - 36, -1]}
        scale={5.5}
        url="https://i.imgur.com/Bj2qZdz.jpg"
      />
    </group>
  );
}
export default EventImages;
