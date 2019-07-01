'use strict'

const config = require('../config2')
const store = require('../store')

const joinGame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'PATCH',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  joinGame
}
