// console.log("Hello World");

// /**
//  * @param {Object|Array} obj
//  * @return {boolean}
//  */
// const isEmpty = function (obj) {
//   // Step 1: Convert the input object or array to a JSON string
//   const objString = JSON.stringify(obj);
//   // Step 2: Parse the string back into a new object (deep copy)
//   const parsedObj = JSON.parse(objString);

//   // Step 3: Create a JSON string for an empty object
//   const emptyObjString = JSON.stringify({});

//   // Step 4: Parse that string into an empty object
//   const parsedEmpty = JSON.parse(emptyObjString);
//   console.log(parsedEmpty); // For debugging

//   // Step 5: Compare the two parsed objects

const isEmpty = function (obj) {
  if (Array.isArray(obj)) return obj.length === 0;

  return Object.keys(obj).length === 0;
};

// const obj = { x: 5, y: 42 };
const obj = [1, 2, 3, 5];
isEmpty(obj); // false

console.log(isEmpty(obj)); // false

// ========================== Faster Way ==========================

const isEmptyFaster = (obj) =>
  Array.isArray(obj) ? obj.length === 0 : !Object.keys(obj).length;

// const obj = { x: 5, y: 42 };
const objFaster = [1, 2, 3, 5];
isEmpty(objFaster); // false

console.log(isEmpty(objFaster)); // false

// ================= Use case =================

// if (isEmpty(userData)) return <p>No user data found.</p>;

// 1. You're building a dashboard that fetches user data from an API. Sometimes the response could be:

// 2. an empty object if no user data is found

// 3. an empty array if a list (e.g., tasks, posts) is empty
