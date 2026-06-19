import test from 'node:test'
import assert from 'node:assert/strict'
import types from 'creditcards-types'
import visa from 'creditcards-types/types/visa'
import Cvc from './cvc.js'

const cvc = Cvc(types)

test('cvc', () => {
  assert.ok(cvc.isValid('123'))
  assert.ok(cvc.isValid('1234'))
  assert.ok(!cvc.isValid('12'))
  assert.ok(!cvc.isValid('12345'))

  assert.ok(cvc.isValid('123', 'Visa'))
  assert.ok(!cvc.isValid('1234', 'Visa'))
  assert.ok(!cvc.isValid('123', 'American Express'))
  assert.ok(cvc.isValid('1234', 'American Express'))

  assert.ok(!cvc.isValid(123))

  const visaCvc = Cvc([visa])

  assert.ok(visaCvc.isValid('123'))
  assert.ok(!visaCvc.isValid('1234'), 'no type matches length')
  assert.throws(function () {
    visaCvc.isValid('1234', 'American Express')
  }, /no type found/i)
})
