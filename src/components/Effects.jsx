import { useState, useEffect } from "react"
import {
  EffectComposer,
  DepthOfField,
  GodRays,
} from "@react-three/postprocessing"
import { useThree } from "@react-three/fiber"

const Effects = () => {
  const [lights, setLights] = useState([])
  const { scene } = useThree()
  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) {
      setLights(scene.lights)
    }
  }, [scene.lights])
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      {lights.map((light) => (
        <GodRays sun={light.current} key={light.current.uuid} />
      ))}
    </EffectComposer>
  )
}

export default Effects
