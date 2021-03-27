import React, { useState, useEffect, useCallback } from "react"
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

const Board = () => {
  const [startGame, setStartGame] = useState(false)
  const [gamer1Started, setgamer1Started] = useState(true)
  const [continueGameActive, setContinueGameActive] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [boardFields, setBoardFields] = useState(Array(9).fill(null))
  const [gamer1Turn, setGamer1Turn] = useState(true)
  const [verdict, setVerdict] = useState(null)
  const [gamer1Score, setGamer1Score] = useState(0)
  const [gamer2Score, setGamer2Score] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [boardSize, setBoardSize] = useState(3)
  const [boardLogic, setBoardLogic] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    setBoardLogic(createBoardLogic(boardSize))
  }, [boardSize])

  useEffect(() => {
    if (boardLogic !== null) {
      console.log(boardLogic.calculateWinnerLines())
      //   setBoardFields(boardLogic.createEmptyBoard(boardSize))
      setBoardFields(boardLogic.createInitialBoard(boardSize))
    }
  }, [boardLogic])

  useEffect(() => {
    // const verdict = calculateVerdict(boardFields)
    // switch (verdict) {
    //   case X:
    //     setGamer1Score((prevGamer1Score) => prevGamer1Score + 1)
    //     setVerdict(verdict)
    //     setContinueGameActive(true)
    //     setModalIsOpen(true)
    //     break
    //   case O:
    //     setGamer2Score((prevGamer1Score) => prevGamer1Score + 1)
    //     setVerdict(verdict)
    //     setContinueGameActive(true)
    //     setModalIsOpen(true)
    //     break
    //   case TIE:
    //     setVerdict(TIE)
    //     setContinueGameActive(true)
    //     setModalIsOpen(true)
    //     break
    //   default:
    //     return
    // }
  }, [boardFields])

  const handleClickField = useCallback((index, value) => {
    console.log(`index: ${index} value : ${value}`)

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
      setgamer1Started(false)
    }
    setStartGame(true)
  }

  const handleClickContinueGame = () => {
    if (continueGameActive) {
      setGamer1Turn(!gamer1Started)
      setgamer1Started(!gamer1Started)
      setBoardFields(Array(9).fill(null))
      setVerdict(null)
      setContinueGameActive(false)
      setModalIsOpen(false)
    }
  }

  const handleClickRestartGame = () => {
    setStartGame(false)
    setBoardFields(Array(9).fill(null))
    setGamer1Score(0)
    setGamer2Score(0)
    setVerdict(null)
    setModalIsOpen(false)
  }

  const handleClickEndGame = () => {
    setEndGame(true)
  }

  const gamerTurn = gamer1Turn ? X : O

  const handleChangeBoardSize = (event) => {
    setBoardSize(parseInt(event.target.value) || 3)
  }

  return (
    <div>
      {(!startGame && (
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
        (startGame && !endGame && (
          <div>
            <GameBar gamer1Score={gamer1Score} gamer2Score={gamer2Score} />
            <div className="game-flow-btn-section">
              <GameContinue
                status={verdict ? true : false}
                handleClickContinueGame={handleClickContinueGame}
              />
              <GameRestart handleClickRestartGame={handleClickRestartGame} />
              <GameEnd handleClickEndGame={handleClickEndGame} />
            </div>
            <GameStatus gamerTurn={gamerTurn} verdict={verdict} />
            <div className="game-board">
              <div
                className="board"
                style={{ gridTemplateColumns: `repeat(${boardSize}, 100px)` }}
              >
                {
                  // boardFields.map(
                  //   (boardFieldsLine) =>
                  //     boardFieldsLine.map((boardField, index) => (
                  //       <Field
                  //         key={index}
                  //         value={boardField}
                  //         index={index}
                  //         onClick={handleClickField}
                  //       />
                  //     ))

                  boardFields.map((boardField, index) => (
                    <Field
                      key={index}
                      value={boardField}
                      index={index}
                      onClick={handleClickField}
                    />
                  ))
                }
              </div>
            </div>
            <VerdictModal isOpen={modalIsOpen} />
          </div>
        )) || <GameOver gamer1Score={gamer1Score} gamer2Score={gamer2Score} />}
    </div>
  )
}

export default Board
