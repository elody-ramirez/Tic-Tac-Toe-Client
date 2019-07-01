'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const gameLogic = require('./gameLogic')
const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  api.newGame()
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailure)
}

const onIndexGames = event => {
  api.indexGames()
    .then(ui.indexGamesSuccessful)
    .catch(ui.indexGamesFailure)
}

// const onHoverIn = event => {
//   ui.hoverIn(event.target)
// }
//
// const onHoverOut = event => {
//   ui.hoverOut(event.target)
// }

const onMakeMove = event => {
  if (!store.gameOver) {
    if (store.board[Number(event.target.id)] === '') {
      playGame(event.target, event.target.id)
      // Check if going again computer controlled opponent, if not do nothing
      if (store.versusCpu) {
        let validMove = false
        let random = 0
        if (!store.gameOver) {
          while (!validMove) {
            random = Math.floor((Math.random() * 9) + 1)
            if (store.board[random] === '') {
              validMove = true
            }
          }
          playGame($(`#${random}`), random)
        }
      }
    } else {
      ui.illegalMove()
    }
  } else {
    ui.gameOver()
  }
}

const onBack = event => {
  ui.back()
}

const onVersusCpu = event => {
  api.newGame()
    .then(ui.versusCpuSuccessful)
}

const playGame = (line, index) => {
  // Check if the game is over, if not over continue
  if (!store.gameOver) {
    const position = Number(index)
    // Check if the box is filled, if not continue
    if (store.board[position] === '') {
      // Will return if X or O, will also update gameover, tie, and total moves
      const play = gameLogic.markAndUpdate(position)
      api.makeMove(position, play)
        .then(ui.makeMoveSuccessful(line, play))
        .catch(ui.makeMoveFailure)
    } else {
      // if the box is filled let the User know it is an illgeal Move
      ui.illegalMove()
    }
  } else {
    // if the  game is over, let the User know it is over
    ui.gameOver()
  }
}

module.exports = {
  onNewGame,
  onMakeMove,
  onIndexGames,
  onBack,
  onVersusCpu
  // onHoverIn,
  // onHoverOut
}
