import test from 'node:test'
import assert from 'node:assert/strict'
import * as expiration from './expiration.js'

test('expiration', async (t) => {
  assert.ok(expiration.isPast(
    new Date().getMonth(),
    new Date().getFullYear()
  ))
  assert.ok(!expiration.isPast(
    new Date().getMonth() + 1,
    new Date().getFullYear()
  ))

  await t.test('month', () => {
    const month = expiration.month
    assert.equal(month.parse('12'), 12)
  })

  await t.test('year', () => {
    const year = expiration.year

    assert.equal(year.format('2012'), '2012')
    assert.equal(year.format(2012), '2012')
    assert.equal(year.format(2014, true), '14')
    assert.equal(year.format(2000, true), '00')

    assert.ok(year.isValid(2015))
    assert.ok(!year.isValid('2015'))
    assert.ok(!year.isValid(2015.5))

    assert.ok(!year.isPast(new Date().getFullYear()))
    assert.ok(!year.isPast(2100))
    assert.ok(year.isPast(2000))
  })
})
