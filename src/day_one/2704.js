// Write a function expect that helps developers test their code.
//  It should take in any value val and return an object with the following two functions.

var expect = function (val) {
  return {
    toBe: function expect(expected) {
      if (val === expected) return true;
      throw new Error(`Expected ${val} to be ${expected}`);
    },
    notToBe: function expect(expected) {
      if (val !== expected) return true;
      throw new Error(`Expected ${val} not to be ${expected}`);
    },
  };
};

console.log(expect(5).toBe(2)); // true
