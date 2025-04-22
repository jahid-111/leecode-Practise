// console.log("Hello World");
// 2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

// ==================== Live Link ====================
// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

const arr = [1.2, 3, 4, 5, 100, 121];

const argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(...arr)); // Output: 4
