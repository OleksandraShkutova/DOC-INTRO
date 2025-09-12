let div = document.querySelector('.div');
div.addEventListener('click', function() {
    //this.classList.add('div2');
    //this.classList.remove('div');
    this.classList.toggle('div2');
});

div.style.color = 'red';

let h1 = document.querySelector('h1');
h1.addEventListener('click', function() {
    this.classList.toggle('border');
});

