import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Physics } from "@react-three/cannon"
import Orbit from "./components/Orbit"
import ColorPicker from "./components/ColorPicker"
import CameraButtons from "./components/CameraButtons"
import Floor from "./components/Floor"
import Background from "./components/Background"
import Lights from "./components/Lights"
// import Box from "./components/Box"
import Car from "./components/Car"
import CameraControls from "./components/CameraControls"
import Effects from "./components/Effects"

function App() {
  const positionArr = new Float32Array(9)
  for (let index = 0; index < 9; index++) {
    positionArr[index] = Math.random() * 2
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [9, 9, 9] }}
        shadows
      >
        <Orbit />
        <axesHelper args={[5]} />
        <CameraControls />
        <Lights />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Car />
          {/* <Suspense fallback={null}>
              <Box position={[-4, 1, 0]} />
            </Suspense>
            <Suspense fallback={null}>
              <Box position={[4, 1, 0]} />
            </Suspense> */}

          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
      </Canvas>
    </div>
  )
}

export default App
