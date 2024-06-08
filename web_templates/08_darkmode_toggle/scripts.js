document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    const toggleButton = document.getElementById('toggleMode'); // 버튼 요소 선택

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // 다크 모드 클래스 토글
    });
});
