# Loading Animation
- 웹 페이지 로딩 중에 표시할 수 있는 간단한 로딩 애니메이션을 구현
- 로딩 애니메이션을 설정하고, 페이지가 완전히 로드되면 애니메이션을 숨기는 방식으로 구현
- 페이지가 로드되는 동안 로딩 애니메이션이 표시되고, 모든 리소스가 로드되면 애니메이션이 사라지고 실제 콘텐츠가 표시

### 동작 방식 설명

1. **HTML 부분:**
   - `<div id="loading">`: 로딩 애니메이션을 표시하는 컨테이너입니다. 페이지가 로드되는 동안 보여집니다.
   - `<div class="spinner"></div>`: CSS로 스타일링된 스피너 애니메이션입니다.
   - `<div id="content" class="hidden">`: 실제 페이지 콘텐츠입니다. 페이지가 로드될 때까지 숨겨져 있습니다.

2. **CSS 부분:**
   - `.hidden`: display: none; 속성을 사용하여 요소를 숨깁니다.
   - `#loading`: 로딩 애니메이션의 컨테이너를 전체 화면에 고정하고 중앙에 정렬합니다.
   - `.spinner`: 원형 스피너 애니메이션을 정의합니다. 회전을 위해 `@keyframes spin`을 사용합니다.
   - 나머지 CSS는 페이지의 기본 스타일과 반응형 디자인을 정의합니다.

3. **JavaScript 부분:**
   - `DOMContentLoaded` 이벤트를 사용하여 DOM이 완전히 로드된 후 코드를 실행합니다.
   - `window.addEventListener("load", function() { ... });`: 페이지의 모든 리소스(이미지, 스타일 등)가 완전히 로드되면 실행되는 이벤트입니다.
   - 로딩 애니메이션을 숨기고, 실제 콘텐츠를 표시하기 위해 `hidden` 클래스를 추가/제거합니다.


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animation Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="loading">
        <div class="spinner"></div>
    </div>
    <div id="content" class="hidden">
        <header>
            <h1>Welcome to Our Website</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <main>
            <section>
                <h2>Content Section</h2>
                <p>This is the main content of the page.</p>
            </section>
            <aside>
                <h3>Sidebar</h3>
                <p>This is the sidebar content.</p>
            </aside>
        </main>
        <footer>
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **`<html>` 태그:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.

2. **`<head>` 태그:**
   - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
   - `<title>Loading Animation Example</title>`: 웹 페이지의 제목을 설정합니다.
   - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

3. **`<body>` 태그:**
   - `<div id="loading">`: 로딩 애니메이션을 표시하는 컨테이너입니다. 페이지가 로드되는 동안 보여집니다.
   - `<div class="spinner"></div>`: CSS로 스타일링된 스피너 애니메이션입니다.
   - `<div id="content" class="hidden">`: 실제 페이지 콘텐츠입니다. 페이지가 로드될 때까지 숨겨져 있습니다.
     - `<header>`: 페이지의 헤더를 정의합니다. 제목을 포함합니다.
     - `<nav>`: 네비게이션 바를 정의합니다. `ul` 요소는 네비게이션 항목을 나열합니다.
     - `<main>`: 주요 콘텐츠 영역을 정의합니다. `section`과 `aside` 요소를 포함합니다.
       - `<section>`: 메인 콘텐츠를 정의합니다. 제목과 단락을 포함합니다.
       - `<aside>`: 사이드바를 정의합니다. 제목과 단락을 포함합니다.
     - `<footer>`: 페이지의 푸터를 정의합니다. 저작권 정보를 포함합니다.

### 2. CSS - 스타일링

CSS는 웹 페이지의 스타일을 정의합니다.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

.hidden {
    display: none;
}

#loading {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

nav {
    background-color: #444;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 0;
    display: block;
}

main {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

section {
    flex: 3;
    padding: 20px;
}

aside {
    flex: 1;
    padding: 20px;
    background: #f4f4f4;
}

footer {
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Media Queries */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }

    main {
        flex-direction: column;
    }

    aside {
        order: -1; /* Sidebar appears above the main content */
    }
}

@media (max-width: 480px) {
    header, footer {
        text-align: center;
        padding: 5px 0;
    }

    nav ul {
        padding: 0;
        flex-direction: column;
        text-align: center;
    }

    nav ul li {
        margin: 5px 0;
    }

    main {
        padding: 10px;
    }

    section, aside {
        padding: 10px;
    }
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
     - `padding: 0;`: 페이지의 기본 패딩을 제거합니다.
     - `line-height: 1.6;`: 기본 줄 간격을 설정합니다.

2. **숨기기 클래스:**
   - `.hidden`: display: none; 속성을 사용하여 요소를 숨깁니다.

3. **로딩 애니메이션 스타일:**
   - `#loading`: 로딩 애니메이션의 컨테이너를 전체 화면에 고정하고 중앙에 정렬합니다.
     - `position: fixed;`: 화면에 고정합니다.
     - `width: 100%; height: 100%;`: 전체 화면을 덮도록 설정합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `display: flex; justify-content: center; align-items: center;`: Flexbox를 사용하여 중앙에 정렬합니다.
     - `z-index: 9999;`: 다른 모든 요소 위에 배치합니다.
   - `.spinner`: 원형 스피너 애니메이션을 정의합니다.
     - `border`: 스피너의 테두리를 설정합니다.
     - `border-top`: 스피너의 상단 테두리를 설정하여 회전 효과를 줍니다.
     - `border-radius: 50%;`: 원형으로 만듭니다.
     - `width, height`: 스피너의 크기를 설정합니다.
     - `animation: spin 2s linear infinite;`: 회전 애니메이션을 설정합니다.

4. **헤더와 푸터 스타일:**
   - `header, footer`: 헤더와 푸터의 배경색, 글자색, 텍스트 정렬, 패딩을 설정합니다.

5. **네비게이션 스타일:**
   - `nav`: 네비게이션 바의 배경색을 설정합니다.
   - `nav ul`: 네비게이션 목록의 기본 스타일을 제거하고, Flexbox를 사용하여 가로로 배치합니다.
   - `nav ul li`: 각 네비게이션 항목의 마진을 설정합니다.
   - `nav ul li a`: 네비게이션 링크의 글자색, 텍스트 장식을 설정하고, 패딩을 추가하여 클릭 가능한 영역을 확대합니다.

6. **메인 콘텐츠 스타일:**
   - `main`: Flexbox를 사용하여 메인 콘텐츠 영역을 가로로 배치합니다. `flex-wrap` 속성을 사용하여 작은 화면에서 줄 바꿈을 허용합니다.
   - `section`: 메인 콘텐츠의 Flexbox 비율을 설정하고, 패딩을 추가합니다.
   - `aside`: 사이드바의 Flexbox 비율을 설정하고, 배경색과 패딩을 추가합니다.

7. **미디어 쿼리:**
   - **768px 이하:** 화면 너비가 768px 이하일 때 적용됩니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치합니다.
     - `main`: 메인 콘텐츠를 세로

로 배치합니다.
     - `aside`: 사이드바를 메인 콘텐츠 위로 이동시킵니다(`order: -1`).

   - **480px 이하:** 화면 너비가 480px 이하일 때 적용됩니다.
     - `header, footer`: 헤더와 푸터의 텍스트 정렬과 패딩을 조정합니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치하고, 중앙 정렬합니다.
     - `nav ul li`: 각 네비게이션 항목의 마진을 조정합니다.
     - `main`: 메인 콘텐츠의 패딩을 줄입니다.
     - `section, aside`: 섹션과 사이드바의 패딩을 줄입니다.

### 3. JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loading.classList.add("hidden");
        content.classList.remove("hidden");
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **요소 선택:**
   - `const loading = document.getElementById("loading");`: 로딩 애니메이션 요소를 선택합니다.
   - `const content = document.getElementById("content");`: 실제 페이지 콘텐츠 요소를 선택합니다.

3. **load 이벤트:**
   - `window.addEventListener("load", function() { ... });`: 페이지의 모든 리소스(이미지, 스타일 등)가 완전히 로드되면 실행되는 이벤트입니다.
   - 로딩 애니메이션을 숨기고, 실제 콘텐츠를 표시하기 위해 `hidden` 클래스를 추가/제거합니다.
     - `loading.classList.add("hidden");`: 로딩 애니메이션 요소에 `hidden` 클래스를 추가하여 숨깁니다.
     - `content.classList.remove("hidden");`: 실제 페이지 콘텐츠 요소에서 `hidden` 클래스를 제거하여 표시합니다.


## 수정된 코드

### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animation Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="loading">
        <div class="spinner"></div>
    </div>
    <div id="content" class="hidden">
        <header>
            <h1>Welcome to Our Website</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <main>
            <section>
                <h2>Content Section</h2>
                <p>This is the main content of the page.</p>
            </section>
            <aside>
                <h3>Sidebar</h3>
                <p>This is the sidebar content.</p>
            </aside>
        </main>
        <footer>
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
    </div>
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
     - `<title>Loading Animation Example</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **로딩 애니메이션 및 콘텐츠:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div id="loading">`: 로딩 애니메이션을 표시하는 컨테이너입니다.
     - `<div class="spinner"></div>`: CSS로 스타일링된 스피너 애니메이션을 포함합니다.
   - `<div id="content" class="hidden">`: 실제 페이지 콘텐츠를 포함하는 컨테이너입니다. 초기에는 `hidden` 클래스로 숨겨져 있습니다.
     - `<header>`: 페이지 헤더를 정의합니다.
     - `<nav>`: 네비게이션 바를 정의합니다.
     - `<main>`: 주요 콘텐츠 영역을 정의합니다.
       - `<section>`: 메인 콘텐츠 섹션을 정의합니다.
       - `<aside>`: 사이드바 섹션을 정의합니다.
     - `<footer>`: 페이지 푸터를 정의합니다.

### 2. CSS - 스타일링

CSS는 웹 페이지의 스타일을 정의합니다.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

.hidden {
    display: none;
}

#loading {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

nav {
    background-color: #444;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 0;
    display: block;
}

main {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

section {
    flex: 3;
    padding: 20px;
}

aside {
    flex: 1;
    padding: 20px;
    background: #f4f4f4;
}

footer {
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Media Queries */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }

    main {
        flex-direction: column;
    }

    aside {
        order: -1; /* Sidebar appears above the main content */
    }
}

@media (max-width: 480px) {
    header, footer {
        text-align: center;
        padding: 5px 0;
    }

    nav ul {
        padding: 0;
        flex-direction: column;
        text-align: center;
    }

    nav ul li {
        margin: 5px 0;
    }

    main {
        padding: 10px;
    }

    section, aside {
        padding: 10px;
    }
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
     - `padding: 0;`: 페이지의 기본 패딩을 제거합니다.
     - `line-height: 1.6;`: 기본 줄 간격을 설정합니다.

2. **숨기기 클래스:**
   - `.hidden`: `display: none;` 속성을 사용하여 요소를 숨깁니다.

3. **로딩 애니메이션 스타일:**
   - `#loading`: 로딩 애니메이션의 컨테이너를 전체 화면에 고정하고 중앙에 정렬합니다.
     - `position: fixed;`: 화면에 고정합니다.
     - `width: 100%; height: 100%;`: 전체 화면을 덮도록 설정합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `display: flex; justify-content: center; align-items: center;`: Flexbox를 사용하여 중앙에 정렬합니다.
     - `z-index: 9999;`: 다른 모든 요소 위에 배치합니다.
   - `.spinner`: 원형 스피너 애니메이션을 정의합니다.
     - `border`: 스피너의 테두리를 설정합니다.
     - `border-top`: 스피너의 상단 테두리를 설정하여 회전 효과를 줍니다.
     - `border-radius: 50%;`: 원형으로 만듭니다.
     - `width, height`: 스피너의 크기를 설정합니다.
     - `animation: spin 2s linear infinite;`: 회전 애니메이션을 설정합니다.

4. **헤더와 푸터 스타일:**
   - `header, footer`: 헤더와 푸터의 배경색, 글자색, 텍스트 정렬, 패딩을 설정합니다.

5. **네비게이션 스타일:**
   - `nav`: 네비게이션 바의 배경색을 설정합니다.
   - `nav ul`: 네비게이션 목록의 기본 스타일을 제거하고, Flexbox를 사용하여 가로로 배치합니다.
   - `nav ul li`: 각 네비게이션 항목의 마진을 설정합니다.
   - `nav ul li a`: 네비게이션 링크의 글자색, 텍스트 장식을 설정하고, 패딩을 추가하여 클릭 가능한 영역을 확대합니다.

6. **메인 콘텐츠 스타일:**
   - `main`: Flexbox를 사용하여 메인 콘텐츠 영역을 가로로 배치합니다. `flex-wrap` 속성을 사용하여 작은 화면에서 줄 바꿈을 허용합니다.
   - `section`: 메인 콘텐츠의 Flexbox 비율을 설정하고, 패딩을 추가합니다.
   - `aside`: 사이드바의 Flexbox 비율을 설정하고, 배경색과 패딩을 추가합니다.

7. **미디어 쿼리:**
   - **768px 이하:** 화면 너비가 768px 이하일 때 적용됩니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치합니다.
     - `main`: 메인 콘텐츠를 세로로 배치합니다.
     - `aside`: 사이드바를 메인 콘텐츠 위로 이동시킵니다(`order: -1`

).

   - **480px 이하:** 화면 너비가 480px 이하일 때 적용됩니다.
     - `header, footer`: 헤더와 푸터의 텍스트 정렬과 패딩을 조정합니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치하고, 중앙 정렬합니다.
     - `nav ul li`: 각 네비게이션 항목의 마진을 조정합니다.
     - `main`: 메인 콘텐츠의 패딩을 줄입니다.
     - `section, aside`: 섹션과 사이드바의 패딩을 줄입니다.

### 3. JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loading.style.display = 'none';
        content.style.display = 'block';
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **요소 선택:**
   - `const loading = document.getElementById("loading");`: 로딩 애니메이션 요소를 선택합니다.
   - `const content = document.getElementById("content");`: 실제 페이지 콘텐츠 요소를 선택합니다.

3. **load 이벤트:**
   - `window.addEventListener("load", function() { ... });`: 페이지의 모든 리소스(이미지, 스타일 등)가 완전히 로드되면 실행되는 이벤트입니다.
   - `loading.style.display = 'none';`: 로딩 애니메이션을 숨깁니다.
   - `content.style.display = 'block';`: 실제 페이지 콘텐츠를 표시합니다.
