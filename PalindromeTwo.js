// Have the function PalindromeTwo(str) take the str parameter being passed and return the string
// true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise
// return the string false. The parameter entered may have punctuation and symbols but they should not
// affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna"
// should return true.

function PalindromeTwo(str) {
  str = str.replace(/[^A-Za-z]/g, '');
  //call reverse on the new str - transform to array with split - reverse the array using  .reverse() then trasform back into a string using .join
  let revStr = str.split('').reverse().join('').toLowerCase();

  return str.toLowerCase() === revStr;
}

// keep this function call here
console.log(PalindromeTwo('Noel - sees Leon')); //true
