import state from "../state"

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "50%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  cursor: "pointer",
}
const CameraButtons = () => {
  const sets = {
    1: {
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
      activeMeshName: "body_primary_0",
    },
    2: {
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
      activeMeshName: "TRDEF-Body_car_main_paint_0",
    },
  }
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos)
    state.target.set(...sets[num].target)
    state.activeMeshName = sets[num].activeMeshName
    state.shouldUpdate = true
  }

  return (
    <>
      <div
        onClick={(e) => handleClick(2)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </div>
      <div
        onClick={(e) => handleClick(1)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </div>
    </>
  )
}

export default CameraButtons
