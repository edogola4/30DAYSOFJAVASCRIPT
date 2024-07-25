/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
 */
function throttle(fn, args, t) {
    let cancelFn;
    let timer;
    let cancelTimeMs = t * 1000;
    let cancelTime = Date.now() + cancelTimeMs;
    function cancel() {
        clearTimeout(timer);
        cancelFn = null;
        }
        function run() {
            fn(...args);
            timer = setTimeout(run, t * 1000);
            }
            run();
            return cancel;
            }
            module.exports = throttle;
            // print statement
             console.log(throttle(console.log, [1, 2, 3], 1
             ));
             


