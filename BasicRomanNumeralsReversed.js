// Have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals.
// The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
// In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But to create a
// number like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C).
// So 19 in Roman numerals is XIX.

// The goal of your program is to return the decimal equivalent of the Roman numeral given.
// For example: if str is "XXIV" your program should return 24

function BasicRomanNumerals(n) {
  const romanDict = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [10, 'X'],
    [9, 'IX'],
    [8, 'VIII'],
    [7, 'VII'],
    [6, 'VI'],
    [5, 'V'],
    [4, 'IV'],
    [3, 'III'],
    [2, 'II'],
    [1, 'I'],
  ];

  // Take the largest possible num from n then repeat, purring all onto an array to turn to a str.
  let remainder = n;
  let res = '';
  while (remainder > 0) {
    for (let i = 0; i < romanDict.length; i++) {
      if (romanDict[i][0] <= remainder) {
        remainder = remainder - romanDict[i][0];
        res = res.concat(romanDict[i][1]);
        break;
      }
    }
  }

  return res;
}

console.log(BasicRomanNumerals(4)); //IV
console.log(BasicRomanNumerals(46)); //'XLVI'
console.log(BasicRomanNumerals(95)); //'XCV'
console.log(BasicRomanNumerals(1993)); //'MCMXCIII'
