'use strict'

const store = require('../store')
// const gameLogic = require('./gameLogic')

const successMessage = message => {
  $('#second-page-message').text(message)
  $('.message2').show()
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#second-page-message').text(message)
  $('.message2').show()
  $('form').trigger('reset')
}

const clearMessaging = function () {
  setTimeout(function () {
    // $('#message').text('')
    $('.message2').hide()
  }, 3000)
}

const joinGameSuccessful = responseData => {
  // console.log(responseData)
  store.board = responseData.game.cells
  console.log(store.board)
  successMessage('You joined a Multiplayer Game!')
  $('#game-ID').text(`This current game ID is: ${responseData.game.id}`)
  $('.container').removeClass('hide')
  $('#back').removeClass('hide')
  $('#versus-cpu').addClass('hide')
  $('.box').text('')
  $('.game-page-header').css('display', 'none')
  $('#join-game-modal-button').addClass('hide')
  clearMessaging()

  for (let i = 0; i < store.board.length; i++) {
    console.log($(`#${i}`))
    $(`#${i}`).text(store.board[i])
  }
}

const joinGameFailure = () => {
  failureMessage('You were unable to join this game!')
}

module.exports = {
  joinGameSuccessful,
  joinGameFailure
}
