'use strict'

var card = exports.card = require('./src/card')
var cvc = exports.cvc = require('./src/cvc')
var expiration = exports.expiration = require('./src/expiration')

exports.validate = function (cardObj) {
  return {
    card: {
      type: card.type(cardObj.number),
      number: cardObj.number,
      expirationMonth: cardObj.expirationMonth,
      expirationYear: cardObj.expirationYear,
      cvc: cardObj.cvc
    },
    validCardNumber: card.luhn(cardObj.number),
    validExpirationMonth: expiration.month.isValid(cardObj.expirationMonth),
    validExpirationYear: expiration.year.isValid(cardObj.expirationYear),
    validCvc: cvc.isValid(cardObj.cvc),
    expired: expiration.isPast(cardObj.expirationMonth, cardObj.expirationYear)
  }
}
