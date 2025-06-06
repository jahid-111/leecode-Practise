// Given an integer array nums, a reducer function fn, and an initial value init,
// return the final result obtained by executing the fn function on each element of the array,
// sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// ============ Link to the problem ============
// : https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

const array = [10, 20, 30, 40, 50];

const calculationFn = function (acc, curr) {
  return acc + curr;
};

const reduce = function (nums, fn, init) {
  let val = init;

  for (const element of nums) {
    console.log("Element", element);
    val = fn(val, element);
  }

  return val;
};

const result = reduce(array, calculationFn, 0);
console.log(result); // 150

const nums = [1, 20, 34, 90];

const reducer = nums.reduce((acc, curr, index, arr) => {
  console.log(
    ` Storage Arr acc: ${acc}, current Value: ${curr}, index: ${index}, array: [${arr}]`
  );

  return acc + curr;
}, 0);
console.log(reducer);
