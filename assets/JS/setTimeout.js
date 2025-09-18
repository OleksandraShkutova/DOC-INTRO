'use strict'

/*
//При натисканні на кнопку через 2с. змінити її колір на червоний
const btn = document.querySelector('button');

function changeColor (e){
    btn.style.backgroundColor = 'red';
};

btn.onclick = setTimeout(changeColor, 2000);

//АБО
function changeColor (e){
    setTimeout(() => {
        e.target.style.backgroundColor = 'red'
    }, 2000);
};

btn.onclick = changeColor;
*/

//після натисканні кнопки через 2с. змінювати її колір рандомно

//stopwatch

//start запустити накопичення с.

//stop зупинити накопичення с.

//reset скинути накопичення с.

let time = new Date(0);
//let time = 0;
let intervalId = null;

const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
    '.btn-conteiner > button'
);

updateTime(time);

function startBtnHandler(e) {
    const DELEY = 100;
    function tick() {
        time.setMilliseconds(time.getMilliseconds() +DELEY);
        updateTime(time);
    }
    if (!intervalId) {
        intervalId = setInterval( tick, DELEY);
    } 
}
startBtn.onclick = startBtnHandler;

function stoptBtnHandler() {
    clearInterval(intervalId);
    intervalId = null;
};
stopBtn.onclick = stoptBtnHandler; 

function resetBtnHandler(){
    time = new Date(0);
    updateTime(time);

}
resetBtn.onclick = resetBtnHandler;

function updateTime(time) {
    timeEl.textContent = `${formatMinutesOrSeconds(time.getMinutes())}:${formatMinutesOrSeconds(time.getSeconds())}.${formatMilliseconds(time.getMilliseconds())}`;
};

// форматуємо двозначні числа: якщо число з однієї цифри,
// то додаємо попереду 0: 5 => 05
function formatMinutesOrSeconds(m) {
  return m < 10 ? `0${m}`:m;
}

// форматуємо тризначні числа:
// якщо число з однієї цифри, то додаємо попереду 00:  5 => 005
// якщо число з двох цифр, то додаємо попереду 0    : 55 => 055
function formatMilliseconds(ms) {
  return ms < 100 ? (ms < 10 ? `00${ms}`:`0${ms}`):ms;
}


