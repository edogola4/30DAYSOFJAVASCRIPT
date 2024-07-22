/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
 */

function transformArray(arr, fn) {
  // Initialize an empty array to hold the transformed elements
  let transformedArray = [];

  // Iterate over each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Apply the transformation function to each element and its index
    transformedArray[i] = fn(arr[i], i);
  }

  // Return the transformed array
  return transformedArray;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const fn = (element, index) => element + index;

const result = transformArray(arr, fn);
console.log(result); // Output: run node day5.js

