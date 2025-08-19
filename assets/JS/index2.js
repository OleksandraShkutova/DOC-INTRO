const slides = [
    {
        src: 'https://abal.com.ua/wp-content/uploads/2024/01/chym-more-vidrizniaietsia-vid-okeanu.jpg',
        alt: 'ocean',
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuIGYKr8z0wIVgT_PEbUvtEM_CkWdQQo2zg&s',
        alt: 'forest',
    },
    {
        src: 'https://images.squarespace-cdn.com/content/v1/5e8ee22524984c387cdaed27/f4ec0ded-9ff4-406e-8dd1-5f0fe74e48bf/Denali%2C+Alaska.jpg',
        alt: 'mountains',
    },
    {
        src: 'https://c02.purpledshub.com/uploads/sites/41/2020/07/GettyImages_10070316-c-f3dddad-scaled.jpg?w=1029&webp=1',
        alt: 'sky',
    },
];

let currentSlideIndex = 0;

const slideImg = document.querySelector('img');
updateSlideImage(currentSlideIndex);

const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

function nextSlideHandler (){
   //if (currentSlideIndex  < slides.length - 1) {
   // currentSlideIndex++
   //} else {currentSlideIndex = 0}
   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
   updateSlideImage(currentSlideIndex);
};

nextBtn.addEventListener('click', nextSlideHandler);

function prevSlideHandler (){
   currentSlideIndex = (currentSlideIndex - 1 +slides.length) % slides.length;
   updateSlideImage(currentSlideIndex);
};

prevBtn.addEventListener('click', prevSlideHandler);

function updateSlideImage(currentSlideIndex){
    slideImg.src = slides[currentSlideIndex].src;
    slideImg.alt = slides[currentSlideIndex].alt;
};
