// Have the function StringPeriods(str) take the str parameter being passed and
// determine if there is some substring K that can be repeated N > 1 times to
// produce the input string exactly as it appears. Your program should return the
// longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab
// because that is the longest substring that is repeated 3 times to create the final string.
// Another example: if str is "abababababab" then your program should return ababab because
// it is the longest substring. If the input string contains only a single character, your
// program should return the string -1.

function StringPeriods(str) {
  function checkRepeat(str, subStr) {
    let regex = new RegExp(subStr, 'g');
    let len = 0;
    let match = str.match(regex);
    if (match) {
      len = match.map((a) => a.length).reduce((a, b) => a + b);
    }
    if (len === str.length) return subStr;
  }
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let check = checkRepeat(str, str.slice(0, i));
    if (check && check.length > res.length) {
      res = check;
    }
  }
  return res ? res : -1;
}

console.log(StringPeriods('abcxabc')); // -1
console.log(StringPeriods('abcababcababcab')); //abcab
