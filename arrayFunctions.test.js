import analyzeArray from './arrayFunctions.js';

test('Analysis of an array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, min: 1, max: 5, length: 5});
});

test('Analysis of a more complex array', () => {
  expect(analyzeArray([2,4,66,77,99,123]).toEqual())
});