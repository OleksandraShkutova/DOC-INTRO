/*
//Атребути

const p1 = document.querySelector('#p1');
console.dir(p1);

//доступ до атребутів, як властивостей відповідних елеметів-обєктів
console.log('p1.title:', p1.title);

console.log('p1.id:', p1.id);

//булеві значення
//p1.hidden = true;

//зміна і задання значення
p1.title = 'new title';
p1.style.color = 'blue';
p1.style.backgroundColor = 'grey';

console.log('All attributes p1', p1.attributes);

//Або
const p2 = document.querySelector('#p2');
p2.setAttribute('title', 'paragraph2');
p2.setAttribute('style', 'font-size: 32px; color: red');
console.log('All attributes p2', p2.attributes);
//p2.setAttribute('hidden', 'hidden');
console.log(p2.getAttribute('style'));

//завдання для body backgrounde
const b = document.querySelector('body');
b.style.backgroundColor = 'green';
document.body.setAttribute('style', 'background-color: blue');

//зміна контенту
p2.textContent = 'New content';

// image

const imgAtt = {
    src: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    alt: 'cat',
};

const imgEl = document.querySelector('img');
imgEl.src = imgAtt.src;
imgEl.alt = imgAtt.alt;
imgEl.setAttribute('style', 'width: 200px; padding: 20px; border: 20px solid grey')
*/

//При натисканні на кнопку: змінити колір тла для заголовку першого рівня
//встановити src та alt для головного зображення зображення.

const clickHandler = function(e) {
    document.querySelector('h1').setAttribute('style', 'background-color: blue');

    const mainImgEl = document.querySelector('.mainImg');
    mainImgEl.src = 'https://www.un.org/sites/un2.un.org/files/field/image/2024/06/ocean-2.jpg';
    mainImgEl.alt = 'ocean';
    mainImgEl.style = 'width: 100%';

    document.querySelectorAll('h2').forEach(h2 => {h2.setAttribute('style', 'font-size: 20px; color: green')});

    document.querySelectorAll('.sectionImg').forEach(sectionImg => {
        sectionImg.src = 'https://zn.ua/img/forall/u/0/-1/users/Nov2019/245572.jpg';
        sectionImg.alt = 'wive';
        sectionImg.style = 'width: 200px; hight: 200px;';
    });    
};
document.querySelector('#btn').addEventListener('click', clickHandler);


