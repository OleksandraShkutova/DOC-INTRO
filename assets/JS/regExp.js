//Регулярні вирази

//const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp('qwerty');

//const regExp2 = /шаблон/прапорці;
//ig незалежно від регістра, всі qwerty по к-ті
const regExp2 = /qwerty/ig;


//методи test повертає true/false 
//шаблон.test('пароль')

console.log(regExp2.test('123Qwerty456Qwerty'));

//метод match повертає 
//'пароль'.match(шаблон)
// поверне масив з 2-х елементів [qwerty, Qwerty], бо прапорець i та g
console.log('123qwerty456Qwerty'.match(regExp2));

console.log('123qwerty456Qwerty'.replace(regExp2, 'sasha'));

// Межі ------------------------------------------------------------
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \B - не межа слова

// Перевірити, що qwerty э всим рядком
console.log('qwerty'.match(/^qwerty$/));

// Task: Перевірити, чи стоїть qwerty на початку рядка, ігноруючи регістр
// "qwerty"          +
// "qwertynjknkjnkl" +
// "QWerty513"       +
// "777qwerty"       -
console.log('qwerty'.match(/^qwerty/i));

// Перевірити, чи dog є окремим словом
console.log('My dog is cute'.match(/\bdog\b/i));

console.log('My hotdog is cute'.match(/\bdog\b/i));

// . - один будь-який символ ---------------------------------------------

// Перевірити, чи пароль починається на qw  і закінчується на ty,
// посередині має бути 2 символи
console.log('qwerty'.match(/^qw..ty$/));
console.log('qw55ty'.match(/^qw..ty$/));
console.log('qwfty'.match(/^qw..ty$/));

//рядок починається на 111 і має 7 символів
console.log('masha11'.match(/^111....$/));
console.log('111ha11'.match(/^111....$/));

//Контифікатори
//{8} вісім раз певний символ 1{3} => 111
//{1,10}
// + - {1, }
// * - {0, }
// ? - {0,1}

//console.log('111ha11'.match(/^111....$/));
console.log('111ha11'.match(/^1{3}.{4}$/));

//перевірити чи відповідає рядок imail 1-5@1-5
console.log('111ha@11'.match(/.{1,5}@.{1,5}$/));
console.log('111ha@1168924'.match(/.{1,5}@.{1,5}$/));
console.log('111ha@'.match(/.{1,5}@.{1,5}$/));
console.log('@18691'.match(/.{1,5}@.{1,5}$/));
console.log('111@11666'.match(/.{1,5}@.{1,5}$/));


// Альтернативні символи / один з групи символів ---------------------

// \d = [0123456789] = [0-9]
// \D = ^\d не число
// [a-z] - \w
// [A-Z] - \w
// [a-zA-Z] - \w
// \w [a-zA-Z0-9_] - символи слова
// \W = ^\w не символ слова
// \s - space
// \S не пробіл

// Перевірити, чи в рядку тільки цифри
console.log('1234560'.match(/^[0123456789]+$/));
// or
console.log('1234560'.match(/^[0-9]+$/));
// or
console.log('1234560'.match(/^\d+$/));

// Task: Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
console.log('+380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+38088-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));

console.log('380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+380-88-444-5555eeee'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+380-11-111-1111'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));

//номер тел. у форматі (+380-2ц-3ц-4ц)
console.log('+380-50-776-5094'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));
console.log('+38050-776-5094'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));

//Перевірити на імя 1-20 букв
console.log('Sashasashasashasashas'.match(/^\w\D{1,19}$/i))
console.log('Sasha1111'.match(/^\w\D{1,19}$/i))
console.log('Sasha11sasha'.match(/^\w\D{1,19}$/i))
console.log('Sasha'.match(/^\w\D{1,19}$/i))

//Первірити, що число 11111.11111 в т.ч з мінусом
console.log('-111.555'.match(/^-?\d+\.\d+$/));

//Альтернатива або або
// [123] = (1|2|3) 
//(cat|dog)
console.log('I like cat'.match(/\b(cat|dog)s?\b/));
console.log('I like dogs'.match(/\b(cat|dog)s?\b/));

//Перевірка складного імені
console.log('Anna-Maria'.match(/^\w\D{1,19}(\w\D{1,19})?$/));

//переписати на +380-50-776-50-95
console.log('+380-11-111-11-11'.match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/));
// щоб в номері були тільки існуючі коди (99,98,97,96,95,73,50,67,68,63,93)
console.log(
  '+380-98-111-11-11'.match(
    /^\+380-(99|98|97|96|95|73|50|67|68|63|93)-\d{3}(-\d{2}){2}$/
  )
);

//Особливості
//знайти цитату
console.log('I say "yes", but think and say "no"'.match(/".*?"/g));

//Виокремити речення
//Afgh ghj dfgh. Jghjk rtyui dfok.
console.log('Afgh ghj dfgh. Jghjk rtyui dfok.'.match(/[A-Z].*?\./g));

//I bay 10 item by 1$
console.log('I bay 10 item by 1$'.match(/\d+(?=\$)/g));

// Для перевырки пароля
// довжина: 8-16, мають бути букви верхнього і нижнього регістру, цифри, спец. символи
// Qq1.gggg
console.log('Aq1g.qqy'.match(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/));

//метод replace() заміна

//'dfgh           fghj ghj ghj    dfgh' => 'dfgh fghj ghj ghj dfgh'
const str1 = 'dfgh           fghj ghj ghj    dfgh'
let strChanged = str1.replace(/\s{2,}/g, ' ');
console.log(strChanged);

//Прибрати ненормативну лексику з повідомлень (fuck, ass, asshole)
const str2 = 'Fuck you. )))) You are asshole';
const str2Result = str2.replace(/(fuck|ass|asshole)\b/gi, '!@#$');
console.log(str2Result);

const str3 =
  'Fuck you dude! AAAAAASSHOLE!! FuCCCKKK Fuck Fuck Fuck Fuck Fuck!!!';
const str3Result = str3.replace(/(f+u+c+k+|a+s{2,}h+o+l+e+)/gi, '####');
console.log(str3Result);

//метод split() розділення по критеріям
// Отримати масив слів з рядка
const str4 = 'Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf';
const str4Result = str4.split(/\s{1,}/g);

// Task: Отримати масив з рядка дати з роком, місяцем, датою
// '1999-01-01' => ['1999', '01', '01']
// '1999/01/01' => ['1999', '01', '01']
// '1999.01.01' => ['1999', '01', '01']

const str5 = '1999-01-01';
const str5Result = str5.split(/-|\/|\./g);
console.log(str5Result);

