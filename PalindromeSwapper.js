// Have the function PalindromeSwapper(str) take the str parameter being passed and determine
// if a palindrome can be created by swapping two adjacent characters in the string. If it is
// possible to create a palindrome, then your program should return the palindrome, if not then
// return the string -1. The input string will only contain alphabetic characters. For example: if
// str is "rcaecar" then you can create a palindrome by swapping the second and third characters,
// so your program should return the string racecar which is the final palindromic string.

function PalindromeSwapper(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let temp = str.slice(0, i) + str[i + 1] + str[i] + str.slice(i + 2);
    if (temp === temp.split('').reverse().join('')) {
      return temp;
    }
  }

  return -1;
}

console.log(PalindromeSwapper('kyaak')); //kayak
console.log(PalindromeSwapper('anna')); //anna
console.log(PalindromeSwapper('madam')); //anna
