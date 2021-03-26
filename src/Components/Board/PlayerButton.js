import React from "react"
import Paper from "@material-ui/core/Paper"

const PlayerButton = ({ onClick, value }) => {
  return (
    <Paper elevation={3} className="player-btn" onClick={onClick}>
      {value}
    </Paper>
  )
}

export default PlayerButton
