function createBoardLogic(N) {
  const horizontalLines = calculateHorizontalWinnerLines()

  function calculateWinnerLines() {
    return [
      ...horizontalLines,
      ...calculateVerticalWinnerLines(horizontalLines),
      ...calculateDiagonalWinnerLines(horizontalLines),
    ]
  }

  function calculateHorizontalWinnerLines() {
    const horizontalLines = createEmptyBoard()
    let index = 0
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (index < Math.pow(N, N)) {
          horizontalLines[row][col] = index++
        }
      }
    }
    return horizontalLines
  }

  function calculateVerticalWinnerLines(horizontalLines) {
    const verticalWinnerLines = Array.from(Array(N), () => new Array(N))
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        verticalWinnerLines[row][col] = horizontalLines[col][row]
      }
    }
    return verticalWinnerLines
  }

  function calculateDiagonalWinnerLines(horizontalLines) {
    const diagonal1WinnerLines = Array(N)
    for (let row = 0; row < N; row++) {
      diagonal1WinnerLines[row] = horizontalLines[row][row]
    }
    const diagonal2WinnerLines = Array(N)
    let acc = N - 1
    for (let row = 0; row < N; row++) {
      diagonal2WinnerLines[row] = horizontalLines[row][acc]
      acc--
    }
    return [diagonal1WinnerLines, diagonal2WinnerLines]
  }

  function createEmptyBoard() {
    return Array.from(Array(N), () => new Array(N).fill(null))
  }

  return {
    calculateWinnerLines,
    createEmptyBoard,
  }
}

export { createBoardLogic }
