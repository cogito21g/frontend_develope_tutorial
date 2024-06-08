document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const thumbnails = document.querySelectorAll('.thumbnail');

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active'); // 현재 슬라이드에서 active 클래스 제거
        thumbnails[currentSlide].classList.remove('active'); // 현재 썸네일에서 active 클래스 제거
        currentSlide = (index + totalSlides) % totalSlides; // 인덱스가 유효한 범위 내에 있도록 조정
        slides[currentSlide].classList.add('active'); // 새로운 슬라이드에 active 클래스 추가
        thumbnails[currentSlide].classList.add('active'); // 새로운 썸네일에 active 클래스 추가
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1); // 다음 슬라이드로 이동
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1); // 이전 슬라이드로 이동
    };

    document.querySelector('.next').addEventListener('click', nextSlide); // 다음 버튼 클릭 이벤트
    document.querySelector('.prev').addEventListener('click', prevSlide); // 이전 버튼 클릭 이벤트

    // 3초마다 자동으로 슬라이드 전환
    setInterval(nextSlide, 3000);
});
