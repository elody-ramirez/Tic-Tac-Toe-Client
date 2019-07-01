'use strict'

// const store = require('../store')
// const gameLogic = require('./gameLogic')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onJoinGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.joinGame(formData)
    .then(ui.joinGameSuccessful)
    .catch(ui.joinGameFailure)
}

module.exports = {
  onJoinGame
}
