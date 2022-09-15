import { useLoader } from "@react-three/fiber"
import * as THREE from "three"

const Background = (props) => {
  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/background_001.jpg"
  )
  texture.mapping = THREE.EquirectangularReflectionMapping
  return <primitive attach="background" object={texture}></primitive>
}

export default Background
