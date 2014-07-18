'use strict';

var expect     = require('chai').expect;
var expiration = require('../src/expiration');

'use strict';

describe('expiration', function () {

  describe('month', function () {

    var month = expiration.month;

    describe('#parse', function () {

      it('casts values to numbers', function () {
        expect(month.parse('12')).to.equal(12);
        expect(month.parse(12)).to.equal(12);
        expect(month.parse('08')).to.equal(8);
      });

    });

    describe('#isValid', function () {

      it('is true for month numbers or numeric strings', function () {
        expect(month.isValid(1)).to.be.true;
        expect(month.isValid(2)).to.be.true;
        expect(month.isValid(3)).to.be.true;
        expect(month.isValid(4)).to.be.true;
        expect(month.isValid(5)).to.be.true;
        expect(month.isValid(6)).to.be.true;
        expect(month.isValid(7)).to.be.true;
        expect(month.isValid('08')).to.be.true;
        expect(month.isValid(9)).to.be.true;
        expect(month.isValid(10)).to.be.true;
        expect(month.isValid(11)).to.be.true;
        expect(month.isValid(12)).to.be.true;
      });

      it('is false for numbers outside 1-12', function () {
        expect(month.isValid(0)).to.be.false;
        expect(month.isValid(13)).to.be.false;
        expect(month.isValid('13')).to.be.false;
      });

      it('is false for falsy values', function () {
        expect(month.isValid()).to.be.false;
        expect(month.isValid('')).to.be.false;
      });

    });

  });

});
