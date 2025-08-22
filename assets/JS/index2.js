// керування подіями

const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

function btnClickHandler (e){
    console.log('this:', this);
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);

    this.style.backgroundColor = 'red';

};

button.addEventListener('click', btnClickHandler);

