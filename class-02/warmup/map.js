'use strict';

const map = (arr, callback) => {
  let newArr = [];
  // iterate thru each index in the array
  for(let i = 0; i < arr.length; i++){
    newArr[i] = callback(arr[i], i);
  }
  return newArr;
};

module.exports = map;
