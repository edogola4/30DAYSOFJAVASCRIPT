/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 */
function once(fn) {
    let called = false;
    return function() {
        if (called) {
            return undefined;
            }
            called = true;
            return fn.apply(this, arguments);
            }
            }
            module.exports = once;
// print statement
console.log(once(function() { return 1; })());

