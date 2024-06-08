# Slider
- 이미지를 사용할 수 없는 경우, CSS와 HTML을 수정하여 슬라이더가 텍스트와 배경색으로 작동하도록 예제
- 이미지를 사용하지 않고도 슬라이더 기능을 확인
- 슬라이더의 좌우 버튼을 더 보기 좋게 디자인하고, 슬라이드 위치를 표시하는 인디케이터를 추가
- 페이드 전환 효과를 추가
- 슬라이더에 썸네일 추가(이미지)

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider with Thumbnails</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Slider with Thumbnails</h1>
    </header>
    <main>
        <section id="home">
            <div class="slider">
                <div class="slides">
                    <div class="slide active" style="background-color: #ff5733;">Slide 1</div>
                    <div class="slide" style="background-color: #33c4ff;">Slide 2</div>
                    <div class="slide" style="background-color: #75ff33;">Slide 3</div>
                </div>
                <button class="prev" onclick="prevSlide()">&#10094;</button>
                <button class="next" onclick="nextSlide()">&#10095;</button>
                <div class="thumbnails">
                    <img src="thumb1.jpg" class="thumbnail active" onclick="showSlide(0)" alt="Slide 1 Thumbnail">
                    <img src="thumb2.jpg" class="thumbnail" onclick="showSlide(1)" alt="Slide 2 Thumbnail">
                    <img src="thumb3.jpg" class="thumbnail" onclick="showSlide(2)" alt="Slide 3 Thumbnail">
                </div>
            </div>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

**설명:**
- `<div class="thumbnails">`: 썸네일 이미지를 포함하는 요소입니다.
  - `<img src="thumb1.jpg" class="thumbnail active" onclick="showSlide(0)" alt="Slide 1 Thumbnail">`: 첫 번째 슬라이드의 썸네일입니다. 클릭 시 `showSlide(0)` 함수를 호출하여 첫 번째 슬라이드로 이동합니다. 기본적으로 `active` 클래스를 가지고 있어 현재 슬라이드를 나타냅니다.

### CSS (styles.css)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

.slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
}

.slides {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    opacity: 0;
    transition: opacity 1s ease;
}

.slide.active {
    opacity: 1;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    transition: background-color 0.3s ease;
    user-select: none;
    z-index: 1;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.thumbnails {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.thumbnail {
    width: 60px;
    height: 40px;
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.thumbnail:hover, .thumbnail.active {
    opacity: 1;
    transform: scale(1.1);
}
```

**설명:**
- `.slider`: 슬라이더 컨테이너의 스타일을 정의합니다. `position: relative`로 자식 요소의 위치를 설정할 수 있도록 하고, `overflow: hidden`으로 슬라이드가 컨테이너를 벗어나지 않도록 합니다.
- `.slides`: 슬라이드 컨테이너의 스타일을 정의합니다. 슬라이드를 쌓아 놓기 위해 `position: relative`를 사용합니다.
- `.slide`: 각 슬라이드의 기본 스타일을 정의합니다. `position: absolute`로 설정하여 모든 슬라이드가 동일한 위치에 겹쳐지게 하고, `opacity: 0`으로 기본적으로 숨깁니다. `transition: opacity 1s ease`로 페이드 전환 효과를 추가했습니다.
- `.slide.active`: 현재 활성 슬라이드의 스타일을 정의합니다. `opacity: 1`로 설정하여 보이도록 합니다.
- `.prev, .next`: 좌우 화살표 버튼의 스타일을 정의합니다. 버튼을 원형으로 만들고, 호버 시 배경색이 변경되도록 했습니다.
- `.thumbnails`: 썸네일 컨테이너의 스타일을 정의합니다. 썸네일이 슬라이더 하단 중앙에 위치하도록 설정합니다.
- `.thumbnail`: 각 썸네일 이미지의 스타일을 정의합니다. 썸네일은 작은 크기로 설정되며, 호버 시와 현재 슬라이드를 나타내는 `active` 클래스가 추가될 때 크기가 커지도록 합니다.

### JavaScript (scripts.js)
```javascript
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
```

**설명:**
- `document.addEventListener('DOMContentLoaded', (event) => { ... })`: HTML 문서가 완전히 로드되고 파싱된 후에 실행될 코드를 정의합니다. 이렇게 하면 DOM 요소를 안전하게 선택하고 조작할 수 있습니다.
- `let currentSlide = 0`: 현재 슬라이드 인덱스를 저장하는 변수입니다.
- `const slides = document.querySelectorAll('.slide')`: 모든 슬라이드를 선택하여 `slides` 변수에 저장합니다.
- `const totalSlides = slides.length`: 슬라이드의 총 개수를 저장합니다.
- `const thumbnails = document.querySelectorAll('.thumbnail')`: 모든 썸네일 이미지를 선택하여 `thumbnails` 변수에 저장합니다.
- `const showSlide = (index) => { ... }`: 인덱스를 기반으로 슬라이드를 표시하는 함수입니다. `index` 값이 슬라이드 범위를 벗어나지 않도록 조정합니다.
  - `slides[currentSlide].classList.remove('active')`: 현재 슬라이드에서 `active` 클래스를 제거합니다.
  - `thumbnails[currentSlide].classList.remove('active')`: 현재 썸네일에서 `active` 클래스를 제거합니다.
  - `currentSlide = (index + totalSlides) % totalSlides`: `index` 값이 음수거나 슬라이드의 총 개수를 초과하지 않도록 조정합니다.
  - `slides[currentSlide].classList.add('active')`: 새로운 슬라이드에 `active` 클래스를 추가하여 보이도록 합니다.
  - `thumbnails[currentSlide].classList.add('active')`: 새로운 썸네일에 `active` 클래스를 추가하여 현재 슬라이드를 표시합니다.
-

 `const nextSlide = () => { ... }`: 다음 슬라이드로 이동하는 함수입니다.
- `const prevSlide = () => { ... }`: 이전 슬라이드로 이동하는 함수입니다.
- `document.querySelector('.next').addEventListener('click', nextSlide)`: 오른쪽 화살표 버튼에 클릭 이벤트를 추가하여 다음 슬라이드로 이동합니다.
- `document.querySelector('.prev').addEventListener('click', prevSlide)`: 왼쪽 화살표 버튼에 클릭 이벤트를 추가하여 이전 슬라이드로 이동합니다.
- `setInterval(nextSlide, 3000)`: 3초마다 자동으로 다음 슬라이드로 이동하는 타이머를 설정합니다.
---
자동 재생이 중지되지 않거나 버튼 표시가 변경되지 않는 문제를 해결하기 위해 코드를 수정해 보겠습니다. 특히, `togglePlayPause` 함수에서 버튼 표시가 변경되지 않는 이유를 확인해 보겠습니다. 버튼 표시와 슬라이드 쇼의 상태 전환을 제대로 처리하도록 코드를 조정하겠습니다.

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider with Play/Pause</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Slider with Play/Pause</h1>
    </header>
    <main>
        <section id="home">
            <div class="slider">
                <div class="slides">
                    <div class="slide active" style="background-color: #ff5733;">Slide 1</div>
                    <div class="slide" style="background-color: #33c4ff;">Slide 2</div>
                    <div class="slide" style="background-color: #75ff33;">Slide 3</div>
                </div>
                <button class="prev" onclick="prevSlide()">&#10094;</button>
                <button class="next" onclick="nextSlide()">&#10095;</button>
                <button class="play-pause" onclick="togglePlayPause()">&#10074;&#10074;</button>
            </div>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

.slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
}

.slides {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    opacity: 0;
    transition: opacity 1s ease;
}

.slide.active {
    opacity: 1;
}

.prev, .next, .play-pause {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    transition: background-color 0.3s ease;
    user-select: none;
    z-index: 1;
}

.prev {
    top: 50%;
    left: 10px;
    margin-top: -25px;
}

.next {
    top: 50%;
    right: 10px;
    margin-top: -25px;
}

.play-pause {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    margin-top: 0;
    font-size: 20px;
    line-height: 50px;
}

.prev:hover, .next:hover, .play-pause:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
```

### JavaScript (scripts.js)
```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideInterval;
    let isPlaying = true;

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 3000);
        document.querySelector('.play-pause').innerHTML = '&#10074;&#10074;'; // Pause symbol
        isPlaying = true;
    };

    const stopSlideShow = () => {
        clearInterval(slideInterval);
        document.querySelector('.play-pause').innerHTML = '&#9654;'; // Play symbol
        isPlaying = false;
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            stopSlideShow();
        } else {
            startSlideShow();
        }
    };

    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        if (isPlaying) {
            stopSlideShow();
            startSlideShow();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        if (isPlaying) {
            stopSlideShow();
            startSlideShow();
        }
    });

    startSlideShow();
});
```

### 동작 방식 설명

1. **HTML**:
   - 슬라이더에 자동 재생을 제어하는 버튼을 추가했습니다. `onclick` 이벤트를 추가하여 버튼을 클릭하면 `togglePlayPause` 함수가 호출됩니다.

2. **CSS**:
   - `.play-pause`: 자동 재생 버튼의 스타일을 정의합니다. 버튼이 슬라이더 하단 중앙에 위치하도록 설정합니다.
   - 버튼이 호버 시 배경색이 변경되도록 설정합니다.

3. **JavaScript**:
   - `let slideInterval;`: 슬라이드 전환을 관리하는 인터벌 변수입니다.
   - `let isPlaying = true;`: 슬라이드 쇼가 자동 재생 중인지 여부를 추적하는 변수입니다.
   - `const startSlideShow = () => { ... }`: 자동 슬라이드 전환을 시작하는 함수입니다.
     - `slideInterval = setInterval(nextSlide, 3000);`: 3초마다 다음 슬라이드로 전환합니다.
     - `document.querySelector('.play-pause').innerHTML = '&#10074;&#10074;';`: 버튼의 내용을 일시 정지 기호로 변경합니다.
     - `isPlaying = true;`: 슬라이드 쇼가 재생 중임을 나타냅니다.
   - `const stopSlideShow = () => { ... }`: 자동 슬라이드 전환을 멈추는 함수입니다.
     - `clearInterval(slideInterval);`: 슬라이드 전환을 중지합니다.
     - `document.querySelector('.play-pause').innerHTML = '&#9654;';`: 버튼의 내용을 재생 기호로 변경합니다.
     - `isPlaying = false;`: 슬라이드 쇼가 일시 정지 상태임을 나타냅니다.
   - `const togglePlayPause = () => { ... }`: 자동 재생 버튼을 클릭할 때 실행되는 함수입니다. 슬라이드 전환을 일시 정지하거나 재생 상태로 전환합니다.
   - `document.querySelector('.next').addEventListener('click', () => { ... })`: 다음 버튼 클릭 이벤트 리스너입니다. 슬라이드를 전환하고, 자동 재생 상태일 경우 슬라이드 쇼를 재시작합니다.
   - `document.querySelector('.prev').addEventListener('click', () => { ... })`: 이전 버튼 클릭 이벤트 리스너입니다. 슬라이드를 전환하고, 자동 재생 상태일 경우 슬라이드 쇼를 재시작합니다.
   - `startSlideShow();`: 페이지가 로드될 때 슬라이드 쇼를 자동으로 시작합니다.

이 코드를 사용하면 슬라이더에 자동 재생 및 일시 정지 버튼을 추가할 수 있습니다. 사용자는 버튼을 클릭하여 슬라이드 전환을 일시 정지하거나 재생할 수 있습니다. `togglePlayPause` 함수에서 버튼의 표시와 슬라이드 쇼 상태가 올바르게 전환되도록 했습니다.