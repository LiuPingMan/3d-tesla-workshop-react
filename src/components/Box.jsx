import {
  useLoader,
  extend
} from "@react-three/fiber"
import * as THREE from "three"
import { useBox } from '@react-three/cannon'
import {DragControls} from 'three/examples/jsm/controls/DragControls'

extend({DragControls})

const Box = (props) => {
  const [ref, api] = useBox(() => ({...props,mass:1}))
  function scaleMesh(mesh,ratio) {
    mesh.scale.x = ratio
    mesh.scale.y = ratio
    mesh.scale.z = ratio
  }
  const handlePointerDown = (e) => {
    e.object.active = true
    if(window.activeMesh && window.activeMesh !== e.object) {
      scaleMesh(window.activeMesh,1)
      window.activeMesh.active = false
    }
    window.activeMesh = e.object
  }
  const handlePointerEnter = (e) => {
    console.log(e);
    scaleMesh(e.object,1.5)
  }
  const handlePointerLeave = (e) => {
    !e.object.active && scaleMesh(e.object,1)
  }
  const texture = useLoader(THREE.TextureLoader, "./logo192.png")
  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry />
      <meshPhysicalMaterial
        map={texture}
        color="white"
        transparent
        roughness={0}
        reflectivity={1}
        clearcoat={1}
        transmission={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Box