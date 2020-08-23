// Have the function PalindromicSubstring(str) take the str parameter being passed and find the longest palindromic substring,
// which means the longest substring which is read the same forwards as it is backwards. For example: if str is "abracecars" then
// your program should return the string racecar because it is the longest palindrome within the input string.

// The input will only contain lowercase alphabetic characters. The longest palindromic substring will always be unique, but if
// there is none that is longer than 2 characters, return the string none.

function PalindromicSubstring(str) {
  let res = '';
  for (let i = 1; i < str.length - 1; i++) {
    let l = i - 1,
      m = i,
      r = i + 1;
    temp = '';
    while (str[l] === str[r] && l >= 0 && r < str.length) {
      temp = str.slice(l, r + 1);
      l--;
      r++;
      if (temp.length > res.length) {
        res = temp;
      }
    }
    while (str[m] === str[r] && m >= 0 && r < str.length) {
      temp = str.slice(m, r + 1);
      m--;
      r++;
      if (temp.length > res.length) {
        res = temp;
      }
    }
  }
  return res.length > 2 ? res : 'none';
}

console.log(PalindromicSubstring('hellosannasmith')); //Output: sannas
console.log(PalindromicSubstring('abcdefgg')); //Output: nono
console.log(PalindromicSubstring('acaaca')); //Output: acaaca
console.log(PalindromicSubstring('aabcdcbaa')); //Output: acaaca
