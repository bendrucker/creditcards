'use strict'

const test = require('tape')
const amex = require('creditcards-types/types/american-express')
const creditcards = require('./')

test('main', function (t) {
  t.ok(creditcards.card.isValid('4242424242424242'))
  t.ok(creditcards.cvc.isValid('123'))
  t.ok(creditcards.expiration.isPast(10, 2010))

  t.notOk(creditcards.withTypes([amex]).card.isValid('4242424242424242'))

  t.end()
})
