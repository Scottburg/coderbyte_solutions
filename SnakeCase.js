// Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case
// format where each word is lowercased and separated from adjacent words via an underscore. The string will
// only contain letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.

function SnakeCase(str) {
  let regex = /\W/gm;
  let strArr = str.replace(regex, ' ').split(' ');
  strArr = strArr.map((a) => a.toLowerCase());
  return strArr.join('_');
}

// keep this function call here
console.log(SnakeCase('cats AND*Dogs-are Awesome')); //cats_and_dogs_are_awesome
console.log(SnakeCase('a b c d-e-f%g')); //a_b_c_d_e_f_g
