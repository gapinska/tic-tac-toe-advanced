import React from "react"

const GameStatus = ({ gamerTurn, verdict }) => {
  return (
    <div className="game-status">
      {!verdict ? (
        <div>
          Your turn: <span>{gamerTurn}</span>
        </div>
      ) : (
        <div>The winner: {verdict}</div>
      )}
    </div>
  )
}

export default GameStatus
