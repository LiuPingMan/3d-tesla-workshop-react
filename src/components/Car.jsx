import { Suspense } from "react"
import Dragable from "./Dragable"
import BoundingBox from "./BoundingBox"
import Model from "./Model"

const Car = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          position={[4, 0.8, 0]}
          dims={[2, 1.6, 5.1]}
          offset={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          // visible
        >
          <Model
            path={"/tesla_2018_model_3/scene.gltf"}
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          position={[-4, 0.8, 0]}
          dims={[2, 1.5, 5.5]}
          offset={[0, -0.7, -0.1]}
          // visible
        >
          <Model
            path={"/tesla_roadster_2020/scene.gltf"}
            scale={new Array(3).fill(1.2)}
          />
        </BoundingBox>
      </Dragable>
      <group rotation={[0,Math.PI,0]} position={[0,0,2]}>
        <Model path={"/mech_drone/scene.gltf"} scale={new Array(3).fill(3)} />
      </group>
    </Suspense>
  )
}

export default Car
