// Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format
// where the first letter of each word is capitalized (excluding the first letter). The string will only contain
// letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.

function CamelCase(str) {
  let regex = /\W/gm;
  let strArr = str.replace(regex, ' ').split(' ');
  strArr = strArr.map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase());
  let res = strArr.join('');
  return res[0].toLowerCase() + res.slice(1);
}

// keep this function call here
console.log(CamelCase('cats AND*Dogs-are Awesome')); //catsAndDogsAreAwesome
console.log(CamelCase('a b c d-e-f%g')); //aBCDEFG
