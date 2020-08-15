// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome,
// (the string is the same forward as it is backward) otherwise return the string false.
// For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function Palindrome(str) {
  // replace whitespace characters with nothing - remove all spaces
  str = str.replace(/\s/g, '');
  //call reverse on the new str - transform to array with split - reverse the array using  .reverse() then trasform back into a string using .join
  revStr = str.split('').reverse().join('');

  return str === revStr;
}
