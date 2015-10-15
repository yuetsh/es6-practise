'use strict';

var myPromise = function myPromise() {
    return new Promise(function (resolve, reject) {
        var number = 5;
        if (number > 4) {
            resolve('Promise was resolved');
        } else {
            reject(new Error('Promise was rejected'));
        }
    });
};

myPromise().then(function (resolved) {
    console.log(resolved);
})['catch'](function (rejected) {
    console.log(rejected);
});
