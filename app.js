console.log('veikia');


const slides = document.querySelectorAll('.containerSlide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentSlideIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex);
    });

   
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.style.backgroundColor = '#A3CFFF';
        } else {
            dot.style.backgroundColor = '#5B9BF3';
        }
    });
}


leftArrow.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
});

rightArrow.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
});


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        updateSlides();
    });
});


updateSlides();