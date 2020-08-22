// Have the function NextPalindrome(num) take the num parameter being passed and return the next largest
// palindromic number. The input can be any positive integer. For example: if num is 24, then your program
// should return 33 because that is the next largest number that is a palindrome.

function NextPalindrome(num) {
  num++;
  if (num.toString() === num.toString().split('').reverse().join('')) {
    return num;
  } else {
    return NextPalindrome(num);
  }
}

// keep this function call here
console.log(NextPalindrome(504)); //505
console.log(NextPalindrome(490)); //494
console.log(NextPalindrome(1)); //494
