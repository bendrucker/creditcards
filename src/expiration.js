'use strict'

var isValidMonth = require('is-valid-month')

exports.isPast = function (month, year) {
  return Date.now() >= new Date(year, month)
}

exports.month = {
  parse: function parseExpMonth (month) {
    return ~~month || undefined
  },
  isValid: isValidMonth
}

var base = new Date().getFullYear().toString().substr(0, 2)

function twoDigit (number) {
  return number >= 10 ? number : '0' + number
}

exports.year = {
  parse: function parseExpYear (year, pad) {
    year = ~~year
    if (!pad) return year || void 0
    return ~~(base + twoDigit(year))
  },
  format: function formatExpYear (year, strip) {
    year = year.toString()
    return strip ? year.substr(2, 4) : year
  },
  isValid: function isExpYearValid (year) {
    if (typeof year !== 'number') return false
    return year > 0
  },
  isPast: function isExpYearPast (year) {
    return new Date().getFullYear() > year
  }
}
