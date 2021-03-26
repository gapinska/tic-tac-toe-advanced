import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const GameBar = ({ gamer1Score, gamer2Score }) => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          Tic tac toe
        </Typography>
        <div className="score-board">
          <div className="score-board-item">Gamer X: {gamer1Score}</div>
          <div className="score-board-item">Gamer O: {gamer2Score}</div>
        </div>
      </AppBar>
    </div>
  )
}

export default React.memo(GameBar)
