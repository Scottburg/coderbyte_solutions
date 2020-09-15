// Have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if
// 1000 is passed return 8.

function BinaryConverter(str) {
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    res += Number(str[str.length - 1 - i]) * Math.pow(2, i);
  }

  return res;
}

// keep this function call here
console.log(BinaryConverter('100101')); //37
