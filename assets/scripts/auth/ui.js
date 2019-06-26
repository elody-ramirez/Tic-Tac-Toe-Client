'use strict'

const store = require('../store')

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
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('You failed to sign up!')
}

const signInSuccessful = responseData => {
  successMessage('You logged into your account!')
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage("You weren't able to log in!")
}

const changePasswordSuccessful = responseData => {
  successMessage('You successfully changed your password')
}

const changePasswordFailure = () => {
  failureMessage('You were not able to change your password')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure
}
