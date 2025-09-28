'use strict';
console.log('Hi!')

/*
function promisCallback(resolve, reject){
    //resolve('success');
    reject('oooops!!!');
}

let myPromise = new Promise(promisCallback);

myPromise
    .then(value => console.log('result:', value))
    .catch(err => console.log('error:', err));

console.log('Bay!');


//promise

const executor = function (resolve, reject) {
    if (Math.random() < 0.5){
        resolve('cat is alive');
    } else {
        reject(new Error('cat is not alive'));
    }
};

const shredCat = new Promise(executor);

shredCat
    .then(data => console.log(data))
    .catch(err => console.log(err));


//setTimeout(f(), 1000) => delay(1000).then(() => console.log('text'));

function daley(time) {
    function executor(res, rej) {
        if (typeof time !== 'number') {
            rej(new TypeError('time must be number'))
        }
        if (time < 0 || !Number.isInteger(time)) {
            rej(new RangeError('time must be positive'))
        }
        setTimeout(res, time);
    }
    return new Promise(executor);
}

daley(2000)
    .then(() => console.log('text'))
    .catch(err => console.log(err));
*/
// promise img
const src = 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg';

loadImage(src)
  .then(img => {
    document.body.append(img);
  })
  .catch(e => console.log('e :>> ', e));

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      rej(new Error('image was not loaded'));
    };
  });
};
