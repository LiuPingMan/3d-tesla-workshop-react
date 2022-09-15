import { useBox } from "@react-three/cannon"

const Floor = (props) => {
  const [ref] = useBox(() => ({ args: [20, 1, 10], ...props }))
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxGeometry args={[200, 1, 100]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  )
}

export default Floor
