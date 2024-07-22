/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
 */
function filterArray(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
            }
            }
            return filteredArr;
            }
            console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9],
                function (num, index) {
                    return num % 2 === 0;
                    }
                    )
                    );
                   

// notes on the above code
// the function filterArray takes two arguments, arr and fn
// arr is an array of integers
// fn is a function that takes one or two arguments
// the function returns a filtered array filteredArr
// the filteredArr should only contain the elements from the arr for which the expression fn(arr[i],
// i) evaluates to a truthy value
// a truthy value is a value where Boolean(value) returns true
// the function uses a for loop to iterate over the arr
// the function uses the if statement to check if the expression fn(arr[i], i) evaluates to
// a truthy value
// if the expression evaluates to a truthy value, the function pushes the element from the arr
// to the filteredArr   
// the function returns the filteredArr
// the function is called with the arr and fn arguments
// the function returns the filteredArr
// the function is called with the arr and fn arguments
// the function returns the filteredArr
