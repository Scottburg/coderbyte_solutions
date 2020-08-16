// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter
//  of each word. Words will be separated by only one space.

function LetterCapitalize(str) {
  strArr = str.split(' ');
  let newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    newArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }

  return newArr.join(' ');
}
