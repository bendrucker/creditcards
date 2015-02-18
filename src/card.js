'use strict';

var camel = require('camel-case');

exports.types = require('creditcards-types').types;

exports.parse = function (number) {
  if (typeof number !== 'string') return '';
  return number.replace(/[^\d]/g, '');
};

exports.type = function (number, eager) {
  for (var typeName in exports.types) {
    var type = exports.types[typeName];
    if (type.test(number, eager)) return exports.types[typeName].name;
  }
};

exports.luhn = function (number) {
  if (!number) return false;
  // https://gist.github.com/ShirtlessKirk/2134376
  var len = number.length;
  var mul = 0;
  var prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  var sum = 0;

  while (len--) {
    sum += prodArr[mul][parseInt(number.charAt(len), 10)];
    mul ^= 1;
  }

  return sum % 10 === 0 && sum > 0;
};

exports.isValid = function (number, type) {
  if (!type) return exports.luhn(number) && !!exports.type(number);
  type = exports.types[camel(type)];
  return (!type.luhn || exports.luhn(number)) && type.test(number);
};
