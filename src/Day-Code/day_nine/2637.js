// Given an asynchronous function fn and a time t in milliseconds,
// return a new time limited version of the input function.
// fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds,
// the time limited function should resolve with the result.

// If the execution of the fn exceeds the time limit,
// the time limited function should reject with the string "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      const timerId = setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timerId);
          res(result);
        })
        .catch((err) => {
          clearTimeout(timerId);
          rej(err);
        });
    });
  };
};

const timer = (t) => new Promise((res) => setTimeout(res, t));

const limited = timeLimit(timer, 100);

limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// ======================== Faster Solution ========================

// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     let promise = new Promise((res, rej) => {
//       let timeout = setTimeout(() => {
//         rej("Time Limit Exceeded");
//       }, t);

//       fn(...args)
//         .then(res)
//         .catch(rej)
//         .finally(() => {
//           clearTimeout(timeout);
//         });
//     });
//     return promise;
//   };
// };

// ====================================== Use Purpose ======================
// useEffect inside a React component
/* useEffect(() => {
  const fetchData = timeLimit(() => fetch('/api/data').then(res => res.json()), 3000); // 3s limit

  fetchData()
    .then(data => setState(data))
    .catch(err => console.error(err)); // Logs "Time Limit Exceeded" if too slow
}, []);
 */
