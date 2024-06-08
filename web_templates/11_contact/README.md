# Contact
- 연락처 양식을 구현
- 사용자들이 쉽게 문의나 피드백을 보낼 수 있도록 연락처 양식을 구현
- 이름, 이메일, 메시지 필드를 포함하고, 제출 후 확인 메시지를 표시


### 동작 방식 설명

1. **HTML 부분:**
   - `<form>` 태그를 사용하여 양식 요소를 정의합니다.
   - `input` 태그와 `textarea` 태그를 사용하여 이름, 이메일, 메시지 입력 필드를 만듭니다.
   - `button` 태그를 사용하여 제출 버튼을 추가합니다.
   - `div` 태그를 사용하여 양식 제출 후 표시할 확인 메시지를 만듭니다. 이 `div`는 처음에는 숨겨져 있습니다.

2. **CSS 부분:**
   - 기본적인 스타일을 설정하여 양식을 보기 좋게 만듭니다.
   - `hidden` 클래스를 사용하여 확인 메시지를 숨깁니다.

3. **JavaScript 부분:**
   - DOM이 완전히 로드된 후 실행되도록 `DOMContentLoaded` 이벤트를 사용합니다.
   - 양식 제출 이벤트를 감지하고, 기본 제출 동작을 방지합니다.
   - 폼 데이터를 처리할 수 있는 부분(서버로 데이터 전송 등)을 추가할 수 있습니다.
   - 제출 후 확인 메시지를 표시하고, 양식을 초기화합니다.


### HTML - 기본 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
        <div id="confirmation" class="hidden">Thank you for your message!</div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **DOCTYPE 및 기본 설정:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>Contact Form</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 컨텐츠를 담을 컨테이너를 만듭니다.
     - `<h2>Contact Us</h2>`: 제목을 표시합니다.
     - `<form id="contactForm">`: 양식을 정의합니다.
       - `<label for="name">Name:</label>`: 이름 입력 필드의 라벨을 만듭니다.
       - `<input type="text" id="name" name="name" required>`: 텍스트 입력 필드를 만듭니다. `id`와 `name` 속성을 사용하여 필드를 식별하고, `required` 속성을 사용하여 필수 입력 필드로 지정합니다.
       - `<label for="email">Email:</label>`: 이메일 입력 필드의 라벨을 만듭니다.
       - `<input type="email" id="email" name="email" required>`: 이메일 입력 필드를 만듭니다.
       - `<label for="message">Message:</label>`: 메시지 입력 필드의 라벨을 만듭니다.
       - `<textarea id="message" name="message" rows="5" required></textarea>`: 텍스트 영역 입력 필드를 만듭니다.
       - `<button type="submit">Submit</button>`: 제출 버튼을 만듭니다.
     - `<div id="confirmation" class="hidden">Thank you for your message!</div>`: 제출 후 표시할 확인 메시지를 정의합니다. 처음에는 `hidden` 클래스로 숨겨져 있습니다.
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 연결합니다.

### CSS - 스타일링

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h2 {
    text-align: center;
}

label {
    display: block;
    margin-top: 10px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

.hidden {
    display: none;
}
```

#### 상세 설명:

1. **body 스타일:**
   - `font-family: Arial, sans-serif;`: 페이지의 기본 폰트를 설정합니다.
   - `background-color: #f2f2f2;`: 페이지 배경색을 연한 회색으로 설정합니다.
   - `display: flex;`: Flexbox를 사용하여 정렬합니다.
   - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
   - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
   - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.
   - `margin: 0;`: 페이지의 기본 마진을 제거합니다.

2. **.container 스타일:**
   - `background-color: white;`: 컨테이너 배경색을 흰색으로 설정합니다.
   - `padding: 20px;`: 컨테이너 내부 여백을 설정합니다.
   - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
   - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
   - `width: 300px;`: 컨테이너 너비를 300px로 설정합니다.

3. **h2 스타일:**
   - `text-align: center;`: 텍스트를 가운데 정렬합니다.

4. **label 스타일:**
   - `display: block;`: 블록 요소로 설정하여 한 줄에 하나씩 표시합니다.
   - `margin-top: 10px;`: 위쪽 여백을 설정합니다.

5. **input, textarea 스타일:**
   - `width: 100%;`: 입력 필드 너비를 100%로 설정합니다.
   - `padding: 10px;`: 내부 여백을 설정합니다.
   - `margin-top: 5px;`: 위쪽 여백을 설정합니다.
   - `border: 1px solid #ccc;`: 테두리를 연한 회색으로 설정합니다.
   - `border-radius: 4px;`: 모서리를 둥글게 설정합니다.
   - `box-sizing: border-box;`: 테두리와 패딩을 포함하여 너비를 계산합니다.

6. **button 스타일:**
   - `width: 100%;`: 버튼 너비를 100%로 설정합니다.
   - `background-color: #4CAF50;`: 버튼 배경색을 초록색으로 설정합니다.
   - `color: white;`: 버튼 텍스트 색상을 흰색으로 설정합니다.
   - `padding: 10px;`: 내부 여백을 설정합니다.
   - `border: none;`: 테두리를 제거합니다.
   - `border-radius: 4px;`: 모서리를 둥글게 설정합니다.
   - `cursor: pointer;`: 마우스 커서를 포인터로 변경합니다.
   - `margin-top: 10px;`: 위쪽 여백을 설정합니다.
   - `button:hover`: 마우스를 버튼 위에 올렸을 때 배경색을 약간 어둡게 설정합니다.

7. **.hidden 스타일:**
   - `display: none;`: 요소를 숨깁니다.

### JavaScript - 동작 구현

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        // 여기에서 폼 데이터를 처리하거나 서버로 보낼 수 있습니다.
        // 예: form.submit();

        // 확인 메시지 표시
        confirmation.classList.remove("hidden");

        // 양식 초기화
        form.reset();
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 함수를 실행합니다. 이 이벤트를 사용하면 모든 DOM 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **폼 요소 및 확인 메시지 요소 선택:**
   - `const form = document.getElementById("contactForm");`: `contactForm` ID를 가진 폼 요소를 선택합니다.
   - `const

 confirmation = document.getElementById("confirmation");`: `confirmation` ID를 가진 확인 메시지 요소를 선택합니다.

3. **폼 제출 이벤트 리스너 추가:**
   - `form.addEventListener("submit", function(event) { ... });`: 폼 제출 이벤트를 감지하고 함수를 실행합니다.
   - `event.preventDefault();`: 폼 제출의 기본 동작을 방지합니다. 기본적으로 폼이 제출되면 페이지가 새로고침됩니다. 이 동작을 막기 위해 `preventDefault`를 사용합니다.

4. **폼 데이터 처리 및 확인 메시지 표시:**
   - `confirmation.classList.remove("hidden");`: `hidden` 클래스를 제거하여 확인 메시지를 표시합니다.

5. **폼 초기화:**
   - `form.reset();`: 폼의 모든 입력 필드를 초기화하여 빈 상태로 만듭니다.

이렇게 하면 사용자가 양식을 제출하면 페이지가 새로고침되지 않고 확인 메시지가 표시되며, 양식이 초기화됩니다. 추가로 폼 데이터를 서버로 전송하려면 AJAX 요청 등을 추가로 구현할 수 있습니다.물론입니다! 각 코드 블록의 상세 설명을 제공해드리겠습니다.

### HTML - 기본 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
        <div id="confirmation" class="hidden">Thank you for your message!</div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **DOCTYPE 및 기본 설정:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>Contact Form</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 컨텐츠를 담을 컨테이너를 만듭니다.
     - `<h2>Contact Us</h2>`: 제목을 표시합니다.
     - `<form id="contactForm">`: 양식을 정의합니다.
       - `<label for="name">Name:</label>`: 이름 입력 필드의 라벨을 만듭니다.
       - `<input type="text" id="name" name="name" required>`: 텍스트 입력 필드를 만듭니다. `id`와 `name` 속성을 사용하여 필드를 식별하고, `required` 속성을 사용하여 필수 입력 필드로 지정합니다.
       - `<label for="email">Email:</label>`: 이메일 입력 필드의 라벨을 만듭니다.
       - `<input type="email" id="email" name="email" required>`: 이메일 입력 필드를 만듭니다.
       - `<label for="message">Message:</label>`: 메시지 입력 필드의 라벨을 만듭니다.
       - `<textarea id="message" name="message" rows="5" required></textarea>`: 텍스트 영역 입력 필드를 만듭니다.
       - `<button type="submit">Submit</button>`: 제출 버튼을 만듭니다.
     - `<div id="confirmation" class="hidden">Thank you for your message!</div>`: 제출 후 표시할 확인 메시지를 정의합니다. 처음에는 `hidden` 클래스로 숨겨져 있습니다.
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 연결합니다.

### CSS - 스타일링

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h2 {
    text-align: center;
}

label {
    display: block;
    margin-top: 10px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

.hidden {
    display: none;
}
```

#### 상세 설명:

1. **body 스타일:**
   - `font-family: Arial, sans-serif;`: 페이지의 기본 폰트를 설정합니다.
   - `background-color: #f2f2f2;`: 페이지 배경색을 연한 회색으로 설정합니다.
   - `display: flex;`: Flexbox를 사용하여 정렬합니다.
   - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
   - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
   - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.
   - `margin: 0;`: 페이지의 기본 마진을 제거합니다.

2. **.container 스타일:**
   - `background-color: white;`: 컨테이너 배경색을 흰색으로 설정합니다.
   - `padding: 20px;`: 컨테이너 내부 여백을 설정합니다.
   - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
   - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
   - `width: 300px;`: 컨테이너 너비를 300px로 설정합니다.

3. **h2 스타일:**
   - `text-align: center;`: 텍스트를 가운데 정렬합니다.

4. **label 스타일:**
   - `display: block;`: 블록 요소로 설정하여 한 줄에 하나씩 표시합니다.
   - `margin-top: 10px;`: 위쪽 여백을 설정합니다.

5. **input, textarea 스타일:**
   - `width: 100%;`: 입력 필드 너비를 100%로 설정합니다.
   - `padding: 10px;`: 내부 여백을 설정합니다.
   - `margin-top: 5px;`: 위쪽 여백을 설정합니다.
   - `border: 1px solid #ccc;`: 테두리를 연한 회색으로 설정합니다.
   - `border-radius: 4px;`: 모서리를 둥글게 설정합니다.
   - `box-sizing: border-box;`: 테두리와 패딩을 포함하여 너비를 계산합니다.

6. **button 스타일:**
   - `width: 100%;`: 버튼 너비를 100%로 설정합니다.
   - `background-color: #4CAF50;`: 버튼 배경색을 초록색으로 설정합니다.
   - `color: white;`: 버튼 텍스트 색상을 흰색으로 설정합니다.
   - `padding: 10px;`: 내부 여백을 설정합니다.
   - `border: none;`: 테두리를 제거합니다.
   - `border-radius: 4px;`: 모서리를 둥글게 설정합니다.
   - `cursor: pointer;`: 마우스 커서를 포인터로 변경합니다.
   - `margin-top: 10px;`: 위쪽 여백을 설정합니다.
   - `button:hover`: 마우스를 버튼 위에 올렸을 때 배경색을 약간 어둡게 설정합니다.

7. **.hidden 스타일:**
   - `display: none;`: 요소를 숨깁니다.

### JavaScript - 동작 구현

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        // 여기에서 폼 데이터를 처리하거나 서버로 보낼 수 있습니다.
        // 예: form.submit();

        // 확인 메시지 표시
        confirmation.classList.remove("hidden");

        // 양식 초기화
        form.reset();
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 함수를 실행합니다. 이 이벤트를 사용하면 모든 DOM 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **폼 요소 및 확인 메시지 요소 선택:**
   - `const form = document.getElementById("contactForm");`: `contactForm` ID를 가진 폼 요소를 선택합니다.
   - `const

 confirmation = document.getElementById("confirmation");`: `confirmation` ID를 가진 확인 메시지 요소를 선택합니다.

3. **폼 제출 이벤트 리스너 추가:**
   - `form.addEventListener("submit", function(event) { ... });`: 폼 제출 이벤트를 감지하고 함수를 실행합니다.
   - `event.preventDefault();`: 폼 제출의 기본 동작을 방지합니다. 기본적으로 폼이 제출되면 페이지가 새로고침됩니다. 이 동작을 막기 위해 `preventDefault`를 사용합니다.

4. **폼 데이터 처리 및 확인 메시지 표시:**
   - `confirmation.classList.remove("hidden");`: `hidden` 클래스를 제거하여 확인 메시지를 표시합니다.

5. **폼 초기화:**
   - `form.reset();`: 폼의 모든 입력 필드를 초기화하여 빈 상태로 만듭니다.
