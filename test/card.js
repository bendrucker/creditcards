'use strict';

var card   = require('../src/card');
var expect = require('chai').expect;

describe('card', function () {

  describe('#parse', function () {

    it('parses a card number', function () {
      expect(card.parse('4242-4242-4242-4242')).to.equal('4242424242424242');
      expect(card.parse('4242 4242 4242 4242')).to.equal('4242424242424242');
    });

    it('returns an empty string for a non-string value', function () {
      expect(card.parse(0)).to.equal('');
      expect(card.parse(undefined)).to.equal('');
    });

  });

  describe('#type', function () {

    it('returns the card name', function () {
      expect(card.type('4242424242424242')).to.equal('visa');
      expect(card.type('5555555555554444')).to.equal('masterCard');
      expect(card.type('378282246310005')).to.equal('americanExpress');
      expect(card.type('6011111111111117')).to.equal('discover');
      expect(card.type('30569309025904')).to.equal('dinersClub');
      expect(card.type('3530111333300000')).to.equal('jcb');
    });

    it('returns undefined with no match', function () {
      expect(card.type('123')).to.be.undefined;
    });

  });

  describe('#luhn', function () {

    it('returns true for a valid number', function () {
      expect(card.luhn('4242424242424242')).to.be.true;
    });

    it('returns false for an invalid number', function () {
      expect(card.luhn('4242424242424241')).to.be.false;
    });

    it('returns false for a falsy input', function () {
      expect(card.luhn()).to.be.false;
    });

  });

});
