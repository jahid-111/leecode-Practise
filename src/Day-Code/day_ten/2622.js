// class TimeLimitedCache {
//   constructor() {
//     this.cache = new Map();
//   }

//   set(key, value, duration) {
//     const isExist = this.cache.has(key);

//     if (isExist) {
//         clearTimeout(this.cache.get(key).timeoutId);
//       }

//     const timeoutId = setTimeout(() => {
//       this.cache.delete(key);
//     }, duration);
//     this.cache.set(key, { value, timeoutId });

//     return Boolean(isExist);
//   }
//   get(key) {

//     return this.cache.has(key) ? this.cache.get(key).value : -1;
//   }
//   count() {
//     return this.cache.size;
//   }
// }
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const isExist = this.cache.has(key);

    if (isExist) {
      clearTimeout(this.cache.get(key).timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutId });
    return isExist;
  }
  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }
  count() {
    return this.cache.size;
  }
}

const cache = new TimeLimitedCache();
console.log("Set : ", cache.set("a", 100, 2000)); // false
console.log("Get Cache a : ", cache.get("a")); // 1
console.log("Count : ", cache.count()); // 1

setTimeout(() => {
  console.log("Time get : ", cache.get("a")); // -1 after 1.1 seconds
  console.log("Count : ", cache.count()); // 0
}, 1100);

// ================ Faster Way ===================

class TimeLimitedCacheFast {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const existingEntry = this.cache.get(key);
    let alreadyExists = false;

    if (existingEntry && existingEntry.expiration > now) {
      alreadyExists = true;
      clearTimeout(existingEntry.timeoutId);
    }

    const expiration = now + duration;
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expiration, timeoutId });
    return alreadyExists;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    if (entry && entry.expiration > now) {
      return entry.value;
    } else {
      this.cache.delete(key); // Clean up expired entry if get is called
      return -1;
    }
  }

  count() {
    const now = Date.now();
    let count = 0;
    for (const [key, entry] of this.cache) {
      if (entry.expiration > now) {
        count++;
      } else {
        this.cache.delete(key); // Clean up expired entry while counting
      }
    }
    return count;
  }
}

// ================== Test Case =====================

const otpCache = new TimeLimitedCache(); // Imported from above

function generateOTP(userId) {
  const code = Math.floor(100000 + Math.random() * 900000);
  otpCache.set(userId, code, 30000); // Expires in 30 seconds
  return code;
}

function verifyOTP(userId, inputCode) {
  const stored = otpCache.get(userId);
  return stored !== -1 && stored === inputCode;
}
