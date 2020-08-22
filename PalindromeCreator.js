// Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is
// possible to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters.
// For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome.
// For this example your program should return the two characters that were removed with no delimiter and in the order
// they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the
// string not possible. If the input string is already a palindrome, your program should return the string palindrome.

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest
// palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you
// remove do not have to be adjacent in the string.

function PalindromeCreator(str) {
  if (str === str.split('').reverse().join('')) {
    return 'palindrome';
  }
  for (let i = 0; i < str.length; i++) {
    let temp = str.replace(str[i], '');
    if (temp.length > 2 && temp === temp.split('').reverse().join('')) {
      return str[i];
    }
    for (let j = i + 1; j < str.length; j++) {
      debugger;
      let newTemp = temp.replace(str[j], '');
      if (
        newTemp.length > 2 &&
        newTemp === newTemp.split('').reverse().join('')
      ) {
        return `${str[i]}${str[j]}`;
      }
    }
  }
  return 'not possible';
}

console.log(PalindromeCreator('mmop')); // not possible
console.log(PalindromeCreator('kjjjhjjj')); // k
console.log(PalindromeCreator('abjchba')); // jc
console.log(PalindromeCreator('racecar')); // palindrome
