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

const newGameSuccessful = responseData => {
  successMessage('You started a new game! X goes First')
  $('.container').removeClass('hide')
  $('.box').text('')
  store.board = ['', '', '', '', '', '', '', '', '']
  store.moveCount = 0
  store.player = 'X'
  store.game = responseData.game
  store.gameOver = false
  store.tie = false
}

const newGameFailure = () => {
  failureMessage('You were unable to start a new game!')
}

const makeMoveSuccessful = (currentBox, play) => {
  $(currentBox).text(play)
  if (store.gameOver && !store.tie) {
    successMessage(`${store.prevPlayer} just WON!`)
  } else if (store.tie) {
    successMessage(`The Game eneded in a tie. Play Again!`)
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
  console.log(responseData)
  successMessage(`You have won ${wins} games out of the ${games.length} you played`)
}

const indexGamesFailure = responseData => {
  failureMessage('This action was not successul')
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  makeMoveSuccessful,
  makeMoveFailure,
  indexGamesSuccessful,
  indexGamesFailure
}
