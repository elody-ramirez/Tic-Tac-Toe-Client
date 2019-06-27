'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
  $('#sign-up').addClass('hide')
}

const signUpFailure = () => {
  failureMessage('You failed to sign up!')
}

const signInSuccessful = responseData => {
  successMessage('You logged into your account!')
  store.user = responseData.user
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#index-games').removeClass('hide')
  $('#game-options').removeClass('hide')
}

const signInFailure = () => {
  failureMessage("You weren't able to log in!")
}

const changePasswordSuccessful = responseData => {
  successMessage('You successfully changed your password!')
}

const changePasswordFailure = () => {
  failureMessage('You were not able to change your password!')
}

const signOutSuccessful = responseData => {
  successMessage('You have successfully logged out!')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('.container').addClass('hide')
  $('#index-games').addClass('hide')
  $('#game-options').addClass('hide')
}

const signOutFailure = () => {
  failureMessage('You were unable to log out')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
