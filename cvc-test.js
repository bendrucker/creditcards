'use strict'

var test = require('tape')
var cvc = require('./cvc')
var visa = require('creditcards-types/types/visa')

test('cvc', function (t) {
  t.ok(cvc.isValid('123'))
  t.ok(cvc.isValid('1234'))
  t.notOk(cvc.isValid('12'))
  t.notOk(cvc.isValid('12345'))

  t.ok(cvc.isValid('123', 'Visa'))
  t.notOk(cvc.isValid('1234', 'Visa'))
  t.notOk(cvc.isValid('123', 'American Express'))
  t.ok(cvc.isValid('1234', 'American Express'))

  t.notOk(cvc.isValid(123))

  var visaCvc = cvc.withTypes([visa])

  t.ok(visaCvc.isValid('123'))
  t.throws(function () {
    visaCvc.isValid('1234', 'American Express')
  }, /no type found/i)

  t.end()
})
