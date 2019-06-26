'use strict'

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

module.exports = {
  checkWin
}
