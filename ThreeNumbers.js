// Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique,
// single-digit integers occur within each word in the string. The integers can appear anywhere in the word, but
// they cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it,
// then return the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" then your
// program should return "true" but if the string is "hell268o w6or2l4d" then your program should return "false" because
// all the integers are adjacent to each other in the first word.

function ThreeNumbers(str) {
  let strArr = str.split(' ');
  let numMatches = strArr.map((word) => word.match(/\d+/g));

  for (const el of numMatches) {
    let digits = el.join('');
    if (el.length === 1 || digits.length !== 3) {
      return false;
    }
    if (
      digits[0] === digits[1] ||
      digits[0] === digits[2] ||
      digits[1] === digits[2]
    ) {
      return false;
    }
  }

  return true;
}

console.log(ThreeNumbers('2a3b5 w1o2rl3d g1gg92')); // true
console.log(ThreeNumbers('213aaa ggg4g4g6ggg')); // false
console.log(ThreeNumbers('hell268o w6or2l4d')); // false
