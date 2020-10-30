# creditcards [![tests](https://github.com/bendrucker/creditcards/workflows/tests/badge.svg)](https://github.com/bendrucker/creditcards/actions?query=workflow%3Atests)

> Parse, format, and validate credit card data.

## Installing

```sh
npm install --save creditcards
``` 

## API

creditcards exports:

* `card`
* `cvc`
* `expiration`
* `withTypes` (constructs a new copy of the module with custom types)

You can also require modules individually. This is particularly useful if you wish to pass in custom types. `card` and `cvc` each export a function that accepts an array of card types [(see `creditcards-types`)](https://github.com/bendrucker/creditcards-types). `expiration` returns an object.

```js
const Card = require('creditcards/card')
const card = Card([visa])
card.isValid('4242424242424242')
// => true

const expiration = require('creditcards/expiration')
expiration.isPast(10, 2010)
// => true
```

#### `withTypes(types)` -> `object`

Returns a new copy of the main module with custom types.

##### types

*Required*  
Type: `array`

An array of types from [creditcards-types](https://github.com/bendrucker/creditcards-types).

---

### `card`

#### `card.parse(number)` -> `string`

Remove all non-numeric characters from a card number, including punctuation and spacing. 

##### number

*Required*  
Type: `string`

---

#### `card.format(number, [separator])` -> `string`

Formats a card number as printed on the physical card

##### number

*Required*  
Type: `string`

##### separator

Type: `string`
Default: `' '` (space)

```js
card.format('4242424242424242') === '4242 4242 4242 4242' // Visa
card.format('378282246310005') === '3782 822463 10005' // American Express
```

---

#### `card.type(number, [eager])` -> `string`

Returns the matched card type, or `undefined` if there was no match. For a full list of supported card types, see [`creditcards-types`](https://github.com/bendrucker/creditcards-types#card-types).

##### number

*Required*  
Type: `string`

The card number. Punctuation is not allowed. Sanitize input through `card.parse` first if needed.

##### eager

Type: `boolean`  
Default: `false`

When `true`, the card type will be eagerly matched using a more permissive pattern that can match partial card numbers.

---

#### `card.luhn(number)` -> `Boolean`

Checks the card number's validity using the [Luhn algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm).

##### number

*Required*  
Type: `string`

#### `card.isValid(number, [type])` -> `boolean`

##### number

*Required*  
Type: `string`

##### type

Type: `string`  
Default: `undefined`

Detect if a card is a valid card of the specified type. If no type is provided, the card will be valid if any type is matched.

### `cvc`

#### `cvc.isValid(cvc, [type])` -> `boolean`

##### cvc

*Required*  
Type: `string`

##### type

Type: `string`  
Default: `undefined`

Detect if a CVC is valid card for the specified type. 

### `expiration`

#### `isPast(month, year)` -> `boolean`

##### month

*Required*  
Type: `number`

##### year

*Required*  
Type: `number`

---

#### `expiration.month.parse(month)` -> `number`

Casts the provide value a number. All of the following will be `5` after parsing: 
* `5`
* `'05'`
* `'5'`

##### month

*Required*  
Type: `string` / `number`

---

#### `expiration.month.isValid(month)` -> `Boolean`

##### month

*Required*  
Type: `number`

---

#### `expiration.year.parse(year, [expand])` -> `number`

All of the following are equivalent: 
* `expiration.year.parse(2014)`
* `expiration.year.parse('2014')`
* `expiration.year.parse('14', true)`
* `expiration.year.parse(14, true)`

##### year

*Required*  
Type: `string` / `number`

##### expand

Type: `boolean`  
Default: `false`

If `true`, the year is assumed to be a 1 or 2 digit number and is expanded to its full value.

---

#### `expiration.year.format(year, [strip])` -> `string`

##### year

*Required*  
Type: `number`

##### strip

Type: `boolean`  
Default: `false`

If `true`, year is assumed to be a four digit number and will be converted to a two digit number. 

* `expiration.year.format(2014) === '2014'`
* `expiration.year.format(2014, true) === '14'`

---

#### `expiration.year.isValid(year)` -> `Boolean`

##### year

*Required*  
Type: `number`

---

#### `expiration.year.isPast(year)` -> `boolean`

##### year

*Required*  
Type: `number`

## License

MIT © [Ben Drucker](http://bendrucker.me)
