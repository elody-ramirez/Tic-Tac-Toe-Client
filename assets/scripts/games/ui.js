'use strict'

// const store = require('../store')
const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const newGameSuccessful = responseData => {
  successMessage('You started a new game!')
}

const newGameFailure = () => {
  failureMessage('You were unable to start a new game!')
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

const makeMoveSuccessful = currentBox => {
  $(currentBox).text(markBoard)
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
