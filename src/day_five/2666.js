// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// 1. The first time the returned function is called, it should return the same result as fn.
// 2. Every subsequent time it is called, it should return undefined.

// ==================
// 1. The first time the returned function is called, it should return the same result as fn.
// 2. Every subsequent time it is called, it should return undefined.

// ==================== Link ================
// https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return result;
  };
};

const fn = (a, b, c) => a + b + c;
const result = once(fn);

console.log(result(1, 2, 3)); // 6
console.log(result(1, 2, 4)); // 6
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
