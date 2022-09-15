import { useBox } from "@react-three/cannon"

const BoundingBox = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  rotation = [0, 0, 0],
  visible = false,
  children,
}) => {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position: position }))
  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>
      <group position={offset} rotation={rotation}>
        {children}
      </group>
    </group>
  )
}

export default BoundingBox
