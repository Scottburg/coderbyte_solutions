// Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent
// even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false.
//  For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string,
//  "46" so your program should return the string true. Another example: if str is "7r5gg812" then the
//  pair is "812" (8 and 12) so your program should return the string true.

function EvenPairs(str) {
  var regEx = /[24680]\d*[24680]/;
  //finds an even number and another even number with any amount of digits inbetween
  // the odd numbers in between are irelevent as long as shown by "812" being true.

  return regEx.test(str);
}
