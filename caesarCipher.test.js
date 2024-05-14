import {caesarCipher, generateCipherAlphabet} from './caesarCipher.js';

test('Caesar Cipher basic case', () => {
    expect(caesarCipher('abc', 1)).toBe('BCD');
});

test('Testing generate cipher alphabet', () => {
    expect(generateCipherAlphabet(1)).toStrictEqual(['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A']);
});