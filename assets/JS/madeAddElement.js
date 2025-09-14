//Add section header ---footer
//made
const section = document.createElement('section');
const divRoot = document.querySelector('#root');
//add
divRoot.append(section);
section.textContent = 'content in section';
section.style.backgroundColor = 'blue';

const h2 = document.createElement('h2');
divRoot.prepend(h2);
h2.textContent = 'hhhhhhhhhhh';

const btn = document.createElement('button');
section.after(btn);
btn.textContent = 'button';
btn.classList.add('btn');
const classBtn = document.querySelector('.btn')

//delete

classBtn.addEventListener('click', function(){
    this.remove();
});

//section.remove();
//кнопка лишилась, бо вона не є дочірнім, а сусіднім для секції, 
//це як лексичне серодовище - 
//функція привязки зникла, але сам елемент лишився в середовищі



