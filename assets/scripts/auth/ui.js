'use strict'

// const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up Successfully PAL!')
}

const signUpFailure = () => {
  failureMessage('You failed to sign up PAL!')
}

module.exports = {
  signUpSuccessful,
  signUpFailure
}
