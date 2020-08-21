// Have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals.
// The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
// In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But to create a
// number like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C).
// So 19 in Roman numerals is XIX.

// The goal of your program is to return the decimal equivalent of the Roman numeral given.
// For example: if str is "XXIV" your program should return 24

function BasicRomanNumerals(numeral) {
  let res = 0;
  numeral = numeral.split('');

  for (let i = 0; i <= numeral.length; i++) {
    if (numeral[i] === 'M') {
      res = res + 1000;
    }
    if (numeral[i] === 'C' && numeral[i + 1] === 'M') {
      res = res + 900;
      i++;
      continue;
    }
    if (numeral[i] === 'C') {
      res = res + 100;
    }

    if (numeral[i] === 'D') {
      res = res + 500;
    }
    if (numeral[i] === 'L') {
      res = res + 50;
    }
    if (numeral[i] === 'X' && numeral[i + 1] === 'L') {
      res = res + 40;
      i = i + 1;
      continue;
    }
    if (numeral[i] === 'X' && numeral[i + 1] === 'C') {
      res = res + 90;
      i = i + 1;
      continue;
    }
    if (numeral[i] === 'X') {
      res = res + 10;
    }
    if (numeral[i] === 'I' && numeral[i + 1] === 'X') {
      res = res + 9;
      i = i + 1;
      continue;
    }
    if (numeral[i] === 'I' && numeral[i + 1] === 'V') {
      res = res + 4;
      i = i + 1;
      continue;
    }
    if (
      numeral[i] === 'I' &&
      numeral[i + 1] === 'I' &&
      numeral[i + 2] === 'I'
    ) {
      res = res + 3;
      i = i + 2;
      continue;
    }
    if (numeral[i] === 'I' && numeral[i + 1] === 'I') {
      res = res + 2;
      i = i + 1;
      continue;
    }
    if (numeral[i] === 'I') {
      res = res + 1;
    }
    if (numeral[i] === 'V') {
      res = res + 5;
    }
  }

  return res;
}

console.log(BasicRomanNumerals('IV')); //4
console.log(BasicRomanNumerals('XLVI')); //46
console.log(BasicRomanNumerals('XCV')); //95
