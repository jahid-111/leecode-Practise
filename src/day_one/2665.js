// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
  let current = init;
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => {
      current = init;
      return current;
    },
  };
}
// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.decrement()); // Output: 6
console.log(counter.reset()); // Output: 5
