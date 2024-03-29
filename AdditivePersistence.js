// Have the function AdditivePersistence(num) take the num parameter being passed which will always be a
// positive integer and return its additive persistence which is the number of times you must add the digits
// in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because
// 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

function AdditivePersistence(num, count = 0) {
  if (num.toString().length === 1) {
    return count;
  }
  let nums = num.toString().split('');
  num = nums.reduce((a, c) => parseInt(a) + parseInt(c));
  count++;
  return AdditivePersistence(num, count);
}

// keep this function call here
console.log(AdditivePersistence(19)); //2
