// // Interval Cancellation

// // Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// // After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// // setTimeout(cancelFn, cancelTimeMs)

// // The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellable = function (fn, args, t) {
  fn(...args);
  const timerId = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    clearInterval(timerId);
  };
};
const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [
  //     {"time":0,"returned":8},
  //     {"time":35,"returned":8},
  //     {"time":70,"returned":8},
  //     {"time":105,"returned":8},
  //     {"time":140,"returned":8},
  //     {"time":175,"returned":8}
  // ]
}, cancelTimeMs + t + 15);

// ============================ Faster Way ============================

/* var cancellable = function(fn, args, t) {
    // Call the function immediately
    fn(...args);

    const timer = setInterval(() => {
        fn(...args);
    }, t);

    const cancel = function() {
        clearInterval(timer);
    };

    return cancel;
}; */

// ================================================================
// ----------------------- Use Purpose -reactJs -----------------------
// ================================================================

/* import { useEffect, useState } from "react";

// cancellable function
function cancellable(fn, args, t) {
  fn(...args); // Call the function immediately once
  const intervalId = setInterval(() => {
    fn(...args); // Call repeatedly every 't' milliseconds
  }, t);

  return () => clearInterval(intervalId); // Return cancel function
}

// React Component
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment count by 1 every second
    const cancelFn = cancellable(() => {
      setCount((prev) => prev + 1);
    }, [], 1000);

    return () => {
      cancelFn(); // Stop the interval when component unmounts
    };
  }, []);

  return <h1>Count: {count}</h1>;
}
 */
