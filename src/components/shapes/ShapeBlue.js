import { useThree } from '@react-three/fiber';

function ShapeBlue({ children, color, ...props }) {

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
        <meshStandardMaterial transparent={true} opacity={0.5} toneMapped={false} emissive={"red"} emissiveIntensity={10} color={color} />
      </mesh>
    )
  }

export default ShapeBlue;