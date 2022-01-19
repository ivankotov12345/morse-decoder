const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = []
    for(let i=0; i < expr.length; i+= 10){
      arr.push(expr.slice(i, i + 10));
    }
  
    const mapped = arr.map(el => el.split(''));
    mapped.forEach(el => {
      while(el[0] == 0){
        el.shift()
      }
    })
  
  
    const arr1 =  mapped.map(el => el.join(''));
    const str1 = arr1.join(',');
    const reDot = /10/g;
    const re1 = /11/g;
    const reIvan = /\*\*\*\*\*\*\*\*\*\*/g
  
    const dottedStr = str1.replace(reDot, '.');
    const morseStr = dottedStr.replace(re1, '-');
    const ivanStr = morseStr.replace(reIvan, '-----,-----,-----')
    const arrMorse = ivanStr.split(',');
    const strDec = arrMorse.map(el => el = MORSE_TABLE[el]).join('');
    const re2 = /000/g;
    return decoded = strDec.replace(re2, ' ')
}

module.exports = {
    decode
}