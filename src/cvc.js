'use strict'

var types = require('./types')
var cvcRegex = /^\d{3,4}$/

exports.isValid = function cvcIsValid (cvc, type) {
  if (typeof cvc !== 'string' && typeof cvc !== 'number') return false
  var cvcStr = cvc + ''
  if (!cvcRegex.test(cvcStr)) return false
  if (!type) return true
  return types.get(type).cvcLength === cvcStr.length
}
