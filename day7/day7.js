/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
 */

function reduceArray(nums, fn, init) {
  // Initialize the accumulator with the initial value
  let val = init;

  // Iterate over each element in the input array
  for (let i = 0; i < nums.length; i++) {
    // Apply the reducer function to the current value and the current element
    val = fn(val, nums[i]);
  }

  // Return the final accumulated value
  return val;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const fn = (acc, curr) => acc + curr;
const init = 0;

const result = reduceArray(nums, fn, init);
console.log(result); // Output: 15
