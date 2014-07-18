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

  describe('year', function () {

    var year = expiration.year;

    describe('#parse', function () {

      it('casts values to numbers', function () {
        expect(year.parse('12')).to.equal(12);
        expect(year.parse(12)).to.equal(12);
        expect(year.parse('08')).to.equal(8);
      });

      it('can pad short dates', function () {
        expect(year.parse(12, true)).to.equal(2012);
        expect(year.parse('12', true)).to.equal(2012);
        expect(year.parse(5, true)).to.equal(2005);
        expect(year.parse('5', true)).to.equal(2005);
      });

    });

    describe('#isValid', function () {

      it('is true for positive numbers', function () {
        expect(year.isValid(2000)).to.be.true;
        expect(year.isValid(2014)).to.be.true;
      });

      it('is falsy for non number values', function () {
        expect(year.isValid('2014')).to.be.false;
      });

    });

    describe('#isCurrent', function () {

      it('checks for the current year', function () {
        var thisYear = new Date().getYear() + 1900;
        expect(year.isCurrent(thisYear)).to.be.true;
        expect(year.isCurrent(2013)).to.be.false;
      });

    })

    describe('#isFuture', function () {

      it('is true for this year', function () {
        var thisYear = new Date().getYear() + 1900;
        expect(year.isFuture(thisYear)).to.be.true;
      });

      it('is true for future years', function () {
        expect(year.isFuture(2100)).to.be.true;
      });

      it('is false for past years', function () {
        expect(year.isFuture(2000)).to.be.false;
      });

    });

  });

});
