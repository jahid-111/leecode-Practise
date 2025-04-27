// Given two promises promise1 and promise2,
// return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

// ================== Link ==================
// https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 300)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(4);
  }, 300)
);

addTwoPromises(promise1, promise2).then(console.log); // 4

// =====================================
// --------------  Faster way --------------
// =====================================

const addTwoPromisesFast_ms = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then((values) => {
    const [res1, res2] = values;
    return res1 + res2;
  });
};
