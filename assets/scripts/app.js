'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onMakeMove)
  // $('.box').on('mouseenter', gameEvents.onHoverIn)
  // $('.box').on('mouseleave', gameEvents.onHoverOut)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#back').on('click', gameEvents.onBack)
})
