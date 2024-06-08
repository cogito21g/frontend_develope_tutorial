document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideInterval;
    let isPlaying = true;

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 3000);
        document.querySelector('.play-pause').innerHTML = '&#10074;&#10074;'; // Pause symbol
        isPlaying = true;
    };

    const stopSlideShow = () => {
        clearInterval(slideInterval);
        document.querySelector('.play-pause').innerHTML = '&#9654;'; // Play symbol
        isPlaying = false;
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            stopSlideShow();
        } else {
            startSlideShow();
        }
    };

    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        if (isPlaying) {
            stopSlideShow();
            startSlideShow();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        if (isPlaying) {
            stopSlideShow();
            startSlideShow();
        }
    });

    startSlideShow();
});
