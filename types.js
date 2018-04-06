'use strict'

var arrayFind = require('array-find')
var defaults = require('creditcards-types')

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  var map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: find,
    some: types.some.bind(types),
    get: get
  }

  function find (test) {
    return arrayFind(types, test)
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}
