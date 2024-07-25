/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.


 */
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const expiryTime = now + duration;

    const keyExists = this.cache.has(key);

    if (keyExists) {
      clearTimeout(this.cache.get(key).timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expiryTime, timeoutId });

    return keyExists;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    if (entry && entry.expiryTime > now) {
      return entry.value;
    } else {
      this.cache.delete(key);
      return -1;
    }
  }

  count() {
    const now = Date.now();
    let validCount = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiryTime > now) {
        validCount++;
      } else {
        this.cache.delete(key);
      }
    }

    return validCount;
  }
}


 const timeLimitedCache = new TimeLimitedCache()
 console.log(timeLimitedCache.set(1, 42, 1000)); // false
  console.log(timeLimitedCache.get(1)); // 42
  console.log(timeLimitedCache.count()); // 1
 



