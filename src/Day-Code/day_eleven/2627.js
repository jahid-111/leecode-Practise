// 2627. Debounce
/* 
Given a function fn and a time in milliseconds t, return a debounced version of that function.

# A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

** For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

** The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

** If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
 */
const debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

function userInput(...arg) {
  const text = arg[0];

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      console.log(text[i]);
    }, 200 * i);
  }
}

const debouncedInput = debounce(userInput, 35);

debouncedInput("hello");
debouncedInput("JavaScript Developer");

// ==================== Faster Way ===================

const debounceFaster = function (fn, t) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// debounceFaster(userInput, 35)("Faster Way");

// ================ Use Case Ex ===================

// function debounce(fn, delay) {
//     let timeout; // 🧠 Keeps track of the current timer

//     return function (...args) {
//       clearTimeout(timeout); // 🧹 Clear the previous timer
//       timeout = setTimeout(() => {
//         fn(...args); // ✅ Run the function after the delay
//       }, delay);
//     };
//   }

//   // 👇 This is the function we want to run after the user stops typing
//   function handleInput(value) {
//     console.log("User typed:", value);
//   }

//   // 👇 Create a debounced version of our function
//   const debouncedInput = debounce(handleInput, 1000); // 1000ms = 1 second

//   // 👂 Listen for typing in the input field
//   document.getElementById("myInput").addEventListener("input", function (e) {
//     debouncedInput(e.target.value); // 🧠 Call debounced function with the input value
//   });
