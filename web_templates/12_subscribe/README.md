# Subscribe
- 뉴스레터나 업데이트를 이메일로 받을 수 있도록 구독 양식 추가
- 이메일 주소를 입력받고, 가입 확인 이메일을 보내는 기능을 구현
- 구독 기능을 구현
- 사용자가 이메일 주소를 입력하고 구독 버튼을 클릭하면 확인 메시지가 표시되는 간단한 구독 양식

### 동작 방식 설명

1. **HTML 부분:**
   - `<form>` 태그를 사용하여 구독 양식 요소를 정의합니다.
   - `input` 태그를 사용하여 이메일 입력 필드를 만듭니다. `type="email"` 속성을 사용하여 이메일 형식을 지정하고, `required` 속성을 사용하여 필수 입력 필드로 지정합니다.
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


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscribe Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Subscribe to Our Newsletter</h2>
        <form id="subscribeForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Subscribe</button>
        </form>
        <div id="confirmation" class="hidden">Thank you for subscribing!</div>
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
     - `<title>Subscribe Form</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 구독 양식을 담을 컨테이너를 만듭니다.
     - `<h2>Subscribe to Our Newsletter</h2>`: 제목을 표시합니다.
     - `<form id="subscribeForm">`: 양식을 정의합니다.
       - `<label for="email">Email:</label>`: 이메일 입력 필드의 라벨을 만듭니다.
       - `<input type="email" id="email" name="email" required>`: 이메일 입력 필드를 만듭니다. `type="email"` 속성으로 이메일 형식의 입력을 요구하고, `required` 속성으로 필수 입력 필드임을 지정합니다.
       - `<button type="submit">Subscribe</button>`: 제출 버튼을 만듭니다.
     - `<div id="confirmation" class="hidden">Thank you for subscribing!</div>`: 제출 후 표시할 확인 메시지를 정의합니다. 처음에는 `hidden` 클래스로 숨겨져 있습니다.
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 연결합니다.

### 2. CSS - 스타일링

CSS는 웹 페이지의 스타일을 정의합니다.

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

input {
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

5. **input 스타일:**
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

### 3. JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscribeForm");
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
   - `const form = document.getElementById("subscribeForm");`: `subscribeForm` ID를 가진 폼 요소를 선택합니다.
   - `const confirmation = document.getElementById("confirmation");`: `confirmation` ID를 가진 확인 메시지 요소를 선택합니다.

3. **폼 제출 이벤트 리스너 추가:**
   - `form.addEventListener("submit", function(event) { ... });`: 폼 제출 이벤트를 감지하고 함수를 실행합니다.
   - `event.preventDefault();`: 폼 제출의 기본 동작을 방지합니다. 기본적으로 폼이 제출되면 페이지가 새로고침됩니다. 이 동작을 막기 위해 `preventDefault`를 사용합니다.

4. **폼 데이터 처리 및 확인 메시지

 표시:**
   - `confirmation.classList.remove("hidden");`: `hidden` 클래스를 제거하여 확인 메시지를 표시합니다.

5. **폼 초기화:**
   - `form.reset();`: 폼의 모든 입력 필드를 초기화하여 빈 상태로 만듭니다.
