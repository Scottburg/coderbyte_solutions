// Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and
// insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793
// the output should be 454*67-9-3. Don't count zero as an odd or even number.

function DashInsertII(num) {
  let strArr = num.toString().split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] % 2 && strArr[i + 1] % 2) {
      strArr.splice(i + 1, 0, '-');
      i++;
    }
    if (
      strArr[i] !== '0' &&
      strArr[i + 1] !== '0' &&
      strArr[i] % 2 === 0 &&
      strArr[i + 1] % 2 === 0
    ) {
      strArr.splice(i + 1, 0, '*');
      i++;
    }
  }
  return strArr.join('');
}

console.log(DashInsertII(99946)); //9-9-94*6
console.log(DashInsertII(56647304)); //56*6*47-304
