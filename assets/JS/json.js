'use strict';

/*alert('qwerty'); // блокування - погано!

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
*/


// Promise

// callback виконається через 1000мс
// setInterval(callback, 1000);

// callback виконається, коли буде подія click
// button.addEventListener('click', cb)

//Задача
//відобразити на сторінці температуру з одиницею виміру
//встановити колір:- синій, 0 - чорний, до 40 -зелений, більше чи рівне 40 - червоний

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto';

//Підвантажуємо дані з API за допомогою методу fetch
fetch(weatherUrl)
  .then(response => response.json())
  .then(data => generateWeather(data))
  .catch(err => console.log('error: ', err));
 
  
function generateWeather({
    current_weather: {temperature, windspeed},
    current_weather_units: {temperature: tempUnit, windspeed:windUnit},
}){
    //temperature = 50;
    const currentTemperatureEl = document.createElement('div');
    currentTemperatureEl.textContent = `${temperature} ${tempUnit}`;
    currentTemperatureEl.style.color = calcTemperature(temperature);

    const currentWindspeenEl = document.createElement('div');
    currentWindspeenEl.textContent = `${windspeed} ${windUnit}`;

    document.body.append(currentTemperatureEl, currentWindspeenEl);
}  

function calcTemperature(temperature) {
    if (temperature < 0) {
        return 'blue';
    } else if (temperature === 0) {
        return 'black';
    } else if (temperature > 0 && temperature < 40) {
        return 'green';
    } else {
        return 'red';
    }
}
 