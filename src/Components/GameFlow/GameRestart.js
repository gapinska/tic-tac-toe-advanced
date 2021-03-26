import React from "react"
import Button from "@material-ui/core/Button"

const GameRestart = ({ handleClickRestartGame }) => {
  return (
    <Button
      className="game-flow-btn"
      variant="outlined"
      color="primary"
      onClick={handleClickRestartGame}
    >
      Restart Game
    </Button>
  )
}

export default GameRestart
