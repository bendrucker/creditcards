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

exports.year = {
  parse: function (year, pad) {
    year = ~~year;
    if (!pad) return year;
    var base = new Date().getFullYear().toString().substr(0, 2);
    var str = base + (year.toString().length === 2 ? year : '0' + year);
    return ~~str || void 0;
  },
  isValid: function (year) {
    if (typeof year !== 'number') return false;
    return year > 0;
  },
  isPast: function (year) {
    return new Date().getFullYear() > year;
  }
};
