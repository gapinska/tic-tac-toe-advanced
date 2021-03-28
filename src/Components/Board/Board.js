import React, { useState, useEffect, useCallback, useReducer } from "react"
import Field from "./Field"
import GameStart from "../GameFlow/GameStart"
import { calculateVerdict, X, O, TIE } from "../../gameLogic"
import GameStatus from "../GameFlow/GameStatus"
import GameContinue from "../GameFlow/GameContinue"
import GameEnd from "../GameFlow/GameEnd"
import GameOver from "../GameFlow/GameOver"
import GameBar from "./GameBar"
import VerdictModal from "./VerdictModal"
import PlayerButton from "./PlayerButton"
import GameRestart from "../GameFlow/GameRestart"
import { createBoardLogic } from "../../boardLogic"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const ACTIONS = {
  SET_START_GAME: "setStartGame",
  SET_GAMER1_STARTED: "setGamer1Started",
  SET_CONTINUE_GAME_ACTIVE: "setContinueGameActive",
  SET_END_GAME: "setEndGame",
  SET_VERDICT: "setVerdict",
  SET_GAMER1_SCORE: "setGamer1Score",
  SET_GAMER2_SCORE: "setGamer2Score",
  SET_MODAL_IS_OPEN: "setModalIsOpen",
  SET_BOARD_SIZE: "setBoardSize",
  SET_BOARD_LOGIC: "setBoardLogic",
  SET_WINNER_LINES: "setWinnerLines",
}

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [boardFields, setBoardFields] = useState(Array(9).fill(null))
  const [gamer1Turn, setGamer1Turn] = useState(true)
  const classes = useStyles()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_BOARD_LOGIC })
  }, [state.boardSize])

  useEffect(() => {
    if (state.boardLogic !== null) {
      dispatch({ type: ACTIONS.SET_WINNER_LINES })
      setBoardFields(state.boardLogic.createInitialBoard(state.boardSize))
    }
  }, [state.boardLogic])

  useEffect(() => {
    if (state.boardLogic) {
      const verdict = calculateVerdict(
        boardFields,
        state.winnerLines,
        state.boardSize
      )
      switch (verdict) {
        case X:
          dispatch({
            type: ACTIONS.SET_GAMER1_SCORE,
            payload: state.gamer1Score + 1,
          })
          dispatch({ type: ACTIONS.SET_VERDICT, payload: verdict })
          dispatch({ type: ACTIONS.SET_CONTINUE_GAME_ACTIVE, payload: true })
          dispatch({ type: ACTIONS.SET_MODAL_IS_OPEN, payload: true })
          break
        case O:
          dispatch({
            type: ACTIONS.SET_GAMER2_SCORE,
            payload: state.gamer2Score + 1,
          })
          dispatch({ type: ACTIONS.SET_VERDICT, payload: verdict })
          dispatch({ type: ACTIONS.SET_CONTINUE_GAME_ACTIVE, payload: true })
          dispatch({ type: ACTIONS.SET_MODAL_IS_OPEN, payload: true })
          break
        case TIE:
          dispatch({ type: ACTIONS.SET_VERDICT, payload: TIE })
          dispatch({ type: ACTIONS.SET_CONTINUE_GAME_ACTIVE, payload: true })
          dispatch({ type: ACTIONS.SET_MODAL_IS_OPEN, payload: true })
          break
        default:
          return
      }
    }
  }, [boardFields])

  const handleClickField = useCallback((index, value) => {
    if (value === null) {
      setGamer1Turn((gamer1Turn) => {
        setBoardFields((oldBoardFields) => {
          const newFields = [...oldBoardFields]
          newFields[index] = gamer1Turn ? X : O
          return newFields
        })
        return !gamer1Turn
      })
    }
  }, [])

  const handleClickGamerPicked = (gamer) => {
    if (gamer !== X) {
      setGamer1Turn(false)
      dispatch({ type: ACTIONS.SET_GAMER1_STARTED })
    }
    dispatch({ type: ACTIONS.SET_START_GAME, payload: true })
  }

  const handleClickContinueGame = () => {
    if (state.continueGameActive) {
      setGamer1Turn(!state.gamer1Started)
      dispatch({ type: ACTIONS.SET_GAMER1_STARTED })
      setBoardFields(state.boardLogic.createInitialBoard(state.boardSize))
      dispatch({ type: ACTIONS.SET_VERDICT, payload: null })
      dispatch({ type: ACTIONS.SET_CONTINUE_GAME_ACTIVE, payload: true })
      dispatch({ type: ACTIONS.SET_MODAL_IS_OPEN, payload: false })
    }
  }

  const handleClickRestartGame = () => {
    dispatch({ type: ACTIONS.SET_START_GAME, payload: false })
    setBoardFields(Array(9).fill(null))
    dispatch({ type: ACTIONS.SET_GAMER1_SCORE, payload: 0 })
    dispatch({ type: ACTIONS.SET_GAMER2_SCORE, payload: 0 })
    dispatch({ type: ACTIONS.SET_VERDICT, payload: null })
    dispatch({ type: ACTIONS.SET_MODAL_IS_OPEN, payload: false })
    dispatch({ type: ACTIONS.SET_BOARD_SIZE, payload: 3 })
  }

  const handleClickEndGame = () => {
    dispatch({ type: ACTIONS.SET_END_GAME })
  }

  const gamerTurn = gamer1Turn ? X : O

  const handleChangeBoardSize = (event) => {
    dispatch({
      type: ACTIONS.SET_BOARD_SIZE,
      payload: parseInt(event.target.value) || 3,
    })
  }
  return (
    <div>
      {(!state.startGame && (
        <div>
          <GameStart />
          <form className={classes.root} noValidate autoComplete="off">
            <div className="form-field">
              <TextField
                id="outlined-search"
                label="Set board size"
                type="search"
                variant="outlined"
                onChange={handleChangeBoardSize}
              />
            </div>
          </form>
          <h4 className="game-info-title">Who is going to start?</h4>
          <div className="btn-section">
            <PlayerButton onClick={() => handleClickGamerPicked(X)} value={X} />
            <PlayerButton onClick={() => handleClickGamerPicked(O)} value={O} />
          </div>
        </div>
      )) ||
        (state.startGame && !state.endGame && (
          <div>
            <GameBar
              gamer1Score={state.gamer1Score}
              gamer2Score={state.gamer2Score}
            />
            <div className="game-flow-btn-section">
              <GameContinue
                status={state.verdict ? true : false}
                handleClickContinueGame={handleClickContinueGame}
              />
              <GameRestart handleClickRestartGame={handleClickRestartGame} />
              <GameEnd handleClickEndGame={handleClickEndGame} />
            </div>
            <GameStatus gamerTurn={gamerTurn} verdict={state.verdict} />
            <div className="game-board">
              <div
                className="board"
                style={{
                  gridTemplateColumns: `repeat(${state.boardSize}, 1fr)`,
                }}
              >
                {boardFields.map((boardField, index) => (
                  <Field
                    key={index}
                    value={boardField}
                    index={index}
                    onClick={handleClickField}
                  />
                ))}
              </div>
            </div>
            <VerdictModal isOpen={state.modalIsOpen} />
          </div>
        )) || (
          <GameOver
            gamer1Score={state.gamer1Score}
            gamer2Score={state.gamer2Score}
          />
        )}
    </div>
  )
}

export default Board
