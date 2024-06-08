// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.animate');

    const handleScroll = () => {
        animateElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
});
