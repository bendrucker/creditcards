'use strict'

var types = require('creditcards-types')
var Card = require('./card')
var Cvc = require('./cvc')
var expiration = require('./expiration')

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}
