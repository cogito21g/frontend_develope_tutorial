document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        currentSlide = (index + totalSlides) % totalSlides; // Ensures the index is within the bounds
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
});
