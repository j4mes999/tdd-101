import {caesarCipher} from './caesarCipher.js';

test('Caesar Cipher basic case', () => {
    expect(caesarCipher('abc', 1)).toBe('BCD');
});

test('Caesar cipher with shift factor 2', () => {
    expect(caesarCipher('abc', 2)).toBe('CDE');
});

test('Caesar cipher with a shift factor of 15', () => {
    expect(caesarCipher('abc', 15)).toBe('PQR');
});

test('Caesar cipher with a shift factor of 26', () => {
    expect(caesarCipher('abc', 26)).toBe('ABC');
});

test('Caesar cipher with a shift factor of 27', () => {
    expect(caesarCipher('abc', 27)).toBe('BCD');
});

test('Caesar cipher with spaces', () => {
    expect(caesarCipher('a b c', 1)).toBe('B C D');
});

test('Caesar cipher with Julius Caesar string', () => {
    expect(caesarCipher('Julius Caesar', 3)).toBe('MXOLXV FDHVDU');
});

test('Caesar cipher with marcus crassus string', () => {
    expect(caesarCipher('marcus crassus', 5)).toBe('RFWHZX HWFXXZX');
});

test('Caesar cipher with punctuation', () => {
    expect(caesarCipher('marcus. crassus!', 5)).toBe('RFWHZX. HWFXXZX!'); 
});
