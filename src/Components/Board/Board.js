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
import TextField from "@material-ui/core/TextField"
import { ACTIONS } from "../Reducer/actions"
import { initialState } from "../Reducer/initialState"
import { reducer } from "../Reducer/reducer"

const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [boardFields, setBoardFields] = useState(Array(9).fill(null))
  const [gamer1Turn, setGamer1Turn] = useState(true)

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
          <form noValidate autoComplete="off">
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
                    boardSize={state.boardSize}
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
