let myPromise = function() {
    return new Promise((resolve, reject) => {
        let number = 5;
        if (number > 4) {
            resolve('Promise was resolved');
        } else {
            reject(new Error('Promise was rejected'));
        }
    });
};

myPromise().then((resolved) => {
    console.log(resolved);
}).catch((rejected) => {
    console.log(rejected);
});
