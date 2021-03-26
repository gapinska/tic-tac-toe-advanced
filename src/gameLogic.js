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

function calculateWinner(fields) {
  for (let i = 0; i < WINNER_LINES.length; i++) {
    const [a, b, c] = WINNER_LINES[i]
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return fields[a]
    }
  }
  return null
}

function isAllFieldsOccupied(fields) {
  return !fields.includes(null)
}

function calculateVerdict(fields) {
  const winner = calculateWinner(fields)
  const tie = winner === null && isAllFieldsOccupied(fields)
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

export { calculateVerdict, calculateFinalVerdict, X, O, TIE }
