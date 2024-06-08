# Responsive Web Design
- 반응형 디자인을 구현
- CSS 미디어 쿼리를 사용하여 다양한 화면 크기에 맞게 레이아웃을 조정


### 동작 방식 설명

1. **HTML 부분:**
   - 웹 페이지의 기본 구조를 정의합니다. `header`, `nav`, `main`, `section`, `aside`, `footer` 요소를 사용하여 레이아웃을 만듭니다.
   - `nav` 요소는 가로 방향의 네비게이션 바를 만듭니다.
   - `main` 요소 안에 `section`과 `aside` 요소를 배치하여 메인 콘텐츠와 사이드바를 구성합니다.

2. **CSS 부분:**
   - 기본 스타일을 설정하여 페이지의 전반적인 디자인을 정의합니다.
   - `flex` 속성을 사용하여 `main` 요소 안의 `section`과 `aside` 요소를 가로로 배치합니다.
   - `nav ul`에 `display: flex;`를 설정하여 네비게이션 항목을 가로로 정렬합니다.

3. **미디어 쿼리:**
   - **768px 이하:** 화면 너비가 768px 이하일 때 `nav ul` 요소와 `main` 요소 안의 콘텐츠를 세로로 배치합니다.
   - **480px 이하:** 화면 너비가 480px 이하일 때 `header`와 `footer`의 패딩을 줄이고, `nav ul` 요소의 네비게이션 항목을 세로로 배치합니다. 또한, `main` 요소의 패딩을 줄이고 `section`과 `aside` 요소의 패딩을 줄입니다.


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Responsive Web Page</h1>
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
            <h2>Welcome to Our Website</h2>
            <p>This is a sample paragraph to demonstrate responsive design using CSS media queries.</p>
        </section>
        <aside>
            <h3>Sidebar</h3>
            <p>This is a sidebar content.</p>
        </aside>
    </main>
    <footer>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
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
   - `<title>Responsive Design</title>`: 웹 페이지의 제목을 설정합니다.
   - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

3. **`<body>` 태그:**
   - `<header>`: 페이지의 헤더를 정의합니다. 제목을 포함합니다.
   - `<nav>`: 네비게이션 바를 정의합니다. `ul` 요소는 네비게이션 항목을 나열합니다.
   - `<main>`: 주요 콘텐츠 영역을 정의합니다. `section`과 `aside` 요소를 포함합니다.
     - `<section>`: 메인 콘텐츠를 정의합니다. 제목과 단락을 포함합니다.
     - `<aside>`: 사이드바를 정의합니다. 제목과 단락을 포함합니다.
   - `<footer>`: 페이지의 푸터를 정의합니다. 저작권 정보를 포함합니다.

### 2. CSS - 스타일링 및 미디어 쿼리

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

nav {
    background: #444;
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
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
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

2. **헤더 스타일:**
   - `header`: 헤더의 배경색, 글자색, 패딩, 텍스트 정렬을 설정합니다.

3. **네비게이션 스타일:**
   - `nav`: 네비게이션 바의 배경색을 설정합니다.
   - `nav ul`: 네비게이션 목록의 기본 스타일을 제거하고, Flexbox를 사용하여 가로로 배치합니다.
   - `nav ul li`: 각 네비게이션 항목의 마진을 설정합니다.
   - `nav ul li a`: 네비게이션 링크의 글자색, 텍스트 장식을 설정하고, 패딩을 추가하여 클릭 가능한 영역을 확대합니다.

4. **메인 콘텐츠 스타일:**
   - `main`: Flexbox를 사용하여 메인 콘텐츠 영역을 가로로 배치합니다. `flex-wrap` 속성을 사용하여 작은 화면에서 줄 바꿈을 허용합니다.
   - `section`: 메인 콘텐츠의 Flexbox 비율을 설정하고, 패딩을 추가합니다.
   - `aside`: 사이드바의 Flexbox 비율을 설정하고, 배경색과 패딩을 추가합니다.

5. **푸터 스타일:**
   - `footer`: 푸터의 배경색, 글자색, 텍스트 정렬, 패딩을 설정하고, 화면 하단에 고정합니다.

6. **미디어 쿼리:**
   - **768px 이하:** 화면 너비가 768px 이하일 때 적용됩니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치합니다.
     - `main`: 메인 콘텐츠를 세로로 배치합니다.
     - `aside`: 사이드바를 메인 콘텐츠 위로 이동시킵니다(`order: -1`).

   - **480px 이하:** 화면 너비가 480px 이하일 때 적용됩니다.
     - `header, footer`: 헤더와 푸터의 텍스트 정렬과 패딩을 조정합니다.
     - `nav ul`: 네비게이션 목록을 세로로 배치하고, 중앙 정렬합니다.
     - `nav ul li`: 각 네비게이션 항목의 마진을 조정합니다.
     - `main`: 메인 콘텐츠의 패딩을 줄입니다.
     - `section, aside`: 섹션과 사이드바의 패딩을 줄입니다.

