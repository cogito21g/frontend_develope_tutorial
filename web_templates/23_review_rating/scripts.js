document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // 리뷰 목록 업데이트
    function loadReviews() {
        fetch('/reviews')
            .then(response => response.json())
            .then(reviews => {
                reviewsList.innerHTML = '';
                reviews.forEach(review => {
                    const li = document.createElement('li');
                    li.classList.add('review-item');
                    li.innerHTML = `
                        <p class="review-rating">Rating: ${review.rating}</p>
                        <p>${review.review}</p>
                        <p><strong>${review.name}</strong></p>
                    `;
                    reviewsList.appendChild(li);
                });
            });
    }

    // 페이지 로드 시 리뷰 목록 불러오기
    loadReviews();

    // 리뷰 폼 제출 처리
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, rating, review }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Review submitted successfully!');
                reviewForm.reset();
                loadReviews();
            } else {
                alert('Failed to submit review');
            }
        });
    });
});
