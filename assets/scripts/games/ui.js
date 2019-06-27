'use strict'

const store = require('../store')
// const wins = require('./wins')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const newGameSuccessful = responseData => {
  successMessage('You started a new game! X goes First')
  $('.container').removeClass('hide')
  $('.box').text('')
  store.board = ['', '', '', '', '', '', '', '', '']
  store.moveCount = 0
  store.player = 'X'
  store.game = responseData.game
  store.gameOver = false
  store.tie = false
}

const newGameFailure = () => {
  failureMessage('You were unable to start a new game!')
}

const makeMoveSuccessful = (currentBox, play) => {
  $(currentBox).text(play)
  if (store.gameOver && !store.tie) {
    successMessage(`${store.prevPlayer} just WON!`)
  } else if (store.tie) {
    successMessage(`The Game eneded in a tie. Play Again!`)
  } else {
    successMessage(`${store.player} goes now`)
  }
}

const makeMoveFailure = responseData => {
  successMessage("You can't make this move")
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  makeMoveSuccessful,
  makeMoveFailure
}
