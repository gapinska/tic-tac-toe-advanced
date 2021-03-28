import React from "react"
import Paper from "@material-ui/core/Paper"

const Field = ({ index, onClick, value, boardSize }) => {
  console.log(boardSize)
  const fieldValueClass = boardSize >= 10 ? "field-value small" : "field-value"
  return (
    <div>
      <Paper
        elevation={3}
        className="field"
        onClick={() => onClick(index, value)}
      >
        <div className={fieldValueClass}>{value}</div>
      </Paper>
    </div>
  )
}

export default Field
