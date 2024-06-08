# Page Scroll
- 페이지 스크롤 애니메이션(Scroll Animation)
- 사용자가 페이지를 스크롤할 때 애니메이션 효과를 추가
- 스크롤할 때 요소가 슬라이드 인, 페이드 인, 줌 인 되는 효과
- 페이지를 스크롤할 때 각 섹션이 슬라이드 인, 페이드 인, 줌 인 되는 애니메이션 효과


### 동작 방식 설명

1. **HTML 부분:**
   - 기본 페이지 구조를 정의합니다.
   - 각 섹션에 `class="animate"`와 애니메이션 유형을 지정하는 클래스를 추가합니다 (`fade-in`, `slide-in`, `zoom-in`).

2. **CSS 부분:**
   - `section` 기본 스타일을 설정하고, 초기 상태에서 요소가 보이지 않도록 `opacity: 0`을 설정합니다. 애니메이션 효과를 위해 `transition` 속성을 사용합니다.
   - `fade-in`, `slide-in`, `zoom-in` 클래스는 각각 다른 애니메이션 초기 상태를 설정합니다.
   - `animate.visible` 클래스는 요소가 화면에 보일 때 적용됩니다. 이 클래스가 적용되면 `opacity`가 1이 되고, `transform`이 `none`이 되어 애니메이션 효과가 나타납니다.

3. **JavaScript 부분:**
   - `DOMContentLoaded` 이벤트를 사용하여 DOM이 완전히 로드된 후 코드를 실행합니다.
   - `.animate` 클래스를 가진 모든 요소를 선택합니다.
   - `handleScroll` 함수는 각 요소의 위치를 확인하여 화면에 보이는 경우 `visible` 클래스를 추가합니다.
   - `window.addEventListener('scroll', handleScroll);`: 스크롤 이벤트를 감지하여 `handleScroll` 함수를 실행합니다.
   - `handleScroll();`: 페이지 로드 시 `handleScroll` 함수를 한 번 실행하여 초기 상태를 설정합니다.



### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Animation Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Scroll Animation Example</h1>
    </header>
    <main>
        <section class="animate fade-in">
            <h2>Fade In Section</h2>
            <p>This section will fade in as you scroll down.</p>
        </section>
        <section class="animate slide-in">
            <h2>Slide In Section</h2>
            <p>This section will slide in from the left as you scroll down.</p>
        </section>
        <section class="animate zoom-in">
            <h2>Zoom In Section</h2>
            <p>This section will zoom in as you scroll down.</p>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **DOCTYPE 및 HTML 구조:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>Scroll Animation Example</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **헤더 및 콘텐츠 섹션:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<header>`: 페이지의 헤더를 정의합니다.
   - `<main>`: 주요 콘텐츠 영역을 정의합니다.
     - `<section class="animate fade-in">`: 스크롤 애니메이션을 적용할 섹션을 정의합니다. `animate` 클래스와 `fade-in` 클래스를 추가하여 페이드 인 애니메이션을 설정합니다.
     - `<section class="animate slide-in">`: 슬라이드 인 애니메이션을 적용할 섹션을 정의합니다.
     - `<section class="animate zoom-in">`: 줌 인 애니메이션을 적용할 섹션을 정의합니다.

### 2. CSS - 스타일링

CSS는 웹 페이지의 스타일과 애니메이션 효과를 정의합니다.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

main {
    padding: 20px;
}

section {
    margin: 50px 0;
    opacity: 0;
    transition: opacity 1s, transform 1s;
}

.fade-in {
    transform: translateY(20px);
}

.slide-in {
    transform: translateX(-100%);
}

.zoom-in {
    transform: scale(0.8);
}

.animate.visible {
    opacity: 1;
    transform: none;
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
     - `padding: 0;`: 페이지의 기본 패딩을 제거합니다.
     - `line-height: 1.6;`: 기본 줄 간격을 설정합니다.

2. **헤더 스타일:**
   - `header`: 헤더의 배경색, 글자색, 텍스트 정렬, 패딩을 설정합니다.

3. **메인 콘텐츠 스타일:**
   - `main`: 메인 콘텐츠 영역의 패딩을 설정합니다.
   - `section`: 각 섹션의 기본 스타일을 정의합니다.
     - `margin: 50px 0;`: 각 섹션 사이의 여백을 설정합니다.
     - `opacity: 0;`: 초기 상태에서 요소가 보이지 않도록 설정합니다.
     - `transition: opacity 1s, transform 1s;`: 투명도와 변형 속성을 1초 동안 부드럽게 전환하도록 설정합니다.

4. **애니메이션 초기 상태:**
   - `.fade-in`: 페이드 인 애니메이션의 초기 상태를 정의합니다.
     - `transform: translateY(20px);`: 요소를 아래쪽으로 약간 이동시킵니다.
   - `.slide-in`: 슬라이드 인 애니메이션의 초기 상태를 정의합니다.
     - `transform: translateX(-100%);`: 요소를 화면 왼쪽 밖으로 이동시킵니다.
   - `.zoom-in`: 줌 인 애니메이션의 초기 상태를 정의합니다.
     - `transform: scale(0.8);`: 요소를 작게 만듭니다.

5. **애니메이션 적용 상태:**
   - `.animate.visible`: 스크롤 애니메이션이 적용될 때의 상태를 정의합니다.
     - `opacity: 1;`: 요소가 완전히 보이도록 설정합니다.
     - `transform: none;`: 변형을 제거하여 요소가 원래 위치와 크기로 돌아오도록 설정합니다.

### 3. JavaScript - 동작 구현

JavaScript는 페이지 스크롤 시 애니메이션 효과를 적용합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.animate');

    const handleScroll = () => {
        animateElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **요소 선택:**
   - `const animateElements = document.querySelectorAll('.animate');`: `.animate` 클래스를 가진 모든 요소를 선택하여 `animateElements` 변수에 저장합니다.

3. **스크롤 이벤트 처리:**
   - `const handleScroll = () => { ... };`: 스크롤 이벤트가 발생할 때 실행되는 함수를 정의합니다.
     - `animateElements.forEach(element => { ... });`: 선택된 모든 요소에 대해 반복합니다.
     - `const rect = element.getBoundingClientRect();`: 요소의 위치와 크기를 가져옵니다.
     - `if (rect.top < window.innerHeight && rect.bottom >= 0) { ... }`: 요소가 화면에 보이는 경우
       - `element.classList.add('visible');`: 요소에 `visible` 클래스를 추가하여 애니메이션 효과를 적용합니다.

4. **스크롤 이벤트 리스너 추가:**
   - `window.addEventListener('scroll', handleScroll);`: 스크롤 이벤트를 감지하여 `handleScroll` 함수를 실행합니다.

5. **초기 상태 설정:**
   - `handleScroll();`: 페이지 로드 시 `handleScroll` 함수를 한 번 실행하여 초기 상태를 설정합니다. 이를 통해 페이지가 로드된 직후에도 화면에 보이는 요소에 애니메이션 효과를 적용할 수 있습니다.
