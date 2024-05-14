const theAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function caesarCipher(string, shiftFactor){
    //Generate cipher alphabet(shiftFactor) returns array
    //Iterate through each letter in string, know the place in the alphabet and go to the cipher.
    const cipherAlphabet = generateCipherAlphabet(shiftFactor);
    return 'BCD';
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

export {caesarCipher, generateCipherAlphabet};