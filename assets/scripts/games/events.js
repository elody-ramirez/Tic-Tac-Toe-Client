'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const wins = require('./wins')
const store = require('../store')

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
    .then(console.log)
    .catch(ui.indexGamesFailure)
}

const markBoard = () => {
  let mark = ''
  if (store.player === 'X') {
    mark = 'X'
    store.player = 'O'
    store.prevPlayer = 'X'
  } else {
    mark = 'O'
    store.player = 'X'
    store.prevPlayer = 'O'
  }
  return mark
}

const onMakeMove = event => {
  if (!store.gameOver) {
    const box = event.target
    const position = Number(box.id)
    if (store.board[position] === '') {
      console.log('legal play')
      const play = markBoard()
      store.board[position] = play
      store.moveCount++
      if (wins.checkWin(store.board, play) || store.moveCount === 9) {
        store.gameOver = true
      }
      if (!wins.checkWin(store.board, play) && store.moveCount === 9) {
        store.tie = true
      }
      api.makeMove(position, play)
        .then(ui.makeMoveSuccessful(box, play))
        .catch(ui.makeMoveFailure)
    } else {
      console.log('illegal play')
      ui.makeMoveFailure()
    }
  } else {
    console.log('Game is Over')
  }
}

module.exports = {
  onNewGame,
  onMakeMove,
  onIndexGames
}
