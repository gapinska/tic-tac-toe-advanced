const X = "X"
const O = "O"
const TIE = "TIE"

function calculateWinner(boardFields, winnerLines, boardSize) {
  for (let i = 0; i < winnerLines.length; i++) {
    const arr = winnerLines[i]
    let acc = []
    for (let i = 0; i < arr.length; i++) {
      acc[i] = boardFields[arr[i]]
    }
    if (
      acc.reduce(function (a, b) {
        return a === b ? a : NaN
      }) &&
      acc[0] !== null
    ) {
      return acc[0]
    } else {
      if (i === winnerLines.length - 1) {
        return null
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

export { calculateVerdict, calculateWinner, calculateFinalVerdict, X, O, TIE }
