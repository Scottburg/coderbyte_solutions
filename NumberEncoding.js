// Have the function NumberEncoding(str) take the str parameter and encode the message
// according to the following rule: encode every letter into its corresponding numbered
// position in the alphabet. Symbols and spaces will also be used in the input. For example:
// if str is "af5c a#!" then your program should return 1653 1#!.

function NumberEncoding(str) {
  // get letter to asci and subtract to get number
  let res = '';
  let regex = /[a-zA-Z]/;

  for (let i = 0; i < str.length; i++) {
    debugger;
    if (regex.test(str[i])) {
      res = res + (parseInt(str[i].toLowerCase().charCodeAt()) - 96);
    } else {
      res = res + str[i];
    }
  }
  return res;
}

console.log(NumberEncoding('hello 45')); //Output: 85121215 45
console.log(NumberEncoding('jaj-a')); //Output: 10110-1
