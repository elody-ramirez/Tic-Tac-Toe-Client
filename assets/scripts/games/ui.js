'use strict'

const store = require('../store')
const gameLogic = require('./gameLogic')

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
const clearGame = responseData => {
  store.board = ['', '', '', '', '', '', '', '', '']
  store.moveCount = 0
  store.player = 'X'
  store.game = responseData.game
  store.gameOver = false
  store.tie = false
  store.moveConfirm = false
}

const newGameSuccessful = responseData => {
  successMessage('You started a new game! X goes First')
  $('.container').removeClass('hide')
  $('#back').removeClass('hide')
  $('#versus-cpu').addClass('hide')
  $('.box').text('')
  $('.game-page-header').css('display', 'none')
  // Clears board, sets everything to fresh start, record game id
  clearGame(responseData)
  clearMessaging()
  store.versusCpu = false
}

const newGameFailure = () => {
  failureMessage('You were unable to start a new game!')
  clearMessaging()
}

const makeMoveSuccessful = (currentBox, play) => {
  $(currentBox).text(play)
  // checks to see if the game is over and it wasnt a tie
  if (store.gameOver && !store.tie) {
    successMessage(`${store.prevPlayer} just WON!`)
    // checks to see if the game was a tie, if a tie game over will always be
    // true so I did not include it in the if statement
  } else if (store.tie) {
    successMessage(`The Game eneded in a tie. Play Again!`)
    // if no one has won and the game hasn't ended in a tie, let the user know
    // who is next
  } else {
    successMessage(`${store.player} goes now`)
  }
}

const makeMoveFailure = responseData => {
  failureMessage("You can't make this move")
  clearMessaging()
}

const indexGamesSuccessful = responseData => {
  const games = responseData.games
  let wins = 0
  for (let i = 0; i < games.length; i++) {
    if (gameLogic.checkWin(games[i].cells, 'X')) {
      wins++
    }
  }
  successMessage(`You have won ${wins} games out of the ${games.length} you played`)
  clearMessaging()
}

const indexGamesFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

const back = responseData => {
  $('.game-page-header').css('display', 'flex')
  $('.container').addClass('hide')
  $('#back').addClass('hide')
  $('#versus-cpu').removeClass('hide')
  $('#new-game').removeClass('hide')
}

// const hoverIn = box => {
//   $(box).text(store.player)
// }
//
// const hoverOut = box => {
//   if (!store.moveConfirm) {
//     $(box).text('')
//   }
// }

const illegalMove = responseData => {
  failureMessage('This box was already filled. Please select another box')
  clearMessaging()
}

const gameOver = responseData => {
  failureMessage('The game is over. Please start a new game to continue playing')
}

const versusCpuSuccessful = responseData => {
  successMessage('You started a new game! You go First')
  $('.container').removeClass('hide')
  $('#back').removeClass('hide')
  $('#new-game').addClass('hide')
  $('.box').text('')
  $('.game-page-header').css('display', 'none')
  // Clears board, sets everything to fresh start, record game id
  clearGame(responseData)
  clearMessaging()
  store.versusCpu = true
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  makeMoveSuccessful,
  makeMoveFailure,
  indexGamesSuccessful,
  indexGamesFailure,
  illegalMove,
  gameOver,
  back,
  versusCpuSuccessful
  // hoverIn,
  // hoverOut
}
