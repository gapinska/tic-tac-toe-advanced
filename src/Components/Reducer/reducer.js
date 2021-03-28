import { ACTIONS } from "./actions"
import { createBoardLogic } from "../../boardLogic"

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_BOARD_LOGIC:
      return { ...state, boardLogic: createBoardLogic(state.boardSize) }
    case ACTIONS.SET_WINNER_LINES:
      return { ...state, winnerLines: state.boardLogic.calculateWinnerLines() }
    case ACTIONS.SET_GAMER1_SCORE:
      return { ...state, gamer1Score: action.payload }
    case ACTIONS.SET_GAMER2_SCORE:
      return { ...state, gamer2Score: action.payload }
    case ACTIONS.SET_VERDICT:
      return { ...state, verdict: action.payload }
    case ACTIONS.SET_CONTINUE_GAME_ACTIVE:
      return { ...state, continueGameActive: action.payload }
    case ACTIONS.SET_MODAL_IS_OPEN:
      return { ...state, modalIsOpen: action.payload }
    case ACTIONS.SET_GAMER1_STARTED:
      return { ...state, gamer1Started: !state.gamer1Started }
    case ACTIONS.SET_START_GAME:
      return { ...state, startGame: action.payload }
    case ACTIONS.SET_BOARD_SIZE:
      return { ...state, boardSize: action.payload }
    case ACTIONS.SET_END_GAME:
      return { ...state, endGame: true }

    default:
      return state
  }
}

export { reducer }
