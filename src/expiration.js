'use strict'

var isValidMonth = require('is-valid-month')
var parseIntStrict = require('parse-int')
var parseYear = require('parse-year')

exports.isPast = function (month, year) {
  return Date.now() >= new Date(year, month)
}

exports.month = {
  parse: function parseMonth (month) {
    return parseIntStrict(month)
  },
  isValid: isValidMonth
}

exports.year = {
  parse: parseYear,
  format: function formatExpYear (year, strip) {
    year = year.toString()
    return strip ? year.substr(2, 4) : year
  },
  isValid: function isExpYearValid (year) {
    if (typeof year !== 'number') return false
    year = parseIntStrict(year)
    return year > 0
  },
  isPast: function isExpYearPast (year) {
    return new Date().getFullYear() > year
  }
}
