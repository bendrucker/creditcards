'use strict'

var test = require('tape')
var Cvc = require('./cvc')
var types = require('creditcards-types')
var visa = require('creditcards-types/types/visa')

var cvc = Cvc(types)

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

  var visaCvc = Cvc([visa])

  t.ok(visaCvc.isValid('123'))
  t.notOk(visaCvc.isValid('1234'), 'no type matches length')
  t.throws(function () {
    visaCvc.isValid('1234', 'American Express')
  }, /no type found/i)

  t.end()
})
