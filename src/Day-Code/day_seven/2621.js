// // // // Given a positive integer millis,
// // // // write an asynchronous function that sleeps for millis milliseconds.
// // // // It can resolve any value.

// // // // Note that minor deviation from millis in the actual sleep duration is acceptable.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(() => resolve(millis), millis));
}

let t = Date.now();
sleep(100).then((res) => {
  const time = Date.now() - t;
  console.log(time);
  console.log(res);
}); // 100
