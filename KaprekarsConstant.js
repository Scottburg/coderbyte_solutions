// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit
// number with at least two distinct digits. Your program should perform the following routine on the number:
// Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
// and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine
// will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).
// Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your
// program should return 3 because of the following steps:
// (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
count = 0;
function KaprekarsConstant(num) {
  num = String(num)
    .split('')
    .map((x) => +x);
  let ascNum = num
    .sort((a, b) => {
      return Number(a) - Number(b);
    })
    .join('');
  let descNum = num
    .sort((a, b) => {
      return Number(b) - Number(a);
    })
    .join('');
  count++;
  let res = descNum - ascNum;
  if (String(res).length < 4) {
    res = '0' + String(res);
  }
  if (res === 6174) {
    return count;
  }
  return count > 8 ? false : KaprekarsConstant(res);
}

// keep this function call here
console.log(KaprekarsConstant(2111)); //5
console.log(KaprekarsConstant(9831)); //7
