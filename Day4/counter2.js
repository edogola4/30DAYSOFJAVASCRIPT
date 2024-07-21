/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

 */

function createCounter(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}

// Example usage:
const counter = createCounter(10);

console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset());     // 10
console.log(counter.decrement()); // 9


// NOTES
// 1. The function createCounter should return an object with three functions.
// 2. The three functions are increment, decrement, and reset.
// 3. The increment function should increase the current value by 1 and then return it.
// 4. The decrement function should reduce the current value by 1 and then return it.
// 5. The reset function should set the current value to init and then return it.
// 6. The init parameter should be used to set the initial value of the counter.
// 7. The returned object should have the three functions as properties.
// 8. The returned object should have the current value as a property.
// 9. The returned object should have the init value as a property.
// 10. The returned object should have the increment, decrement, and reset functions as properties.
// 11. The returned object should have the current value as a property.
// 12. The returned object should have the init value as a property.
// 13. The returned object should have the increment, decrement, and reset functions as properties.


// Explanation
/*Define the createCounter Function: This function takes an initial integer init as an argument and initializes a variable currentValue with this value.
Return an Object with Three Methods: The function returns an object containing three methods:
increment: This method increases currentValue by 1 and returns the new value.
decrement: This method decreases currentValue by 1 and returns the new value.
reset: This method sets currentValue back to the initial value init and returns the reset value.*/