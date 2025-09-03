import { useThree } from '@react-three/fiber';

function ShapePink({ children, color, ...props }) {

    const { width } = useThree((state) => state.viewport)
    let s;
    if (width > 4.8) {
      s = 1
    } else {
      s = 0.8
    }
  
    return (
      <mesh scale={s} {...props} >
        {children}
        <meshStandardMaterial toneMapped={false} emissive={"red"} emissiveIntensity={1} color={color} />
      </mesh>
    )
  }

export default ShapePink;