'use strict';

exports.month = {
  parse: function (month) {
    return ~~month;
  },
  isValid: function (month) {
    if (!month) return false;
    month = exports.month.parse(month);
    return month >= 1 && month <= 12
  }
};
