/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

 */
function timeLimit(fn, t) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject('Time Limit Exceeded');
                }, t);
                fn(...args).then((result) => {
                    clearTimeout(timer);
                    resolve(result);
                    }).catch((err) => {
                        clearTimeout(timer);
                        reject(err);
                        });
                        });
                        };
                    }
// print statement
console.log(timeLimit((a, b) => Promise.resolve(a + b), 1000)(
    1,
    2
    ).then(console.log)
    .catch(console.log));
    