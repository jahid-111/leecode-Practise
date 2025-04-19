// Given an integer array arr
// 2. And a filtering function fn,
// 3. Return a filtered array filteredArr.

// === The fn function takes one or two arguments:

// 1. arr[i] - number from the arr
// 2. i - index of arr[i]
// 3. filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

var integerArray = [0, 10, 20, 30, 40, 50.2, 60, 70, 80, 90, 100];

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];

  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const fn = function (n) {
  return n > 50;
};

const newArray = filter(integerArray, fn);

console.log(newArray);
