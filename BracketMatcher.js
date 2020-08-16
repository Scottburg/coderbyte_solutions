// Have the function BracketMatcher(str) take the str parameter being passed and return 1
//  if the brackets are correctly matched and each one is accounted for. Otherwise return 0.
//   For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))"
//   the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as
//    brackets. If str contains no brackets return 1.

function BracketMatcher(str) {
  let curly = 0;
  let square = 0;
  let round = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      curly++;
    }
    if (str[i] === '}') {
      curly--;
    }
    if (str[i] === '[') {
      square++;
    }
    if (str[i] === ']') {
      square--;
    }
    if (str[i] === '(') {
      round++;
    }
    if (str[i] === ')') {
      round--;
    }
    if (round < 0) {
      break;
    }
    if (square < 0) {
      break;
    }
    if (curly < 0) {
      break;
    }
  }
  return curly + square + round === 0 ? 1 : 0;
}
