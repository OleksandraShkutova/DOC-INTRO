console.log(document);

console.log(document.head);

console.log(document.body);

const rootEl = document.getElementById('root');
console.log('rootEl:', rootEl);
console.dir(rootEl);

const divEl = document.getElementsByTagName('div');
console.log('divEl:', divEl);
console.log(divEl[0]);

const classEl = document.getElementsByClassName('content');
console.log('classEl:', classEl);

const rootEl3 = document.querySelector('#root');
console.log(rootEl3);

const divAll = document.querySelectorAll('div');
console.log(divAll);

//отримати список елементів з класом content

console.log(document.querySelectorAll('.content'));
