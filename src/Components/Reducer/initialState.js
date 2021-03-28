const initialState = {
  startGame: false,
  gamer1Started: true,
  continueGameActive: false,
  endGame: false,
  boardFields: Array(9).fill(null),
  gamer1Turn: true,
  verdict: null,
  gamer1Score: 0,
  gamer2Score: 0,
  modalIsOpen: false,
  boardSize: 3,
  boardLogic: null,
  winnerLines: [],
}

export { initialState }
