/* 1.   Given an array arr and a function fn, return a sorted array sortedArr.
    2.   You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
     3.     sortedArr must be sorted in ascending order by fn output.
 */
/* You may assume that fn will never duplicate numbers for a given array.
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function (arr, fn) {
  // return arr.slice().sort((a, b) => fn(a) - fn(b)); // method 1
  return arr.toSorted((a, b) => {
    return fn(a) - fn(b); // method 2
  });
};

// Example usage:
const arr = [5, 4, 1, 2, 3];
const fn = (x) => x; // Identity function
const sort = sortBy(arr, fn);
// console.log(sort);

// ========================
// ------------------------------- Project Use Case
// ========================

const tasks = [
  { id: 1, title: "Fix bugs", urgency: 8, importance: 7 },
  { id: 2, title: "Team meeting", urgency: 4, importance: 5 },
  { id: 3, title: "Update docs", urgency: 3, importance: 2 },
];
const priorityFn = (task) => task.urgency * 2 + task.importance;
const sortedTasks = sortBy(tasks, priorityFn);
console.log(sortedTasks);
// console.log(priorityFn(tasks))
