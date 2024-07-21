/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

/**
 * To create a function that returns another function that always returns "Hello World" in JavaScript, you can use a technique called "function currying". This involves creating a function that returns another function that has access to the original function's variables.
 */
function createHelloWorld() {
    const greeting = "Hello world"

    return function () {
        return greeting;
    };
}
/**Create a function that will return "Hello World" */

const myFunction = createHelloWorld();

// Display the result in the terminal
console.log(myFunction());


// To run the above code open the Terminal and type:
// node createHelloWorld.js
// The output will be Hello World