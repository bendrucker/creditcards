'use strict';

var camel = require('camel-case');
var luhn = require('fast-luhn');

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

exports.luhn = luhn;

exports.isValid = function (number, type) {
  if (!type) type = exports.type(number);
  type = exports.types[camel(type)];
  if (!type) return false;
  return (!type.luhn || luhn(number)) && type.test(number);
};
