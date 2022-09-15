import * as THREE from "three"
import state from "../state"
const ColorPicker = (props) => {
  const handleClick = (e) => {
    console.log(e)
    console.log(state.activeMesh)
    if (!state.activeMesh) return
    console.log(state.activeMesh)
    state.activeMesh.material.color = new THREE.Color(e.target.style.background)
  }

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        top: "20px",
        margin: "auto",
        width: "fit-content",
        display: "flex",
      }}
    >
      <div
        style={{
          background: "red",
          width: 50,
          height: 50,
        }}
        onClick={handleClick}
      />
      <div
        style={{
          background: "green",
          width: 50,
          height: 50,
        }}
        onClick={handleClick}
      />
      <div
        style={{
          background: "blue",
          width: 50,
          height: 50,
        }}
        onClick={handleClick}
      />
    </div>
  )
}

export default ColorPicker
