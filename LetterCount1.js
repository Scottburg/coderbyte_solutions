// Have the function LetterCountI(str) take the str parameter being passed and return the first
//  word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
//  Words will be separated by spaces.

function LetterCountI(str) {
  const strArr = str.split(' ');
  const freqDicts = [];
  let max = 0;
  let loc = null;

  for (let i = 0; i < strArr.length; i++) {
    const dict = {};
    for (const el of strArr[i]) {
      dict[el] === undefined ? (dict[el] = 0) : dict[el]++;
    }
    let res = 0;
    for (const el in dict) {
      if (dict[`${el}`] > 0) {
        res = res + dict[el];
      }
    }
    freqDicts.push(res);
  }

  for (let i = 0; i < freqDicts.length; i++) {
    if (freqDicts[i] > max) {
      max = freqDicts[i];
      loc = i;
    }
  }

  return strArr[loc] === undefined ? -1 : strArr[loc];
}
