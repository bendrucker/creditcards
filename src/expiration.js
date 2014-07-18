'use strict';

var internals = {};

exports.month = {
  parse: function (month) {
    return ~~month;
  },
  isValid: function (month) {
    if (!month) return false;
    month = exports.month.parse(month);
    return month >= 1 && month <= 12;
  }
};

internals.currentYear = function () {
  return new Date().getYear() + 1900;
};

exports.year = {
  parse: function (year, pad) {
    year = ~~year;
    if (!pad) return year;
    var base = internals.currentYear().toString().substr(0, 2);
    var str = base + (year.toString().length === 2 ? year : '0' + year);
    return ~~str;
  },
  isValid: function (year, pad) {
    if (typeof year !== 'number' && typeof year !== 'string') return false;
    return exports.year.parse(year, pad) > 0;
  },
  isFuture: function (year, pad) {
    return internals.currentYear() <= exports.year.parse(year, pad);
  }
};
