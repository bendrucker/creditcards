'use strict'

const types = require('creditcards-types')
const Card = require('./card')
const Cvc = require('./cvc')
const expiration = require('./expiration')

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}
