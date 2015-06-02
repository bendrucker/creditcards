'use strict'

var camel = require('camel-case')
var luhn = require('fast-luhn')
var types = require('creditcards-types').types

exports.types = types

exports.parse = function parseCard (number) {
  if (typeof number !== 'string') return ''
  return number.replace(/[^\d]/g, '')
}

exports.format = function formatCard (number, separator) {
  var type = getType(number, true)
  if (!type) return number
  return type.group(number).join(separator || ' ')
}

exports.type = function cardType (number, eager) {
  var type = getType(number, eager)
  return type ? type.name : undefined
}

exports.luhn = luhn

exports.isValid = function isCardValid (number, type) {
  if (type) {
    type = types[camel(type)]
  } else {
    type = getType(number)
  }
  if (!type) return false
  return (!type.luhn || luhn(number)) && type.test(number)
}

function getType (number, eager) {
  for (var typeName in types) {
    var type = types[typeName]
    if (type.test(number, eager)) return types[typeName]
  }
}
