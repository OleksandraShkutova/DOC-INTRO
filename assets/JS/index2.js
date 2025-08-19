/*
//View Spagetti
const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');
const counterEl = document.querySelector('#counter');

let counter = 0;
counterEl.textContent = counter;

function decCound(e){
    counter--
    counterEl.textContent = counter;
};
decBtn.addEventListener('click', decCound);

function incCount(e){
    counter++
    counterEl.textContent = counter;
};
incBtn.addEventListener('click', incCount);
*/

//MVVM  Model => View => ViewModel
//Model
class Counter {
    constructor(counter){
        this.counter = counter;
    }
    dec(){
        this.counter--;
    };
    inc(){
        this.counter++;
    };
};

//ViewModel
const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');
const counterEl = document.querySelector('#counter');

const count = new Counter(0);

updateView();

function decCound(e){
    count.dec();
    updateView();
};
decBtn.addEventListener('click', decCound);

function incCount(e){
    count.inc();
    updateView();
};
incBtn.addEventListener('click', incCount);

function updateView() {
    counterEl.textContent = count.counter;
};
