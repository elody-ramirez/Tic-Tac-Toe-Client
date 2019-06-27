'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const other = require('./other')
const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.newGame(formData)
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailure)
}

const onIndexGames = event => {
  api.indexGames()
    .then(ui.indexGamesSuccessful)
    .catch(ui.indexGamesFailure)
}

const onMakeMove = event => {
  // Check if the game is over, if not over continue
  if (!store.gameOver) {
    const position = Number(event.target.id)
    // Check if the box is filled, if not continue
    if (store.board[position] === '') {
      // Will return if X or O, will also update gameover, tie, and total moves
      const play = other.markAndUpdate(position)
      api.makeMove(position, play)
        .then(ui.makeMoveSuccessful(event.target, play))
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
  onIndexGames
}
