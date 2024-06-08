document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    // 댓글 목록 업데이트
    function loadComments() {
        fetch('/comments')
            .then(response => response.json())
            .then(comments => {
                commentsList.innerHTML = '';
                comments.forEach(comment => {
                    const li = document.createElement('li');
                    li.classList.add('comment-item');
                    li.innerHTML = `
                        <p class="comment-content">${comment.comment}</p>
                        <p><strong>${comment.name}</strong></p>
                    `;
                    commentsList.appendChild(li);
                });
            });
    }

    // 페이지 로드 시 댓글 목록 불러오기
    loadComments();

    // 댓글 폼 제출 처리
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, comment }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Comment submitted successfully!');
                commentForm.reset();
                loadComments();
            } else {
                alert('Failed to submit comment');
            }
        });
    });
});
