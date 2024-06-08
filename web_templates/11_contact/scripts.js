document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        // 여기에서 폼 데이터를 처리하거나 서버로 보낼 수 있습니다.
        // 예: form.submit();

        // 확인 메시지 표시
        confirmation.classList.remove("hidden");

        // 양식 초기화
        form.reset();
    });
});
