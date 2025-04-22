// // // Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// // // The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// // // The function composition of an empty list of functions is the identity function f(x) = x.

// // // You may assume each function in the array accepts one integer as input and returns one integer as output.

// // // ============== Link ==============
// // // https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

// const array = [1, 2, 3, 4];

// const compose = function (functions) {
//   return function (x) {
//     return functions.reduceRight((acc, fn, index) => {
//       const result = fn(acc);
//       // console.log(`Step ${functions.length - index}: fn(${acc}) => ${result}, init ${x}`);
//       return result;
//     }, x);
//   };
// };

// const one = (x) => x + 3;
// const two = (x) => x + 3;
// const three = (x) => x + 2;

// const fn = compose([one, two, three]);
// console.log(fn(10)); // Output: 5

const compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn, index) => {
      const result = fn(acc);
      return result;
    }, x);
  };
};

const trim = (trm) => trm.trim();
const toLowerCase = (str) => str.toLowerCase();
const autoPrefixer = (prf) => "user_$" + prf;

const fn = compose([autoPrefixer, toLowerCase, trim]);
console.log(fn("  Jahid ")); // Output: "user_hello world"
