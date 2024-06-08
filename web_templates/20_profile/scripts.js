// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById('profileImage');
    const uploadImage = document.getElementById('uploadImage');
    const profileForm = document.getElementById('profileForm');

    uploadImage.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
});
