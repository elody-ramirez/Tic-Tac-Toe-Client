'use strict'

const store = require('../store')
// const api = require('./api')

const successMessage = message => {
  $('#first-page-message').text(message)
  $('.message1').show()
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#first-page-message').text(message)
  $('.message1').show()
  $('form').trigger('reset')
}

const clearMessaging = function () {
  setTimeout(function () {
    // $('#message').text('')
    $('.message1').hide()
    $('.messsage2').hide()
  }, 3000)
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully! Now Sign In!')
  clearMessaging()
}

const signUpFailure = () => {
  failureMessage('You failed to sign up! Try Again!')
  clearMessaging()
}

const signInSuccessful = responseData => {
  successMessage('You logged into your account!')
  store.user = responseData.user
  $('.main-page').css('display', 'none')
  $('.game-page-header').css('display', 'flex')
  $('.new').css('display', 'flex')
  clearMessaging()
}

const signInFailure = () => {
  failureMessage("You weren't able to log in!")
  clearMessaging()
}

const changePasswordSuccessful = responseData => {
  successMessage('You successfully changed your password!')
  clearMessaging()
}

const changePasswordFailure = () => {
  failureMessage('You were not able to change your password!')
  clearMessaging()
}

const signOutSuccessful = responseData => {
  successMessage('You have successfully logged out!')
  $('.main-page').css('display', 'flex')
  $('.game-page-header').css('display', 'none')
  $('.new').css('display', 'none')
  $('.container').addClass('hide')
  clearMessaging()
}

const signOutFailure = () => {
  failureMessage('You were unable to log out')
  clearMessaging()
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
