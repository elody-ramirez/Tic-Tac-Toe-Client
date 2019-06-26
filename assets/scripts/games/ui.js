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

const makeMoveSuccessful = (currentBox, play) => {
  $(currentBox).text(play)
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
