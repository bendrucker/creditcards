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

});
