# Slider
- 이미지를 사용할 수 없는 경우, CSS와 HTML을 수정하여 슬라이더가 텍스트와 배경색으로 작동하도록 예제
- 이미지를 사용하지 않고도 슬라이더 기능을 확인
- 슬라이더의 좌우 버튼을 더 보기 좋게 디자인하고, 슬라이드 위치를 표시하는 인디케이터를 추가
- 페이드 전환 효과를 추가


### 동작 방식 설명
1. **HTML**: 슬라이드 요소에 `active` 클래스를 사용하여 현재 표시되는 슬라이드를 나타냅니다.
2. **CSS**:
   - `.slide`: 슬라이드의 기본 상태는 `opacity: 0`으로 설정됩니다. `transition: opacity 1s ease`로 페이드 전환 효과를 추가했습니다.
   - `.slide.active`: `opacity: 1`로 설정하여 현재 활성 슬라이드가 보이도록 합니다.
3. **JavaScript**:
   - 슬라이드를 이동할 때마다 이전 슬라이드의 `active` 클래스를 제거하고, 새로운 슬라이드에 `active` 클래스를 추가하여 페이드 전환 효과를 구현합니다.


### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider with Fade Transition</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Slider with Fade Transition</h1>
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
                <div class="indicators">
                    <span class="indicator active" onclick="showSlide(0)"></span>
                    <span class="indicator" onclick="showSlide(1)"></span>
                    <span class="indicator" onclick="showSlide(2)"></span>
                </div>
            </div>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

**설명:**
- `<div class="slide active" style="background-color: #ff5733;">Slide 1</div>`: 각 슬라이드를 정의합니다. 기본적으로 첫 번째 슬라이드에 `active` 클래스를 추가하여 처음 로드될 때 표시되도록 합니다.
- `<button class="prev" onclick="prevSlide()">&#10094;</button>`: 왼쪽 화살표 버튼으로, 클릭 시 `prevSlide` 함수를 호출하여 이전 슬라이드로 이동합니다.
- `<button class="next" onclick="nextSlide()">&#10095;</button>`: 오른쪽 화살표 버튼으로, 클릭 시 `nextSlide` 함수를 호출하여 다음 슬라이드로 이동합니다.
- `<div class="indicators">`: 슬라이드 위치를 표시하는 인디케이터를 포함하는 요소입니다. 각각의 인디케이터는 클릭 시 해당 슬라이드로 이동합니다.

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

.indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.indicator {
    width: 15px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.indicator.active, .indicator:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
```

**설명:**
- `.slider`: 슬라이더 컨테이너의 스타일을 정의합니다. `position: relative`로 자식 요소의 위치를 설정할 수 있도록 하고, `overflow: hidden`으로 슬라이드가 컨테이너를 벗어나지 않도록 합니다.
- `.slides`: 슬라이드 컨테이너의 스타일을 정의합니다. 슬라이드를 쌓아 놓기 위해 `position: relative`를 사용합니다.
- `.slide`: 각 슬라이드의 기본 스타일을 정의합니다. `position: absolute`로 설정하여 모든 슬라이드가 동일한 위치에 겹쳐지게 하고, `opacity: 0`으로 기본적으로 숨깁니다. `transition: opacity 1s ease`로 페이드 전환 효과를 추가했습니다.
- `.slide.active`: 현재 활성 슬라이드의 스타일을 정의합니다. `opacity: 1`로 설정하여 보이도록 합니다.
- `.prev, .next`: 좌우 화살표 버튼의 스타일을 정의합니다. 버튼을 원형으로 만들고, 호버 시 배경색이 변경되도록 했습니다.
- `.indicators`: 인디케이터 컨테이너의 스타일을 정의합니다. 인디케이터가 슬라이더 하단 중앙에 위치하도록 설정합니다.
- `.indicator`: 각 인디케이터의 스타일을 정의합니다. 원형으로 만들고, 호버 시 배경색이 변경되도록 했습니다. 현재 슬라이드를 나타내는 인디케이터는 `active` 클래스를 가집니다.

### JavaScript (scripts.js)
```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active'); // 현재 슬라이드에서 active 클래스 제거
        indicators[currentSlide].classList.remove('active'); // 현재 인디케이터에서 active 클래스 제거
        currentSlide = (index + totalSlides) % totalSlides; // 인덱스가 유효한 범위 내에 있도록 조정
        slides[currentSlide].classList.add('active'); // 새로운 슬라이드에 active 클래스 추가
        indicators[currentSlide].classList.add('active'); // 새로운 인디케이터에 active 클래스 추가
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
- `const indicators = document.querySelectorAll('.indicator')`: 모든 인디케이터를 선택하여 `indicators` 변수에 저장합니다.
- `const showSlide = (index) => { ... }`: 인덱스를 기반으로 슬라이드를 표시하는 함수입니다. `index` 값이 슬라이드 범위를 벗어나지 않도록 조정합니다.
  - `slides[currentSlide].classList.remove('active')`: 현재 슬라이드에서 `active` 클래스를 제거합니다.
  - `indicators[currentSlide].classList.remove('active')`: 현재 인디케이터에서 `active` 클래스를 제거합니다.
  - `currentSlide = (index + totalSlides) % totalSlides`: `index` 값이 음수거나 슬라이드의 총 개수를 초과하지 않도록 조

정합니다.
  - `slides[currentSlide].classList.add('active')`: 새로운 슬라이드에 `active` 클래스를 추가하여 보이도록 합니다.
  - `indicators[currentSlide].classList.add('active')`: 새로운 인디케이터에 `active` 클래스를 추가하여 현재 슬라이드를 표시합니다.
- `const nextSlide = () => { ... }`: 다음 슬라이드로 이동하는 함수입니다.
- `const prevSlide = () => { ... }`: 이전 슬라이드로 이동하는 함수입니다.
- `document.querySelector('.next').addEventListener('click', nextSlide)`: 오른쪽 화살표 버튼에 클릭 이벤트를 추가하여 다음 슬라이드로 이동합니다.
- `document.querySelector('.prev').addEventListener('click', prevSlide)`: 왼쪽 화살표 버튼에 클릭 이벤트를 추가하여 이전 슬라이드로 이동합니다.
- `setInterval(nextSlide, 3000)`: 3초마다 자동으로 다음 슬라이드로 이동하는 타이머를 설정합니다.
