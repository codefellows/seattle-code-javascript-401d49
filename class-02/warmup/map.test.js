'use strict';

const map = require('./map');

describe('Map function', () => {
  test('works as expected', () => {
    let arr = [2, 2, 2, 2];
    let callback = (val, idx) => {
      return val * val;
    };
    let result = map(arr, callback);
    expect(result).toEqual([4, 4, 4, 4]);
  });
  test('returns an array of same length as input', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let callback = (val, idx) => {
      return val * val;
    };
    let result = map(arr, callback);
    expect(arr.length).toEqual(result.length);
  })
});
