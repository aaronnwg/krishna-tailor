// Get the modal
const modal = document.getElementById('modal');

// Get the image and modal image
const modalImg = document.getElementById('modalImg');

// Get the close button
const closeBtn = document.querySelector('.close');

// Get all the images in the grid
const images = document.querySelectorAll('.gallery-img');

// Open modal on image click
images.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'block';
        modalImg.src = e.target.src;
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});
