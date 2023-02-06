//Hackajob challange

function run(morseToEnglish, textToTranslate) {
  /*
   * Write your code below; return type and arguments should be according to the problem\'s requirements
   */
  if (textToTranslate) {
    return 'Invalid Morse Code Or Spacing';
  }

  if (textToTranslate.match(/\s{4,}/g)) {
    return 'Invalid Morse Code Or Spacing';
  }
  const morseToEnglishDict = {
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '-.-.--': '!',
    '-....-': '-',
    '-..-.': '/',
    '.--.-.': '@',
    '-.--.': '(',
    '-.--.-': ')',
  };

  const englishToMorseDict = {
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '-': '-....-',
    '/': '-..-.',
    '@': '.--.-.',
    '(': '-.--.',
    ')': '-.--.-',
  };
  let res = null;

  if (!morseToEnglish) {
    console.log('englishToMorseDict[el]');
    textToTranslate = textToTranslate.split('');
    res = textToTranslate.map((el) => {
      return englishToMorseDict[el.toLowerCase()]
        ? englishToMorseDict[el.toLowerCase()]
        : ' ';
    });
  } else {
    //split by 3 spaces and then by 1 space
    res = textToTranslate.split('   ').map((el) => el.split(' '));
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].length; j++) {
        res[i][j] = morseToEnglishDict[res[i][j]];
      }
      res[i] = res[i].join('');
    }
  }

  console.log(res);
  return res ? res.join(' ') : 'Invalid Morse Code Or Spacing';
}

console.log(
  run(
    true,
    '- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-'
  )
);
