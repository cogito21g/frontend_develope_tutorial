// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const close = document.getElementById("close");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const fullImageSrc = thumbnail.getAttribute("data-full");
            lightboxContent.src = fullImageSrc;
            lightbox.classList.remove("hidden");
        });
    });

    close.addEventListener("click", function() {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
});
