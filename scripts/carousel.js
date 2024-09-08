document.addEventListener('DOMContentLoaded', function () {
// Select necessary elements
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Calculate the total width of one image, including the gap
const imageWidth = images[0].clientWidth + 20; // Add the gap between images
let currentIndex = 0;

// Function to move the carousel by one image
function moveCarousel(index) {
    const visibleWidth = carousel.clientWidth;
    const maxIndex = images.length - Math.floor(visibleWidth / imageWidth); // Ensure you don't overshoot
    if (index < 0) {
        currentIndex = 0;
    } else if (index > maxIndex) {
        currentIndex = maxIndex;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    moveCarousel(currentIndex + 1);
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    moveCarousel(currentIndex - 1);
});
});