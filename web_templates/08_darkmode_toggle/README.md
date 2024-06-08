# Toggle (Darkmode)


### 동작 방식 설명
1. **HTML**: 버튼 클릭으로 다크 모드와 라이트 모드를 전환할 수 있도록 합니다.
2. **CSS**: 
   - `body.dark-mode`: 다크 모드 상태에서의 스타일을 정의합니다. 배경색과 글자색을 변경합니다.
   - `transition: background-color 0.5s ease, color 0.5s ease`: 배경색과 글자색이 부드럽게 전환되도록 합니다.
3. **JavaScript**: 
   - 버튼 클릭 시 `document.body.classList.toggle('dark-mode')`를 호출하여 `dark-mode` 클래스를 토글합니다.

물론입니다. 다크 모드와 라이트 모드를 전환하는 코드를 상세하게 설명해드리겠습니다.

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Toggle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Dark Mode Toggle</h1>
        <button id="toggleMode">Toggle Dark Mode</button>
    </header>
    <main>
        <p>This is an example of dark mode and light mode toggle.</p>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

**설명:**
- `<button id="toggleMode">Toggle Dark Mode</button>`: 다크 모드와 라이트 모드를 전환하기 위한 버튼입니다. `id` 속성을 통해 JavaScript에서 버튼을 선택할 수 있도록 합니다.

### CSS (styles.css)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f4f4f4; /* 라이트 모드 배경색 */
    color: #333; /* 라이트 모드 글자색 */
    transition: background-color 0.5s ease, color 0.5s ease; /* 배경색과 글자색의 전환 효과 */
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

header button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
}

body.dark-mode {
    background-color: #333; /* 다크 모드 배경색 */
    color: #f4f4f4; /* 다크 모드 글자색 */
}

body.dark-mode header {
    background-color: #444; /* 다크 모드에서 헤더의 배경색 */
}
```

**설명:**
- `body`: 웹 페이지의 기본 스타일을 정의합니다. 기본 배경색은 라이트 모드로 설정하고, 전환 효과를 위해 `transition` 속성을 사용합니다.
- `header`: 헤더의 기본 스타일을 정의합니다. 라이트 모드에서 배경색과 글자색을 설정합니다.
- `header button`: 버튼의 스타일을 정의합니다. 여백과 패딩을 추가하여 버튼이 보기 좋게 합니다.
- `body.dark-mode`: 다크 모드에서 적용될 스타일을 정의합니다. 다크 모드 상태일 때 배경색과 글자색을 변경합니다.
- `body.dark-mode header`: 다크 모드 상태일 때 헤더의 배경색을 변경합니다.

### JavaScript (scripts.js)
```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded and parsed');

    const toggleButton = document.getElementById('toggleMode'); // 버튼 요소 선택

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // 다크 모드 클래스 토글
    });
});
```

**설명:**
- `document.addEventListener('DOMContentLoaded', (event) => { ... })`: HTML 문서가 완전히 로드되고 파싱된 후에 실행될 코드를 정의합니다. 이렇게 하면 DOM 요소를 안전하게 선택하고 조작할 수 있습니다.
- `const toggleButton = document.getElementById('toggleMode')`: `id`가 `toggleMode`인 버튼 요소를 선택하여 `toggleButton` 변수에 저장합니다.
- `toggleButton.addEventListener('click', () => { ... })`: 버튼 클릭 이벤트 리스너를 추가합니다. 버튼이 클릭될 때마다 지정된 함수가 실행됩니다.
  - `document.body.classList.toggle('dark-mode')`: `body` 요소의 클래스 리스트에서 `dark-mode` 클래스를 토글합니다. 이 클래스가 없으면 추가하고, 있으면 제거합니다.

**동작 방식 요약:**
1. **초기 로드**: HTML 문서가 완전히 로드되고 파싱된 후 JavaScript 코드가 실행됩니다.
2. **버튼 선택**: `id`가 `toggleMode`인 버튼을 선택하여 `toggleButton` 변수에 저장합니다.
3. **클릭 이벤트**: 버튼에 클릭 이벤트 리스너를 추가합니다. 버튼을 클릭할 때마다 `body` 요소의 `dark-mode` 클래스가 토글됩니다.
4. **스타일 전환**: `body` 요소에 `dark-mode` 클래스가 추가되면 CSS에서 정의한 다크 모드 스타일이 적용되고, 클래스가 제거되면 라이트 모드 스타일이 적용됩니다.

이 과정을 통해 사용자는 버튼을 클릭하여 다크 모드와 라이트 모드 간에 전환할 수 있습니다. 다크 모드 상태에서는 배경색과 글자색이 변경되어 화면이 어두워지고, 라이트 모드 상태에서는 원래의 밝은 화면으로 돌아갑니다.