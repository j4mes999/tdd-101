import {capitalize, reverseString} from './stringFunctions.js'

test('capitalize happy path', () => {
  expect(capitalize('hello')).toBe('Hello')
});

test('capitalize happy path 2', () => {
    expect(capitalize('luisJaime')).toBe('LuisJaime')
});

test('empty string', () => {
    expect(capitalize('')).toBe('')
});

test('Reverse string happy path', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Reverse string happy path 2', () => {
    expect(reverseString('luisJaime')).toBe('emiaJsiul');
});