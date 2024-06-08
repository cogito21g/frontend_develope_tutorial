# 간단한 웹 예제
- 간단한 웹 페이지를 구성하는 HTML, CSS, JavaScript 파일의 예제입니다. 
- 코드에 대한 설명은 아래와 같습니다.

### index.html
HTML 파일은 웹 페이지의 구조와 내용을 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Web Page</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section of the web page.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This section contains information about the website.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>You can contact us via email at <a href="mailto:info@example.com">info@example.com</a>.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Web Page</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
```

- `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
- `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
- `<head>`: 메타데이터와 스타일, 제목 등을 포함합니다.
- `<link rel="stylesheet" href="styles.css">`: CSS 파일을 링크합니다.
- `<body>`: 웹 페이지의 본문입니다. 여기에는 헤더, 메인 콘텐츠, 푸터가 포함됩니다.
- `<header>`: 웹 페이지의 헤더 부분입니다. 제목과 내비게이션 메뉴를 포함합니다.
- `<nav>`: 내비게이션 메뉴를 정의합니다.
- `<main>`: 주요 콘텐츠를 포함합니다.
- `<section>`: 각각의 콘텐츠 섹션을 정의합니다.
- `<footer>`: 푸터 부분입니다.
- `<script src="scripts.js"></script>`: JavaScript 파일을 링크합니다.

### styles.css
CSS 파일은 웹 페이지의 스타일을 정의합니다.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 1rem;
}

section {
    margin: 20px 0;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
}
```

- `body`: 전체 웹 페이지의 기본 스타일을 설정합니다.
- `header`: 헤더 부분의 스타일을 설정합니다. 배경색, 글자색, 패딩, 텍스트 정렬 등을 정의합니다.
- `nav ul`: 내비게이션 메뉴의 리스트 스타일을 제거합니다.
- `nav ul li`: 내비게이션 메뉴 항목을 인라인 블록으로 설정하고 간격을 줍니다.
- `nav ul li a`: 내비게이션 링크의 색상과 밑줄 제거를 설정합니다.
- `main`: 주요 콘텐츠 영역의 패딩을 설정합니다.
- `section`: 각 섹션의 마진을 설정합니다.
- `footer`: 푸터 부분의 스타일을 설정합니다. 배경색, 글자색, 텍스트 정렬, 패딩 등을 정의합니다.

### scripts.js
JavaScript 파일은 웹 페이지에 인터랙티브한 기능을 추가합니다.

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');
    // You can add more JavaScript code here for interactivity
});
```

- `document.addEventListener('DOMContentLoaded', (event) => { ... })`: HTML 문서의 DOM이 완전히 로드되고 파싱되었을 때 실행될 코드를 정의합니다.
- `console.log('The DOM is fully loaded and parsed')`: 콘솔에 메시지를 출력합니다. 이 부분에 추가적인 JavaScript 코드를 작성하여 인터랙티브 기능을 구현할 수 있습니다.

