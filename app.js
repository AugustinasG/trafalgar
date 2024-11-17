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

    // Update dot colors
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlideIndex ? '#A3CFFF' : '#5B9BF3';
    });
}

// Arrow navigation
leftArrow.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
});

rightArrow.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        updateSlides();
    });
});

// Initialize the slider
updateSlides();