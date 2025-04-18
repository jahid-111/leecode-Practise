// Apply Transform Over Each Element in Array

// ====================================================================

// 1. Given an integer array arr
// 2. And a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const number = [10, 20, 30, 40];
const map = function (arr, fn) {
  let returnedArray = [];

  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
};

const result = map(number, function (x, i) {
  return x + i;
});
console.log(result);
