'use strict'

const test = require('tape')
const types = require('creditcards-types')
const Card = require('./card')
const visa = require('creditcards-types/types/visa')

const card = Card(types)

test('card', function (t) {
  t.test('parse', function (t) {
    t.equal(card.parse('4242-4242-4242-4242'), '4242424242424242')
    t.equal(card.parse('4242-4242-4242-4242'), '4242424242424242')
    t.equal(card.parse(0), '')
    t.equal(card.parse(undefined), '')
    t.end()
  })

  t.test('format', function (t) {
    t.equal(card.format('5'), '5', 'no match')
    t.equal(card.format('4242424242424242'), '4242 4242 4242 4242', 'visa')
    t.equal(card.format('4242424242424242', '-'), '4242-4242-4242-4242', 'separator')
    t.end()
  })

  t.test('type', function (t) {
    t.equal(card.type('4242424242424242'), 'Visa', 'visa')
    t.equal(card.type('5555555555554444'), 'Mastercard', 'mc')
    t.equal(card.type('378282246310005'), 'American Express', 'amex')

    t.equal(card.type('42', true), 'Visa', 'visa eager')
    t.equal(card.type('55', true), 'Mastercard', 'mc eager')
    t.equal(card.type('37', true), 'American Express', 'amex eager')

    t.notOk(card.type('123'), 'no match')

    t.end()
  })

  t.test('isValid', function (t) {
    t.ok(card.isValid('4242424242424242'))
    t.ok(card.isValid('5555555555554444'))
    t.ok(card.isValid('378282246310005'))
    t.notOk(card.isValid('42'))

    t.ok(card.isValid('4242424242424242', 'Visa'), 'visa')
    t.notOk(card.isValid('4242424242424242', 'American Express'), 'amex invalid')
    t.notOk(card.isValid('4242424242424242', 'Mastercard', 'mc invalid'))
    t.ok(card.isValid('378282246310005', 'American Express'), 'amex valid')

    const unionPay = '6240008631401142'
    t.notOk(card.luhn(unionPay))
    t.ok(card.isValid(unionPay, 'UnionPay'), 'union pay skips luhn')

    t.end()
  })

  t.test('custom types', function (t) {
    const customCard = Card([visa])
    t.ok(customCard.isValid('4242424242424242'), 'visa valid')
    t.notOk(customCard.isValid('5555555555554444'), 'mc invalid')
    t.end()
  })

  t.end()
})
