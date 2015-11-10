'use strict'

var test = require('tape')
var cvc = require('../').cvc

test('cvc', function (t) {
  t.ok(cvc.isValid('123'))
  t.ok(cvc.isValid(123))
  t.ok(cvc.isValid('1234'))
  t.ok(cvc.isValid(1234))
  t.notOk(cvc.isValid('12'))
  t.notOk(cvc.isValid(12))
  t.notOk(cvc.isValid('12345'))
  t.notOk(cvc.isValid(12345))

  t.ok(cvc.isValid('123', 'visa'))
  t.ok(cvc.isValid(123, 'visa'))
  t.notOk(cvc.isValid('1234', 'visa'))
  t.notOk(cvc.isValid(1234, 'visa'))
  t.notOk(cvc.isValid('123', 'American Express'))
  t.notOk(cvc.isValid(123, 'American Express'))
  t.ok(cvc.isValid('1234', 'americanExpress'))
  t.ok(cvc.isValid(1234, 'americanExpress'))

  t.end()
})
