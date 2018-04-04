'use strict'

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
    some: some,
    get: get
  }

  function find (test) {
    return types.reduce(
      function (previous, current) {
        if (previous !== null) {
          return previous
        }

        if (test(current)) {
          return current
        } else {
          return null
        }
      },
      null
    )
  }

  function some (test) {
    return types.reduce(
      function (previousValue, type) {
        return test(type) || previousValue
      },
      false
    )
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}
