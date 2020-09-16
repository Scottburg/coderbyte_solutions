// Have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are
// correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the
// output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])"
// the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets.
// If str contains no brackets return 1.

function MultipleBrackets(str) {
  // code goes here
  // no brackets return 1
  // three types ( { [
  // make an array of the brackets add for opening { and pop off
  // if length of all at end === 0 then return 1 else 0
  let curly = 0;
  let square = 0;
  let round = 0;
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      round++;
    }
    if (str[i] === ')') {
      if (round < 1) {
        return '0';
      }
      total++;
      round--;
    }
    if (str[i] === '{') {
      curly++;
    }
    if (str[i] === '}') {
      if (curly < 1) {
        return '0';
      }

      total++;
      curly--;
    }
    if (str[i] === '[') {
      square++;
    }
    if (str[i] === ']') {
      if (square < 1) {
        return '0';
      }

      total++;
      square--;
    }
  }

  return curly + square + round === 0 ? `1 ${total}` : '0';
}

// keep this function call here
console.log(MultipleBrackets('(coder)[byte)]')); // 0
console.log(MultipleBrackets('(c([od]er)) b(yt[e])')); // 1 5
console.log(MultipleBrackets('the co[l][]or re(d))()(()')); // 0
console.log(MultipleBrackets('le[tter(s) gal](o)(r)((e])')); // 0
