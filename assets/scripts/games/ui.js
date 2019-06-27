'use strict'

const store = require('../store')
const other = require('./other')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}
const clearGame = responseData => {
  store.board = ['', '', '', '', '', '', '', '', '']
  store.moveCount = 0
  store.player = 'X'
  store.game = responseData.game
  store.gameOver = false
  store.tie = false
}

const newGameSuccessful = responseData => {
  successMessage('You started a new game! X goes First')
  $('.container').removeClass('hide')
  $('.box').text('')
  // Clears board, sets everything to fresh start, record game id
  clearGame(responseData)
}

const newGameFailure = () => {
  failureMessage('You were unable to start a new game!')
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
}

const indexGamesSuccessful = responseData => {
  const games = responseData.games
  let wins = 0
  for (let i = 0; i < games.length; i++) {
    if (other.checkWin(games[i].cells, 'X')) {
      wins++
    }
  }
  successMessage(`You have won ${wins} games out of the ${games.length} you played`)
}

const indexGamesFailure = responseData => {
  failureMessage('This action was not successul')
}

// const hoverIn = box => {
//   $(box).text(store.player)
// }
//
// const hoverOut = box => {
//   $(box).text('')
// }

const illegalMove = responseData => {
  failureMessage('This box was already filled. Please select another')
}

const gameOver = responseData => {
  failureMessage('The game is over. Please start a new game to continue playing')
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  makeMoveSuccessful,
  makeMoveFailure,
  indexGamesSuccessful,
  indexGamesFailure,
  illegalMove,
  gameOver
  // hoverIn,
  // hoverOut
}
