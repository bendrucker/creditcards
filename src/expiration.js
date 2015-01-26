'use strict';

exports.isPast = function (month, year) {
  return Date.now() >= new Date(year, month);
};

exports.month = {
  parse: function (month) {
    return ~~month || void 0;
  },
  isValid: function (month) {
    if (typeof month !== 'number') return false;
    return month >= 1 && month <= 12;
  }
};

var base = new Date().getFullYear().toString().substr(0, 2);

function twoDigit (number) {
  return number >= 10 ? number : '0' + number;
}

exports.year = {
  parse: function (year, pad) {
    year = ~~year;
    if (!pad) return year || void 0;
    return ~~(base + twoDigit(year));
  },
  format: function (year, strip) {
    year = year.toString();
    return strip ? year.substr(2, 4) : year;
  },
  isValid: function (year) {
    if (typeof year !== 'number') return false;
    return year > 0;
  },
  isPast: function (year) {
    return new Date().getFullYear() > year;
  }
};
