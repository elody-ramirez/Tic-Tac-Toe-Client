'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const wins = require('./wins')

const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.newGame(formData)
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailure)
}

let player = 1

const markBoard = () => {
  let mark = ''
  if (player === 1) {
    mark = 'X'
    player = 2
  } else {
    mark = 'O'
    player = 1
  }
  return mark
}

const board = ['', '', '', '', '', '', '', '', '']

const onMakeMove = event => {
  const box = event.target
  const position = Number(box.id)
  if (board[position] === '') {
    console.log('legal play')
    const play = markBoard()
    board[position] = play
    console.log(wins.checkWin(board, play))
    wins.checkWin(board, play)
    ui.makeMoveSuccessful(box, play)
  } else {
    console.log('illegal play')
    ui.makeMoveFailure()
  }
}

module.exports = {
  onNewGame,
  onMakeMove
}
