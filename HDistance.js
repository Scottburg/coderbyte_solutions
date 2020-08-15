// Have the function HDistance(strArr) take the array of strings stored in strArr,
// which will only contain two strings of equal length and return the number of characters
//  at each position that are different between them. For example: if strArr is ["house", "hours"]
//  then your program should return 2. The string will always be of equal length and will only contain
//  lowercase characters from the alphabet and numbers.

function HDistance(strArr) {
  let res = 0;
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      res++;
    }
  }
  return res;
}
