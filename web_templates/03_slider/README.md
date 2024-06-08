# Slider
- 이미지를 사용할 수 없는 경우, CSS와 HTML을 수정하여 슬라이더가 텍스트와 배경색으로 작동하도록 예제 
- 이미지를 사용하지 않고도 슬라이더 기능을 확인


### 동작 방식

1. **HTML**: 슬라이더 구조를 정의하고 각 슬라이드에 배경색과 텍스트를 추가했습니다.
2. **CSS**: 슬라이드가 제대로 보이도록 스타일을 설정했습니다. 슬라이드 내부 텍스트를 중앙에 배치하고, 슬라이드 크기를 조정했습니다.
3. **JavaScript**: 일정 간격(3초)으로 슬라이드가 전환되도록 설정했습니다. 슬라이드가 왼쪽으로 이동하면서 다음 슬라이드가 나타납니다.


### HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Slider Example</h1>
    </header>
    <main>
        <section id="home">
            <div class="slider">
                <div class="slides">
                    <div class="slide" style="background-color: #ff5733;">Slide 1</div>
                    <div class="slide" style="background-color: #33c4ff;">Slide 2</div>
                    <div class="slide" style="background-color: #75ff33;">Slide 3</div>
                </div>
            </div>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

**설명:**
- `<div class="slider">` : 슬라이더의 컨테이너로, 슬라이더의 전체 영역을 정의합니다.
- `<div class="slides">` : 모든 슬라이드를 포함하는 요소입니다.
- `<div class="slide">` : 각각의 슬라이드입니다. 배경색과 텍스트로 슬라이드를 표시합니다.

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
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    min-width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
}
```

**설명:**
- `.slider`: 슬라이더 컨테이너의 스타일을 정의합니다. `overflow: hidden`을 사용하여 슬라이드가 컨테이너를 벗어나지 않도록 합니다.
- `.slides`: 슬라이드들을 수평으로 나열하기 위해 `display: flex`를 사용합니다. `transition: transform 0.5s ease`는 슬라이드 전환 시 부드럽게 애니메이션 효과를 줍니다.
- `.slide`: 각 슬라이드의 스타일을 정의합니다. `min-width: 100%`는 슬라이드가 슬라이더의 전체 너비를 차지하도록 합니다. 또한 텍스트를 중앙에 배치합니다.

### JavaScript (scripts.js)

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 3000);
});
```

**설명:**
- `document.addEventListener('DOMContentLoaded', (event) => { ... })`: HTML 문서가 완전히 로드되고 파싱된 후에 실행될 코드를 정의합니다.
- `let currentSlide = 0`: 현재 슬라이드 인덱스를 저장하는 변수입니다.
- `const slides = document.querySelectorAll('.slide')`: 모든 슬라이드를 선택하여 `slides` 변수에 저장합니다.
- `const totalSlides = slides.length`: 슬라이드의 총 개수를 저장합니다.
- `setInterval(() => { ... }, 3000)`: 3초마다 주기적으로 실행될 코드를 정의합니다. 슬라이드 전환을 처리합니다.
  - `currentSlide = (currentSlide + 1) % totalSlides`: `currentSlide`를 1씩 증가시키며, 마지막 슬라이드 이후에는 첫 슬라이드로 돌아오도록 합니다.
  - `document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)``: 슬라이드 컨테이너의 `transform` 속성을 변경하여 슬라이드를 이동시킵니다. `translateX`를 사용하여 슬라이드를 수평으로 이동합니다.
