DECIMAL_TO_ROMAN = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };

function roman_in_place(n, place) {
  var value = n * place;
  if (DECIMAL_TO_ROMAN[value]) {
    return DECIMAL_TO_ROMAN[value];
  }
  switch (n) {
    case 0:
      return '';
    case 1:
      return DECIMAL_TO_ROMAN[place];
    case 2:
      return DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place];
    case 3:
      return DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place];
    case 4:
      return DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place * 5];
    case 5:
      return DECIMAL_TO_ROMAN[place * 5];
    case 6:
      return DECIMAL_TO_ROMAN[place * 5] + DECIMAL_TO_ROMAN[place];
    case 7:
      return DECIMAL_TO_ROMAN[place * 5] + DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place];
    case 8:
      return DECIMAL_TO_ROMAN[place * 5] + DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place];
    case 9:
      return DECIMAL_TO_ROMAN[place] + DECIMAL_TO_ROMAN[place * 10];
    default:
      throw new Error('not a decimal number: "' + n + '"');
  }
}

function find_place(num, place) {
  return Math.floor(num / place) % 10;
}

function make_reducer_for(n) {
  return function reducer(memo, place) {
    var value_for_place = find_place(n, place);
    return memo + roman_in_place(value_for_place, place);
  };
}

function convert_to_roman(n) {
  return [1000, 100, 10, 1].reduce(make_reducer_for(n), '');
}

if (module) {
  module.exports = convert_to_roman;
}
