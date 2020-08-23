// Have the function SimpleEvens(num) check whether every single number in the passed in parameter
// is even. If so, return the string true, otherwise return the string false. For example: if num is
// 4602225 your program should return the string false because 5 is not an even number.

function SimpleEvens(num) {
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      return false;
    }
  }
  return true;
}

console.log(SimpleEvens(20854646452));
