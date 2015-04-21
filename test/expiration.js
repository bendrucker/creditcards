'use strict'

/*global describe,it*/

var expect = require('chai').expect
var expiration = require('../src/expiration')

describe('expiration', function () {
  describe('#isPast', function () {
    it('checks whether the date is in the past', function () {
      expect(expiration.isPast(
        new Date().getMonth(),
        new Date().getFullYear()
      ))
      .to.equal(true)
      expect(expiration.isPast(
        new Date().getMonth() + 1,
        new Date().getFullYear()
      ))
      .to.equal(false)
    })
  })

  describe('month', function () {
    var month = expiration.month

    describe('#parse', function () {
      it('casts valid values to numbers', function () {
        expect(month.parse('12')).to.equal(12)
        expect(month.parse(12)).to.equal(12)
        expect(month.parse('08')).to.equal(8)
        expect(month.parse(0)).to.equal(undefined)
      })
    })

    describe('#isValid', function () {
      it('is true for month numbers', function () {
        expect(month.isValid(1)).to.equal(true)
        expect(month.isValid(2)).to.equal(true)
        expect(month.isValid(3)).to.equal(true)
        expect(month.isValid(4)).to.equal(true)
        expect(month.isValid(5)).to.equal(true)
        expect(month.isValid(6)).to.equal(true)
        expect(month.isValid(7)).to.equal(true)
        expect(month.isValid(8)).to.equal(true)
        expect(month.isValid(9)).to.equal(true)
        expect(month.isValid(10)).to.equal(true)
        expect(month.isValid(11)).to.equal(true)
        expect(month.isValid(12)).to.equal(true)
      })

      it('is false for numeric strings', function () {
        expect(month.isValid('12')).to.equal(false)
      })

      it('is false for numbers outside 1-12', function () {
        expect(month.isValid(0)).to.equal(false)
        expect(month.isValid(13)).to.equal(false)
        expect(month.isValid('13')).to.equal(false)
      })

      it('is false for falsy values', function () {
        expect(month.isValid()).to.equal(false)
        expect(month.isValid('')).to.equal(false)
      })

    })
  })

  describe('year', function () {
    var year = expiration.year

    describe('#parse', function () {
      it('casts values to numbers', function () {
        expect(year.parse('12')).to.equal(12)
        expect(year.parse(12)).to.equal(12)
        expect(year.parse('08')).to.equal(8)
        expect(year.parse(0)).to.equal(undefined)
        expect(year.parse(0, true)).to.equal(2000)
      })

      it('can pad short dates', function () {
        expect(year.parse(12, true)).to.equal(2012)
        expect(year.parse('12', true)).to.equal(2012)
        expect(year.parse(5, true)).to.equal(2005)
        expect(year.parse('5', true)).to.equal(2005)
        expect(year.parse(10, true)).to.equal(2010)
      })
    })

    describe('#format', function () {
      it('casts numbers to strings', function () {
        expect(year.format('2012')).to.equal('2012')
        expect(year.format(2012)).to.equal('2012')
      })

      it('can strip long dates', function () {
        expect(year.format(2014, true)).to.equal('14')
        expect(year.format(2000, true)).to.equal('00')
      })
    })

    describe('#isValid', function () {
      it('is true for positive numbers', function () {
        expect(year.isValid(2000)).to.equal(true)
        expect(year.isValid(2014)).to.equal(true)
      })

      it('is falsy for non number values', function () {
        expect(year.isValid('2014')).to.equal(false)
      })
    })

    describe('#isPast', function () {
      it('is false for this year', function () {
        var thisYear = new Date().getYear() + 1900
        expect(year.isPast(thisYear)).to.equal(false)
      })

      it('is false for future years', function () {
        expect(year.isPast(2100)).to.equal(false)
      })

      it('is true for past years', function () {
        expect(year.isPast(2000)).to.equal(true)
      })
    })
  })
})
