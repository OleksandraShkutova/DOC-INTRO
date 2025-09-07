//1
let map = new Map ();
map.set(1, 'first');
map.set(3, 'third');
console.log('Map1:', map);

let  a = [[1, 'first'], [3, 'third']];
const [a1, a2] = a;
let map2 = new Map();
map2.set(a1[0], a1[1]);
map2.set(a2[0], a2[1]);
console.log('Map2:', map2);

console.log('Size Map2:', map2.size);

map2.set(2, 'second');
map2.set(4, 'fourth');
console.log('Map2:', map2);


map2.delete(4);
console.log('Map2:', map2);

console.log('Get 1:', map2.get(1));
console.log('Get 2:', map2.get(2));
console.log('Get 3:', map2.get(3));

console.log('Has 2:', map2.has(2));


const listKeys = [... map2.keys()];
console.log('listKeys:', listKeys);

const listValues = [... map2.values()];
console.log('listValues:', listValues);

2
const map3 = new Map();
map3.set('1', 'first').set('2', 'second').set('3', 'third');
console.log(map3);
function changedText(text) {
    return text
    .split(' ')
    .map(n => (map3.has(n)) ? map3.get(n) : n)
    .join (' ');
};

const text = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';
const newText = changedText(text);
console.log('newText:', newText);

//Примітка 
//може є метод, який заміняє string на number?
//чи необхідно через .map створити новий масив, перебравши новий після split та замінити '1' = 1 ....
//а вже потім .map(n => (map3.has(n)) ? map3.get(n) : n)
//не знаю як прописати





