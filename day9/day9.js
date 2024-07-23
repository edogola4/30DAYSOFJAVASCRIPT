// Write a function argumentsLength that returns the count of arguments passed to it.
// The function should be able to handle any number of arguments.
// The function should return 0 if no arguments are passed.

// The function should return 1 if only one argument is passed.
// The function should return 2 if two arguments are passed.
// The function should return 3 if three arguments are passed.


var argumentsLength = function(...args) {
    return args.length;
    }
    console.log(argumentsLength(1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16,
        17, 18, 19, 20, 21,
        22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
        32, 33, 34, 35, 36,

    ))
console.log(argumentsLength(1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16,
    17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
    32, 33, 34, 35, 36,
    37, 38, 39, 40, 41,
    42, 43, 44, 45, 46,
    47, 48, 49, 50, 51,
))