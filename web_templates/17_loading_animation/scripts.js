// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loading.classList.add("hidden");
        content.classList.remove("hidden");
        // loading.style.display = 'none';
        // content.style.display = 'block';
    });
});

