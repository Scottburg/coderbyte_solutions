// Have the function OffBinary(strArr) read the array of strings stored in strArr, which will contain two elements, the first will
// be a positive decimal number and the second element will be a binary number. Your goal is to determine how many digits in the
// binary number need to be changed to represent the decimal number correctly (either 0 change to 1 or vice versa). For example: if
// strArr is ["56", "011000"] then your program should return 1 because only 1 digit needs to change in the binary number (the first
//   zero needs to become a 1) to correctly represent 56 in binary.

function OffBinary(strArr) {
  function BinaryConverter(num, len) {
    let res = '0'.repeat(len);
    debugger;
    for (let i = 0; i < len; i++) {
      if (num >= Math.pow(2, len - 1 - i)) {
        res = res.slice(0, i) + '1' + res.slice(i + 1);
        num -= Math.pow(2, len - 1 - i);
      }
    }
    return res;
  }
  let binaryNum = BinaryConverter(Number(strArr[0]), strArr[1].length);
  let count = 0;
  for (let i = 0; i < strArr[1].length; i++) {
    if (binaryNum[i] !== strArr[1][i]) {
      count++;
    }
  }
  return count;
}

// keep this function call here
console.log(OffBinary(['44', '111111'])); //3
console.log(OffBinary(['5624', '0010111111001'])); //2
