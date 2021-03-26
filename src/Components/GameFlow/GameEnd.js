import React from "react"
import Button from "@material-ui/core/Button"

const GameEnd = ({ handleClickEndGame }) => {
  return (
    <Button
      className="game-flow-btn"
      variant="outlined"
      color="primary"
      onClick={handleClickEndGame}
    >
      Finish Game
    </Button>
  )
}

export default GameEnd
