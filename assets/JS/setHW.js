//1
const set1 = new Set();
set1.add(1).add(2).add(3);
console.log('set1:', set1);

console.log(set1.has(3));
console.log(set1.has(4));

set1.add(5).add(10).add(15);
console.log('set1:', set1);

const sumOfSet1 = calcSum(set1);
console.log('sum of number:', sumOfSet1);
function calcSum(number) {
    let summ = 0;
    for (let number of set1){
        console.log(number);
        summ +=  number;
}
    return summ;
};

set1.delete(2);
console.log(set1);

set1.clear();
console.log(set1);

//2
const arr = [1,6,9,4,9,1,5,6];
const set2 = new Set(arr);
console.log('set2:', set2);
const arrFromSet2 = Array.from(set2);
//const arrFromSet2 = Array.from(new Set(arr));
console.log('array fron set2', arrFromSet2);


const arr2 = [5, 10, 11];
const set3 = new Set([...arr, ...arr2]);
console.log('set all:', set3);
const arrFromSet3 = Array.from(set3);
//const arrFromSet3 = Array.from(new Set([...arr, ...arr2]));
console.log('array fron set2', arrFromSet3);

//3
const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

//масив імен користувачів (унікальних)
let userNames = [... new Set(messages.map( messages => messages.name))];
console.log('user names:', userNames);
//{name:[messages],name:[messages]}
const userNamesWithMessages = {};
userNames.forEach(
    n => userNamesWithMessages[n] = messages.filter(m => m.name === n).map(m => ({messages: m.message, date: m.date}))
);

console.log('userNames with messages:', userNamesWithMessages);

//Коментар
//цікаво як привязати дату до кожного повідомлення, щоб вони виводильсь поряд. 
//може через рест параметри якось
