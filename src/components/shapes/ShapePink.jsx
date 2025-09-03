import { useThree } from '@react-three/fiber';
import React, { useMemo } from 'react';

const ShapePink = React.memo(function ShapePink({ children, color, ...props }) {
  const { width } = useThree(state => state.viewport);
  // Memoize scale calculation to avoid recalculation on every render
  const scale = useMemo(() => {
    return width > 4.8 ? 1 : 0.8;
  }, [width]);

  return (
    <mesh scale={scale} {...props}>
      {children}
      <meshStandardMaterial
        toneMapped={false}
        emissive={'red'}
        emissiveIntensity={1}
        color={color}
      />
    </mesh>
  );
});

export default ShapePink;
