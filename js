/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/* =========================================
   EXPERIENCE MODAL
========================================= */

const modal = document.getElementById('experience-modal');
const modalButtons = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');

const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalDuration = document.getElementById('modal-duration');


modalButtons.forEach(button => {

    button.addEventListener('click', () => {

        modal.style.display = 'flex';

        modalTitle.textContent = button.dataset.title;
        modalImage.src = button.dataset.image;
        modalDescription.textContent = button.dataset.description;
        modalPrice.textContent = 'Price: ' + button.dataset.price;
        modalDuration.textContent = 'Duration: ' + button.dataset.duration;

    });

});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {

    if (e.target === modal) {
        modal.style.display = 'none';
    }

});
