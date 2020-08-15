// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(str) {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] % 2 && strArr[i + 1] % 2) {
      strArr.splice(i + 1, 0, '-');
      i++;
    }
  }
  return strArr.join('');
}
