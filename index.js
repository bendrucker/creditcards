'use strict'

var types = require('creditcards-types')

module.exports = {
  card: require('./card')(types),
  cvc: require('./cvc')(types),
  expiration: require('./expiration')
}
