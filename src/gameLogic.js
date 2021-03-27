const X = "X"
const O = "O"
const TIE = "TIE"

const WINNER_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

Object.freeze(WINNER_LINES)
WINNER_LINES.forEach((WINNER_LINE) => Object.freeze(WINNER_LINE))

// function calculateWinner(boardFields, winnerLines, boardSize) {
//   for (let i = 0; i < boardSize; i++) {
//     const arr = winnerLines[i]
//     if(arr[0])
//     if (boardFields[a] && boardFields[a] === boardFields[b] && boardFields[a] === boardFields[c]) {
//       return boardFields[a]
//     }
//   }
//   return null
// }

// function calculateWinner(boardFields) {
//   for (let i = 0; i < WINNER_LINES.length; i++) {
//     const [a, b, c] = WINNER_LINES[i]
//     if (boardFields[a] && boardFields[a] === boardFields[b] && boardFields[a] === boardFields[c]) {
//       return boardFields[a]
//     }
//   }
//   return null
// }

function calculateWinner(boardFields, winnerLines, boardSize) {
  for (let i = 0; i < winnerLines.length; i++) {
    const arr = winnerLines[i]
    for (let i = 0; i < boardSize; i++) {
      if (!boardFields[arr[i]]) {
        return null
      } else {
        if (i === boardSize - 1) {
          return boardFields[arr[0]]
        }
      }
    }
  }
}

function isAllFieldsOccupied(boardFields) {
  return !boardFields.includes(null)
}

function calculateVerdict(boardFields, winnerLines, boardSize) {
  const winner = calculateWinner(boardFields, winnerLines, boardSize)
  const tie = winner === null && isAllFieldsOccupied(boardFields)
  if (winner !== null || tie) {
    if (tie) {
      return TIE
    } else {
      return winner
    }
  }
  return null
}

function calculateFinalVerdict(gamer1Score, gamer2Score) {
  if (gamer1Score > gamer2Score) {
    return X
  } else if (gamer2Score > gamer1Score) {
    return O
  } else return TIE
}

export { calculateVerdict, calculateFinalVerdict, calculateWinner, X, O, TIE }
