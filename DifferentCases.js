// Have the function DifferentCases(str) take the str parameter being passed and return it in upper camel case
//  format where the first letter of each word is capitalized. The string will only contain letters and some combination
//   of delimiter punctuation characters separating each word.

// For example: if str is "Daniel LikeS-coding" then your program should return the string DanielLikesCoding.

function DifferentCases(str) {
  str = str
    .replace(/[\W\d]/gi, ' ')
    .toLowerCase()
    .split(' ');

  str = str.map((word) =>
    word.length > 1
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word[0].toUpperCase()
  );

  return str.join('');
}
