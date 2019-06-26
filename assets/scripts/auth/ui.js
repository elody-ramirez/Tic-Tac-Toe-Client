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
  successMessage('You successfully changed your password!')
}

const changePasswordFailure = () => {
  failureMessage('You were not able to change your password!')
}

const signOutSuccessful = responseData => {
  successMessage('You have successfully logged out!')
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
