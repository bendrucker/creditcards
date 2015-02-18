creditcards [![Build Status](https://travis-ci.org/bendrucker/creditcards.svg?branch=master)](https://travis-ci.org/bendrucker/angular-credit-cards) [![Code Climate](https://codeclimate.com/github/bendrucker/creditcards/badges/gpa.svg)](https://codeclimate.com/github/bendrucker/creditcards) [![Test Coverage](https://codeclimate.com/github/bendrucker/creditcards/badges/coverage.svg)](https://codeclimate.com/github/bendrucker/creditcards) [![NPM version](https://badge.fury.io/js/creditcards.svg)](http://badge.fury.io/js/creditcards)
============

Utility methods for formatting and validating credit cards. With a minimal footprint and a flexible API, it's suitable for both Node and the browser.

## Install
```bash
# npm
$ npm install creditcards
# bower
$ bower install creditcards
``` 

## API

#### `validate(card)`

* Arguments:
  * `card` (object)
    * `number` (string)
    * `expirationMonth` (number)
    * `expirationYear` (number)
    * `cvc` (string)
* Returns:
  * object
    * `card`
      * `type` (string) - the [type](#cardtypenumber---string) of the provided card
      * `number` (string)
      * `expirationMonth` (number)
      * `expirationYear` (number)
      * `cvc` (string)
    * `validCardNumber` (boolean)
    * `validExpirationMonth` (boolean)
    * `validExpirationYear` (boolean)
    * `validCvc` (boolean)
    * `expired` (boolean) - whether the expiration date has passed

## `card`

#### `card.parse(number)` -> `String`
Removes all non-numeric characters from a card number, including punctuation and spacing. If a non-string is provided, it returns an empty string.

---

#### `card.type(number [, eager])` -> `String`

Returns the matched card type, or `undefined` if there was no match. If `eager` is `true` (it defaults to `false`), `card.type` will match against a partial number. `'42'`, for example, will match `'Visa'` with `eager` set to `true`.

`number` must be a string and may not have spaces or punctuation. Use [`card.parse`](#cardparsenumber---string) to sanitize user input before passing a `number` to `card.type`. 

For a full list of supported card types, see [`creditcards-types`](https://github.com/bendrucker/creditcards-types#card-types).

---

#### `card.luhn(number)` -> `Boolean`
Checks the card number's validity using the [Luhn algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm).

#### `card.isValid(number [, type])` -> `Boolean`
Validates the number using `card.luhn` and checks that it matches any [`type`](#cardtypenumber---string) (or a specific `type` if provided). 

## `cvc`

#### `isValid(cvc [, type])` -> `Boolean`
Checks whether a card verification code is a valid 3-4 digit numeric string. If a [`type`](#cardtypenumber---string) is provided, the length will be validated for the card type (4 for American Express, 3 for others).

## `expiration`

#### `isPast(month, year)` -> `Boolean`
Checks whether a given month and year pair (both `Number`) are in the past.

---

### `expiration.month`

#### `expiration.month.parse(month)` -> `Number`
Casts the provided `month` value to a `Number`. All of the following will be `5` after parsing: 
* `5`
* `'05'`
* `'5'`

Returns `undefined` for non-numeric values.

---

#### `expiration.month.isValid(month)` -> `Boolean`
Checks whether the provided month (`Number`) is valid (between 1 and 12).

---

### `expiration.year`

#### `expiration.year.parse(year [, pad])` -> `Number`
Casts the provided year value to  a `Number`. If `pad` is `true`, `year` is assumed to be a two digit number or numeric string. All of the following are equivalent: 
* `expiration.year.parse(2014)`
* `expiration.year.parse('2014')`
* `expiration.year.parse('14', true)`
* `expiration.year.parse(14, true)`

Returns `undefined` for non-numeric values.

---

#### `expiration.year.format(year [, strip])` -> `Number`
Casts the provided year (`Number`) to  a `String`. If `strip` is `true`, `year` is assumed to be a four digit number and will be converted to a two digit number. 
* `expiration.year.format(2014) === '2014'`
* `expiration.year.format(2014, true) === '14'`

---

#### `expiration.year.isValid(year)` -> `Boolean`
Checks whether the provided year (`Number`) is valid (> 0).

---

#### `expiration.year.isPast(year)` -> `Boolean`
Checks whether a given year (`Number`) is in the past.

## Why Another Library?
There are lots of other useful credit card validation and parsing modules. creditcards specifically takes inspiration from [credit-card](https://www.npmjs.org/package/credit-card), but there are [many others](https://www.npmjs.org/search?q=credit%20card), including the popular [jQuery.payment](https://github.com/stripe/jquery.payment). creditcards was specifically designed for browser use for handling payment forms. That means:

1. Browserified, it's only a few kilobytes, even before minification.
2. It provides an API for parsing user inputs.
3. It has no DOM-related code. You can use it in Node and in the browser you get full control over how your card inputs are handled.
4. The card type is optional.

## Clients

* [angular-credit-cards](https://github.com/bendrucker/angular-credit-cards): A set of Angular directives for building credit card forms powered by creditcards

## License

[MIT](LICENSE)
