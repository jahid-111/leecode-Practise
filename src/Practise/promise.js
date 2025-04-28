// // console.log("hello");

// class Promise {
//   constructor(executor) {
//     // 1. Initialize the state to 'pending'
//     this.state = "pending";
//     this.value = undefined; // The resolved value or error
//     this.callbacks = []; // To store .then() and .catch() callbacks

//     // 2. Executor function is called with `resolve` and `reject`
//     try {
//       executor(this._resolve.bind(this), this._reject.bind(this));
//     } catch (error) {
//       this._reject(error);
//     }
//   }

//   // 3. Method to handle resolve
//   _resolve(value) {
//     if (this.state === "pending") {
//       this.state = "fulfilled";
//       this.value = value;
//       this._executeCallbacks();
//     }
//   }

//   // 4. Method to handle reject
//   _reject(error) {
//     if (this.state === "pending") {
//       this.state = "rejected";
//       this.value = error;
//       this._executeCallbacks();
//     }
//   }

//   // 5. Store callbacks and execute when promise settles
//   _executeCallbacks() {
//     // If promise is fulfilled, invoke onFulfilled callbacks
//     if (this.state === "fulfilled") {
//       for (const callback of this.callbacks) {
//         callback.onFulfilled(this.value);
//       }
//     }
//     // If promise is rejected, invoke onRejected callbacks
//     if (this.state === "rejected") {
//       for (const callback of this.callbacks) {
//         callback.onRejected(this.value);
//       }
//     }
//   }

//   // 6. `then` method to handle successful resolution
//   then(onFulfilled, onRejected) {
//     return new Promise((resolve, reject) => {
//       const callback = {
//         onFulfilled: (value) => {
//           try {
//             resolve(onFulfilled ? onFulfilled(value) : value);
//           } catch (error) {
//             reject(error);
//           }
//         },
//         onRejected: (error) => {
//           try {
//             reject(onRejected ? onRejected(error) : error);
//           } catch (error) {
//             reject(error);
//           }
//         },
//       };

//       if (this.state === "pending") {
//         this.callbacks.push(callback);
//       } else if (this.state === "fulfilled") {
//         callback.onFulfilled(this.value);
//       } else if (this.state === "rejected") {
//         callback.onRejected(this.value);
//       }
//     });
//   }

//   // 7. `catch` method to handle rejection
//   catch(onRejected) {
//     return this.then(null, onRejected);
//   }

//   // 8. `finally` method to handle final operations regardless of state
//   finally(onFinally) {
//     return this.then(
//       (value) => {
//         onFinally();
//         return value;
//       },
//       (error) => {
//         onFinally();
//         throw error;
//       }
//     );
//   }
// }

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
  console.log("Task Completed");
});

promise1.then((resolve, reject) => {
  console.log(resolve);
});

console.log(promise1);
