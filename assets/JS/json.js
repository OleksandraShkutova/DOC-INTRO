'use strict';

alert('qwerty'); // блокування - погано!

// JSON

console.log('before timeoutv');
const obj = {
  number: 1,
  bigint: 10n,
  string: 'string',
  array: [1, 2, false],
  boolean: true,
  null: null,
  plainObject: { prop: 10 },
  // метод не => JSON
  getNumber() {
    return this.number;
  },
  // undefined => JSON
  undefined: undefined,
};

setTimeout(() => {
  console.log('in timeout'); // => webApi
}, 1000);
// obj => JSON серіалізація, кодування
const objJson = JSON.stringify(obj);

console.log('after timeout');

// call stack
function f1() {
  console.trace();
  console.log('end');
}
function f() {
  console.trace();
  f1();
}

f();
// JSON => obj десеріалізація, декодування
const parseObj = JSON.parse(objJson);