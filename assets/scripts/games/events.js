'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.newGame(formData)
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailure)
}

const onMakeMove = event => {
  console.log('success')
  const box = event.target
  ui.makeMoveSuccessful(box)
}

module.exports = {
  onNewGame,
  onMakeMove
}
