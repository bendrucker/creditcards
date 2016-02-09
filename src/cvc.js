'use strict'

var types = require('./types')
var cvcRegex = /^\d{3,4}$/

module.exports = {
  isValid: cvcIsValid
}

function cvcIsValid (cvc, type) {
  if (typeof cvc !== 'string') return false
  if (!cvcRegex.test(cvc)) return false
  if (!type) return true
  return types.get(type).cvcLength === cvc.length
}
