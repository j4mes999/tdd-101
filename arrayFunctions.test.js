import analyzeArray from './arrayFunctions.js';

test('Analysis of an array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, min: 1, max: 5, length: 5});
});

test('Analysis of a more complex array', () => {
  expect(analyzeArray([2,4,66,77,99,123])).toEqual({average: 61.83, min: 2, max: 123, length: 6})
});

test('Analysis of an array ODIN example', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});