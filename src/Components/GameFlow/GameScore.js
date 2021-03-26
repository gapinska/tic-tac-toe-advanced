import React from "react"
const GameScore = ({ gamer1Score, gamer2Score }) => {
  return (
    <div>
      <div className="score-board">
        <div>Gamer X: {gamer1Score}</div>
        <div>Gamer O: {gamer2Score}</div>
      </div>
    </div>
  )
}

export default React.memo(GameScore)
