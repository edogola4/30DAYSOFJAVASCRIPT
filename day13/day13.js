/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 * 
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            }, millis);
            });
            }
            module.exports = sleep;
            sleep(1000).then(() => console.log('done'));
            sleep(1000).then(() => console.log('done'));

console
