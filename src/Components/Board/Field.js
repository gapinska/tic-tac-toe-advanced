import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.2),
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
}))

const Field = ({ onClick, value }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={3} className="field" onClick={onClick}>
        {value}
      </Paper>
    </div>
  )
}

export default Field
