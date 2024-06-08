# 발전된 웹 페이지 예제
- 슬라이더, 모달 창, 반응형 디자인 등을 포함하여 좀 더 인터랙티브하고 현대적인 웹 페이지를 구성
- 슬라이더의 애니메이션과 스타일을 개선하고, 모달 창의 스타일 수정

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Modern Web Page</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Welcome to our website</h2>
            <p>This is the home section of the website.</p>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>This section contains information about us.</p>
        </section>
        <section id="services">
            <h2>Our Services</h2>
            <p>Details about the services we offer.</p>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>You can contact us via email at <a href="mailto:info@example.com">info@example.com</a>.</p>
            <button id="openModal">Open Modal</button>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Modern Web Page</p>
    </footer>
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>This is a modal window.</p>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

### styles.css
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

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #444;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
}

nav ul li a:hover {
    background-color: #555;
    border-radius: 5px;
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

#modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 10px 0;
    }
}
```

### scripts.js
```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    // Modal functionality
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
```

### 주요 기능 설명

1. **기본 구조**:
   - `index.html`: 웹 페이지의 구조를 정의합니다.
   - `styles.css`: 웹 페이지의 스타일을 정의합니다.
   - `scripts.js`: 웹 페이지의 인터랙티브 기능을 정의합니다.

2. **반응형 디자인**:
   - 작은 화면에서도 내비게이션 메뉴가 제대로 보이도록 CSS 미디어 쿼리를 사용했습니다.
   - `nav ul`의 `flex-direction`을 변경하여 작은 화면에서 메뉴 항목이 수직으로 배치되도록 했습니다.

3. **모달 창**:
   - 모달 창의 배경을 어둡게 하여 사용자가 집중할 수 있도록 했습니다.
   - 모달 창의 닫기 버튼을 클릭하거나 모달 외부를 클릭하면 모달이 닫히도록 JavaScript를 구현했습니다.
