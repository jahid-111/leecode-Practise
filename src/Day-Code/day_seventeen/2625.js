// Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
/* 
    1.  A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array.
        2.  This flattening operation should only be done if the current depth of nesting is less than n.
            3.  The depth of the elements in the first array are considered to be 0.
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n > 0) {
      flatArr.push(...flat(arr[i], n - 1));
    } else {
      flatArr.push(arr[i]);
    }
  }

  return flatArr;
};
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const res = flat(arr, 3);
// console.log(res);

const apiData = [
  "Tech",
  ["JavaScript", "React"],
  ["Python", ["Django", "Flask"]],
];
const flatTags = flat(apiData, 2);
console.log(flatTags);
