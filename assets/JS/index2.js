
// керування подіями

const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');
/*
function btnClickHandler (e){
    console.log('this:', this);
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);
console.log('--------------------------------------------');

    //this.style.backgroundColor = 'red'
    e.target.style.backgroundColor = 'red';
};

// порядок виконання на сплиття button=>section=>body
button.addEventListener('click', btnClickHandler);
section.addEventListener('click', btnClickHandler);
body.addEventListener('click', btnClickHandler);

//порядок виконання body(на зануренні)=> button=> section
button.addEventListener('click', btnClickHandler);
section.addEventListener('click', btnClickHandler);
body.addEventListener('click', btnClickHandler, {capture: true});
*/

//припинення розповсюдження подій

let clickCounter = 0;
body.addEventListener('click', () => {
    clickCounter++;
    console.log(clickCounter);
});

button.addEventListener('click', e => {
    e.stopPropagation();
    //зупинити розповсюдження події на сплиття на кнопці
});

//тобто, при нажиманні кнопки дія не буде виконуватись на секції та баді, 
//бо зупиниться на самій кнопці

