'use strict'

const config = require('../config.js')
const store = require('../store')

const newGame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame
}
