// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)

// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

/* 
Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);
  const cancelFn = function () {
    clearTimeout(timeoutId);
  };
  return cancelFn;
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);

// =================== Faster Way ===================
// var cancellable = function (fn, args, t) {
//   const t1 = setTimeout(() => fn(...args), t);
//   return () => clearTimeout(t1);
// };

// ==========================================================================================================
// ---------------------------------------------- Use Purpose
// ==========================================================================================================

/* import React, { useState, useEffect } from 'react';

const cancellable = (fn, args, t) => {
  const timeoutId = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeoutId);
};

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Simulate an API search
  const searchAPI = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    setIsSearching(true);
    // Mock API response
    setTimeout(() => {
      setResults([`Result for "${searchTerm}"`, `Another result`]);
      setIsSearching(false);
    }, 1000);
  };

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Create a cancellable delayed search
    const cancelSearch = cancellable(searchAPI, [query], 500);

    // Cleanup: Cancel the pending search if query changes or component unmounts
    return () => {
      cancelSearch();
      console.log('Cancelled previous search');
    };
  }, [query]);

  return (
    <div>
      <h2>Debounced Search with Cancellation</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      {isSearching && <p>Searching...</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent; */
