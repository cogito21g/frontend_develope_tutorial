# Search
- 간단한 검색 기능을 구현해
- 검색어를 입력하면 목록에서 해당 검색어를 포함하는 항목을 필터링하여 표시


### 동작 방식 설명

1. **HTML 부분:**
   - `<input>` 태그를 사용하여 검색 입력 필드를 만듭니다. `id="searchInput"` 속성으로 필드를 식별하고, `placeholder` 속성으로 검색 힌트를 제공합니다.
   - `<ul>` 태그를 사용하여 검색할 항목 목록을 정의합니다. 각각의 항목은 `<li>` 태그로 작성됩니다.

2. **CSS 부분:**
   - 기본적인 스타일을 설정하여 검색 기능을 보기 좋게 만듭니다.
   - `#searchInput`의 스타일을 설정하여 입력 필드의 모양을 정의합니다.
   - `#itemList`의 스타일을 설정하여 목록의 모양을 정의합니다.
   - `#itemList li`의 스타일을 설정하여 각 항목의 모양을 정의합니다.

3. **JavaScript 부분:**
   - DOM이 완전히 로드된 후 실행되도록 `DOMContentLoaded` 이벤트를 사용합니다.
   - 검색 입력 필드와 목록 항목을 선택합니다.
   - 검색 입력 필드에서 키를 누를 때마다 `keyup` 이벤트가 발생하여 함수가 실행됩니다.
   - 입력된 검색어를 소문자로 변환하여 필터로 사용합니다.
   - 각 항목의 텍스트를 소문자로 변환한 후 필터와 비교합니다.
   - 필터에 맞는 항목은 표시하고, 맞지 않는 항목은 숨깁니다.


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Functionality</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Search Items</h2>
        <input type="text" id="searchInput" placeholder="Search...">
        <ul id="itemList">
            <li>Apple</li>
            <li>Banana</li>
            <li>Orange</li>
            <li>Grape</li>
            <li>Pineapple</li>
        </ul>
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
     - `<title>Search Functionality</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 검색 기능을 담을 컨테이너를 만듭니다.
     - `<h2>Search Items</h2>`: 제목을 표시합니다.
     - `<input type="text" id="searchInput" placeholder="Search...">`: 검색 입력 필드를 만듭니다. `id="searchInput"` 속성으로 필드를 식별하고, `placeholder` 속성으로 검색 힌트를 제공합니다.
     - `<ul id="itemList">`: 검색할 항목 목록을 정의합니다. 각각의 항목은 `<li>` 태그로 작성됩니다.

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

#searchInput {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

#itemList {
    list-style-type: none;
    padding: 0;
}

#itemList li {
    padding: 8px;
    border-bottom: 1px solid #ccc;
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

4. **#searchInput 스타일:**
   - `width: 100%;`: 입력 필드 너비를 100%로 설정합니다.
   - `padding: 10px;`: 내부 여백을 설정합니다.
   - `margin-bottom: 10px;`: 아래쪽 여백을 설정합니다.
   - `border: 1px solid #ccc;`: 테두리를 연한 회색으로 설정합니다.
   - `border-radius: 4px;`: 모서리를 둥글게 설정합니다.
   - `box-sizing: border-box;`: 테두리와 패딩을 포함하여 너비를 계산합니다.

5. **#itemList 스타일:**
   - `list-style-type: none;`: 목록의 기본 스타일(점, 숫자 등)을 제거합니다.
   - `padding: 0;`: 목록의 기본 패딩을 제거합니다.

6. **#itemList li 스타일:**
   - `padding: 8px;`: 목록 항목의 내부 여백을 설정합니다.
   - `border-bottom: 1px solid #ccc;`: 목록 항목 사이에 연한 회색 테두리를 추가합니다.

### 3. JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");

    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent || item.innerText;
            
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 함수를 실행합니다. 이 이벤트를 사용하면 모든 DOM 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **검색 입력 필드와 목록 항목 선택:**
   - `const searchInput = document.getElementById("searchInput");`: `searchInput` ID를 가진 입력 필드 요소를 선택합니다.
   - `const itemList = document.getElementById("itemList");`: `itemList` ID를 가진 목록 요소를 선택합니다.
   - `const items = itemList.getElementsByTagName("li");`: 목록에서 모든 `<li>` 항목을 선택합니다.

3. **검색 입력 필드 이벤트 리스너 추가:**
   - `searchInput.addEventListener("keyup", function() { ... });`: 검색 입력 필드에서 키를 누를 때마다 `keyup` 이벤트가 발생하여 함수를 실행합니다.

4. **검색어 필터링:**
   - `const filter = searchInput.value.toLowerCase();`: 입력된 검색어를 소문자로 변환하여 필터로 사용합니다.
   - `for (let i = 0; i < items.length; i++) { ... }`: 목록의 각 항목을 순회하며 필터링합니다.
   - `const item = items[i];`: 현재 항목을 선택합니다.
   - `const text = item.textContent || item.innerText;`: 현재 항목의 텍스트 콘텐츠를 가져옵니다.
   - `if (text.toLowerCase().indexOf(filter) > -1) { ... }`: 항목 텍스트를 소문자로 변환한 후 필터와 비교합니다. 필터를 포함하는 항목은 표시하고, 포함하지 않는 항목은 숨깁니다.
     - `item.style.display = "";`: 항목을 표시합니다.
     - `item.style.display = "none";`: 항목을 숨깁니다.

