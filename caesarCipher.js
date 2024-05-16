const theAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function caesarCipher(string, shiftFactor){
    const cipherAlphabet = generateCipherAlphabet(shiftFactor);
    const cipheredString = generateCipheredString(string, cipherAlphabet);
    return cipheredString;
}

function generateCipherAlphabet(shiftFactor){
  let cipherArray = new Array();
  theAlphabet.forEach((letter,index) => {
    if(index + shiftFactor >= theAlphabet.length){
      cipherArray[index] = theAlphabet[index + shiftFactor - theAlphabet.length];
      return;
    }
    cipherArray[index] = theAlphabet[index + shiftFactor];
  });

  return cipherArray;
}

function generateCipheredString(string, cipherAlphabet){
  let cipheredString = '';
  const stringToLowerCase = string.toLowerCase();
  let index = 0;
  for( let char of stringToLowerCase){
    if( char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122){
      cipheredString += char;
      continue;
    }
    cipheredString += cipherAlphabet[char.charCodeAt(0) - 97];
  }

  return cipheredString;

}

export {caesarCipher, generateCipherAlphabet};