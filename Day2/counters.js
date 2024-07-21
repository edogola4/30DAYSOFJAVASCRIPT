/**
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 * 
 */

var createCounter = function (n) {
    let count = n;
    return function () {
        count++;
        return count;
    }
}

const counter = createCounter(5);
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 9
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

