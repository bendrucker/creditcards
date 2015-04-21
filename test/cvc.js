'use strict'

/*global describe,it*/

var cvc = require('../src/cvc')
var expect = require('chai').expect

describe('cvc', function () {
  describe('#isValid', function () {
    it('is true for a 3-4 char numeric string with no type', function () {
      expect(cvc.isValid('123')).to.equal(true)
      expect(cvc.isValid('1234')).to.equal(true)
      expect(cvc.isValid('12')).to.equal(false)
      expect(cvc.isValid('12345')).to.equal(false)
    })

    it('matches the cvc length against a provided type', function () {
      expect(cvc.isValid('123', 'visa')).to.equal(true)
      expect(cvc.isValid('1234', 'visa')).to.equal(false)
      expect(cvc.isValid('123', 'americanExpress')).to.equal(false)
      expect(cvc.isValid('1234', 'americanExpress')).to.equal(true)
    })

    it('can use the proper name for type', function () {
      expect(cvc.isValid('123', 'Visa')).to.equal(true)
      expect(cvc.isValid('1234', 'American Express')).to.equal(true)
    })

    it('is false for a non-string', function () {
      expect(cvc.isValid(123)).to.equal(false)
    })

  })

})
