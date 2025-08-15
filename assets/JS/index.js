//обробка подій
const btn = document.getElementById('clickBtn');
console.log(btn);

const clickHandler = function(e){
    console.log('Button was clicked!');
};
btn.onclick = clickHandler;

const loginBtn = document.getElementById('loginBtn');

const loginHandler = function(e){
    console.log('Log in in prosses...');
};
loginBtn.addEventListener('click', loginHandler);
loginBtn.removeEventListener('click', loginHandler);

//
const loginMouseMoveHandler = function(){
    console.log('Click me!!!');
};
loginBtn.addEventListener('mousemove', loginMouseMoveHandler);

//
const hiBtn = document.getElementById('hiBtn');
const hiHendler = function(e){
    console.log('Hello, world!');
};
hiBtn.addEventListener('click', hiHendler);
