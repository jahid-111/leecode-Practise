// 2721. Apply Function to Each Element in Array

const promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          results[i] = result;
          completed += 1;
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
const arrFn = [
  () => Promise.resolve(10),
  () => Promise.resolve(20),
  () => Promise.resolve(30),
];

promiseAll(arrFn).then(console.log); // Output: [10, 20, 30]

// ======================== Faster Version ========================
const promiseAllFaster = function (functions) {
  let resultsArr = [];
  let completedFn = 0;

  return new Promise(function (resolve, reject) {
    functions.forEach((fn, index) =>
      fn().then(
        (result) => {
          resultsArr[index] = result;
          completedFn += 1;
          if (completedFn == functions.length) {
            resolve(resultsArr);
          }
        },
        (error) => reject(error)
      )
    );
  });
};

const arrFnFaster = [
  () => Promise.resolve("Faster"),
  () => Promise.resolve("Promise"),
  () => Promise.resolve("All"),
];

promiseAllFaster(arrFnFaster).then(console.log); // Output: [10, 20, 30]

// ================ project-like example ================
const getUser = () =>
  new Promise((res) => setTimeout(() => res({ id: 1, name: "Jahid" }), 100));
const getPosts = () =>
  new Promise((res) => setTimeout(() => res(["post1", "post2"]), 50));
const getComments = () =>
  new Promise((res) => setTimeout(() => res(["comment1"]), 75));

async function loadDashboardData() {
  const apiCalls = [getUser, getPosts, getComments];

  try {
    const [user, posts, comments] = await promiseAllFaster(apiCalls);
    console.log("========= Project-like example =========");
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
}

loadDashboardData(getUser, getPosts, getComments);
