// Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than
// the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears
// directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.

function OneDecremented(str) {
  let count = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] - str[i] === 1) {
      count = count + 1;
    }
  }

  return count;
}

console.log(OneDecremented('56')); //0
console.log(OneDecremented('9876541110')); //6
