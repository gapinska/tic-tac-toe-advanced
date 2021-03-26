import React from "react"
import { calculateFinalVerdict, TIE } from "../../gameLogic"

const GameOver = ({ gamer1Score, gamer2Score }) => {
  const finalVerdict = calculateFinalVerdict(gamer1Score, gamer2Score)
  return (
    <div className="game-info">
      <div className="game-info-title game-over-info">Game Over</div>
      <div className="game-info-title game-over-verdict">
        The winner: <span>{finalVerdict}</span>
      </div>
      <div className="game-info-title game-over-congrat">
        {finalVerdict !== TIE ? "Congratulations!" : "Try next time!"}
      </div>
    </div>
  )
}

export default GameOver
