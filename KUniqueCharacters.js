// Have the function KUniqueCharacters(str) take the str parameter being passed
// and find the longest substring that contains k unique characters, where k will
// be the first character from the string. The substring will start from the second
// position in the string because the first character will be the integer k. For
// example: if str is "2aabbacbaa" there are several substrings that all contain 2
// unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return
// "aabba" because it is the longest substring. If there are multiple longest substrings,
// then return the first substring encountered with the longest length. k will range from 1 to 6.

function KUniqueCharacters(str) {
  const num = str[0];
  let res = '';
  for (let i = 1; i < str.length; i++) {
    let letters = str[i];
    let j = i + 1;
    while (str[j] && letters.length <= num) {
      if (letters.includes(str[j])) {
        j++;
      } else {
        letters += str[j];
      }
    }
    if (res.length < j - i) {
      res = str.slice(i, j);
    }
  }
  return res;
}

console.log(KUniqueCharacters('3aabacbebebe')); //cbebebe
console.log(KUniqueCharacters('2aabbcbbbadef')); //bbcbbb
