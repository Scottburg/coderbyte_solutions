// Have the function RunLength(str) take the str parameter being passed and return a
// compressed version of the string using the Run-length encoding algorithm. This algorithm
// works by taking the occurrence of each repeating character and outputting that number along
// with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p.
// The string will not contain any numbers, punctuation, or symbols

function RunLength(str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1] && strArr[i] !== strArr[i - 1]) {
      strArr[i] = 1 + strArr[i];
    }
  }

  let res = strArr.join('');

  const regex = /(\w)\1+/g;
  let match = res.match(regex);
  if (match) {
    for (const el of match) {
      let replacement = el.length + el[0];
      res = res.replace(el, replacement);
    }
  }

  return res;
}

console.log(RunLength('swept')); //1s1w1e1p1t
console.log(RunLength('aabbcde')); //2a2b1c1d1e
console.log(RunLength('wwwbbbw')); //3w3b1w
