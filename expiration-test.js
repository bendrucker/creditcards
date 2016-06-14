'use strict'

var test = require('tape')
var expiration = require('./expiration')

test('expiration', function (t) {
  t.ok(expiration.isPast(
    new Date().getMonth(),
    new Date().getFullYear()
  ))
  t.notOk(expiration.isPast(
    new Date().getMonth() + 1,
    new Date().getFullYear()
  ))

  t.test('month', function (t) {
    var month = expiration.month
    t.equal(month.parse('12'), 12)
    t.end()
  })

  t.test('year', function (t) {
    var year = expiration.year

    t.equal(year.format('2012'), '2012')
    t.equal(year.format(2012), '2012')
    t.equal(year.format(2014, true), '14')
    t.equal(year.format(2000, true), '00')

    t.ok(year.isValid(2015))
    t.notOk(year.isValid('2015'))
    t.notOk(year.isValid(2015.5))

    t.notOk(year.isPast(new Date().getFullYear()))
    t.notOk(year.isPast(), 2100)
    t.ok(year.isPast(2000))

    t.end()
  })

  t.end()
})
