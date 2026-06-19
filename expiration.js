import isValidMonth from 'is-valid-month'
import parseIntStrict from 'parse-int'
import parseYear from 'parse-year'

export function isPast (month, year) {
  return Date.now() >= new Date(year, month)
}

export const month = {
  parse: parseMonth,
  isValid: isValidMonth
}

export const year = {
  parse: parseYear,
  format: formatExpYear,
  isValid: isExpYearValid,
  isPast: isExpYearPast
}

function parseMonth (month) {
  return parseIntStrict(month)
}

function formatExpYear (year, strip) {
  year = year.toString()
  return strip ? year.substr(2, 4) : year
}

function isExpYearValid (year) {
  if (typeof year !== 'number') return false
  year = parseIntStrict(year)
  return year > 0
}

function isExpYearPast (year) {
  return new Date().getFullYear() > year
}
