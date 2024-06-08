document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 3000);
});
