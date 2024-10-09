document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const images = Array.from(document.querySelectorAll('.carousel img'));
    
    let currentIndex = 0;
    let imagesPerView = getImagesPerView();

    function getImagesPerView() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateCarousel() {
        const containerWidth = carousel.parentElement.clientWidth;
        const imageWidth = (containerWidth / imagesPerView) - 20; // Subtract gap
        images.forEach(img => {
            img.style.flex = `0 0 ${imageWidth}px`;
            img.style.maxWidth = `${imageWidth}px`;
        });
        carousel.style.transform = `translateX(-${currentIndex * (imageWidth + 20)}px)`;
    }

    function moveCarousel(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - imagesPerView;
        if (currentIndex > images.length - imagesPerView) currentIndex = 0;
        updateCarousel();
    }

    prevButton.addEventListener('click', () => moveCarousel(-1));
    nextButton.addEventListener('click', () => moveCarousel(1));

    window.addEventListener('resize', () => {
        imagesPerView = getImagesPerView();
        updateCarousel();
    });

    updateCarousel();
});