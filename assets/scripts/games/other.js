'use strict'

const store = require('../store')

const checkWin = function (array, letter) {
  if (array[0] === letter && array[1] === letter && array[2] === letter) {
    return true
  } else if (array[3] === letter && array[4] === letter && array[5] === letter) {
    return true
  } else if (array[6] === letter && array[7] === letter && array[8] === letter) {
    return true
  } else if (array[0] === letter && array[3] === letter && array[6] === letter) {
    return true
  } else if (array[1] === letter && array[4] === letter && array[7] === letter) {
    return true
  } else if (array[2] === letter && array[5] === letter && array[8] === letter) {
    return true
  } else if (array[0] === letter && array[4] === letter && array[8] === letter) {
    return true
  } else if (array[2] === letter && array[4] === letter && array[6] === letter) {
    return true
  } else {
    return false
  }
}

const markBoard = () => {
  let mark = ''
  if (store.player === 'X') {
    mark = 'X'
    store.player = 'O'
    store.prevPlayer = 'X'
  } else {
    mark = 'O'
    store.player = 'X'
    store.prevPlayer = 'O'
  }
  return mark
}

const markAndUpdate = (position) => {
  const play = markBoard()
  store.board[position] = play
  store.moveCount++
  // checks if someone has won or the board is full
  if (checkWin(store.board, play) || store.moveCount === 9) {
    store.gameOver = true
  }
  // checks if no one has won and the game is full, which means its a tie
  if (!checkWin(store.board, play) && store.moveCount === 9) {
    store.tie = true
  }
  return play
}
module.exports = {
  checkWin,
  markBoard,
  markAndUpdate
}
