/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 * 
 */
function sumPromise(promise1, promise2) {
    return new Promise((resolve, reject) => {
        Promise.all([promise1, promise2]).then((values) => {
            resolve(values[0] + values[1]);
            }).catch((err) => {
                reject(err);
                });
                });
                }
// print statement
console.log(sumPromise(1, 2));
