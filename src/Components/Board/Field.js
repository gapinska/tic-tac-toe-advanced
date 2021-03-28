import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const Field = ({ index, onClick, value, boardSize }) => {
  return (
    <div>
      <Paper
        elevation={3}
        className="field"
        onClick={() => onClick(index, value)}
      >
        {value}
      </Paper>
    </div>
  )
}

export default Field
