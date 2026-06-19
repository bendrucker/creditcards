import test from 'node:test'
import assert from 'node:assert/strict'
import types from 'creditcards-types'
import visa from 'creditcards-types/types/visa'
import Card from './card.js'

const card = Card(types)

test('card', async (t) => {
  await t.test('parse', () => {
    assert.equal(card.parse('4242-4242-4242-4242'), '4242424242424242')
    assert.equal(card.parse('4242-4242-4242-4242'), '4242424242424242')
    assert.equal(card.parse(0), '')
    assert.equal(card.parse(undefined), '')
  })

  await t.test('format', () => {
    assert.equal(card.format('5'), '5', 'no match')
    assert.equal(card.format('4242424242424242'), '4242 4242 4242 4242', 'visa')
    assert.equal(card.format('4242424242424242', '-'), '4242-4242-4242-4242', 'separator')
  })

  await t.test('type', () => {
    assert.equal(card.type('4242424242424242'), 'Visa', 'visa')
    assert.equal(card.type('5555555555554444'), 'Mastercard', 'mc')
    assert.equal(card.type('378282246310005'), 'American Express', 'amex')

    assert.equal(card.type('42', true), 'Visa', 'visa eager')
    assert.equal(card.type('55', true), 'Mastercard', 'mc eager')
    assert.equal(card.type('37', true), 'American Express', 'amex eager')

    assert.ok(!card.type('123'), 'no match')
  })

  await t.test('isValid', () => {
    assert.ok(card.isValid('4242424242424242'))
    assert.ok(card.isValid('5555555555554444'))
    assert.ok(card.isValid('378282246310005'))
    assert.ok(!card.isValid('42'))

    assert.ok(card.isValid('4242424242424242', 'Visa'), 'visa')
    assert.ok(!card.isValid('4242424242424242', 'American Express'), 'amex invalid')
    assert.ok(!card.isValid('4242424242424242', 'Mastercard'), 'mc invalid')
    assert.ok(card.isValid('378282246310005', 'American Express'), 'amex valid')

    const unionPay = '6240008631401142'
    assert.ok(!card.luhn(unionPay))
    assert.ok(card.isValid(unionPay, 'UnionPay'), 'union pay skips luhn')
  })

  await t.test('custom types', () => {
    const customCard = Card([visa])
    assert.ok(customCard.isValid('4242424242424242'), 'visa valid')
    assert.ok(!customCard.isValid('5555555555554444'), 'mc invalid')
  })
})
