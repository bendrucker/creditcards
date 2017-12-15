'use strict'

var Types = require('./types')
var cvcRegex = /^\d{3,4}$/

module.exports = Cvc(Types.defaults)
module.exports.withTypes = Cvc

function Cvc (data) {
  var types = Types(data)

  return {
    isValid: cvcIsValid
  }

  function cvcIsValid (cvc, type) {
    if (typeof cvc !== 'string') return false
    if (!cvcRegex.test(cvc)) return false
    if (!type) return true
    return types.get(type).cvcLength === cvc.length
  }
}

