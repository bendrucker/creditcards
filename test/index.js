'use strict'

/*global describe,it*/

var expect = require('chai').expect
var creditcards = require('../')

describe('creditcards', function () {
  it('exposes the card, cvc, and expiration modules', function () {
    expect(creditcards.card).to.equal(require('../src/card'))
    expect(creditcards.cvc).to.equal(require('../src/cvc'))
    expect(creditcards.expiration).to.equal(require('../src/expiration'))
  })

  describe('#validate', function () {
    it('parses and validates a card object', function () {
      expect(creditcards.validate({
        number: '4242424242424242',
        expirationMonth: 10,
        expirationYear: 2024,
        cvc: '123'
      }))
      .to.deep.equal({
        card: {
          type: 'Visa',
          number: '4242424242424242',
          expirationMonth: 10,
          expirationYear: 2024,
          cvc: '123'
        },
        validCardNumber: true,
        validExpirationMonth: true,
        validExpirationYear: true,
        validCvc: true,
        expired: false
      })
    })
  })
})
