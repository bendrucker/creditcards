import test from 'node:test'
import assert from 'node:assert/strict'
import amex from 'creditcards-types/types/american-express'
import { card, cvc, expiration, withTypes } from './index.js'

test('main', () => {
  assert.ok(card.isValid('4242424242424242'))
  assert.ok(cvc.isValid('123'))
  assert.ok(expiration.isPast(10, 2010))

  assert.ok(!withTypes([amex]).card.isValid('4242424242424242'))
})
