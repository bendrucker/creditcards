'use strict'

var types = require('creditcards-types').types
var camel = require('camel-case')

exports.types = types
exports.get = function getTypeByName (name) {
  return types[camel(name)]
}
