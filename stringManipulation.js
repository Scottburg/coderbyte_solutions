// For a given sentence p, return the following:

//     how many vowels and consonants p has, we do not count Y and W as vowels
//     p with reversed words order and reversed cases (any upper-case letter will be lower-case and every lower-case letter will be upper-case)
//     every word in p separated by a dash ('-')
//     p with inserted string "pv" before any vowel in the sentence

// Take into consideration that p can have any kind of characters.

// You have to return a string containing the above queries, separated by double colon ("::")

// INPUT
// string    p

// OUTPUT
// string    combined_queries

// This is how combined_queries should look like:
// nr_vowels nr_consonants::reversed_p_with_reversed_cases::every-word-in-p::p_wpvith_inspvertpved_strpving_pv

// EXAMPLE
// Input
// "ThIs is p"

// Output
// 2 5::P IS tHiS::ThIs-is-p::ThpvIs pvis p
function run(p) {
  let numVowels = 0;
  let numConsonants = 0;

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'x',
    'z',
  ];

  let pArr = p.split('');
  let reversedStr = p
    .split(' ')
    .reverse()
    .map((el) =>
      el
        .split('')
        .map((el2) => {
          if (el2 === el2.toUpperCase()) {
            return el2.toLowerCase();
          } else {
            return el2.toUpperCase();
          }
        })
        .join('')
    );

  let dashStr = p.split(' ').join('-');
  let pvStr = pArr
    .map((el) => {
      return vowels.includes(el.toLowerCase()) ? `pv${el}` : el;
    })
    .join('');

  for (let i = 0; i < pArr.length; i++) {
    if (vowels.includes(pArr[i].toLowerCase())) {
      numVowels++;
    }
    if (consonants.includes(pArr[i].toLowerCase())) {
      numConsonants++;
    }
  }
  return `${numVowels} ${numConsonants}::${reversedStr.join(
    ' '
  )}::${dashStr}::${pvStr}`;
}

run('The iterator is just clutter');
