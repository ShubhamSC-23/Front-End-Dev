document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('#navbar-links');

    toggleButton.addEventListener('click', () => {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !expanded);
        navbarLinks.classList.toggle('active');
    });

    // Carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }, 2000);
});
