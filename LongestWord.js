// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//  If there are two or more words that are the same length, return the first word from the string with that length.
//  Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  arr = sen.split(' ');
  newArr = arr.map((item) => {
    return item.replace(/\W/g, '');
  });
  longest = '';

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > longest.length) longest = newArr[i];
  }
  return longest;
}
