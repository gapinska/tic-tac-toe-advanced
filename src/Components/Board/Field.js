import React from "react"
import Paper from "@material-ui/core/Paper"

const Field = ({ index, onClick, value, boardSize }) => {
  return (
    <div>
      <Paper
        elevation={3}
        className="field"
        onClick={() => onClick(index, value)}
      >
        <div className="field-value">{value}</div>
      </Paper>
    </div>
  )
}

export default Field
