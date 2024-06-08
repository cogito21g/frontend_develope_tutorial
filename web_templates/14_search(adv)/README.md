# Search(adv)
- 고급 필터 기능을 구현
- 사용자가 다양한 조건을 설정하여 항목을 필터링
- 각 항목에 대해 여러 속성을 정의하고, 사용자가 이 속성을 기반으로 필터링할 수 있는 UI를 추가



### 동작 방식 설명

1. **HTML 부분:**
   - `<div class="filters">`: 필터 입력 필드와 필터 버튼을 담는 컨테이너를 만듭니다.
     - `<input type="text" id="nameFilter" placeholder="Filter by name...">`: 이름으로 필터링할 수 있는 입력 필드를 만듭니다.
     - `<input type="text" id="categoryFilter" placeholder="Filter by category...">`: 카테고리로 필터링할 수 있는 입력 필드를 만듭니다.
     - `<input type="number" id="minPriceFilter" placeholder="Min price">`: 최소 가격으로 필터링할 수 있는 입력 필드를 만듭니다.
     - `<input type="number" id="maxPriceFilter" placeholder="Max price">`: 최대 가격으로 필터링할 수 있는 입력 필드를 만듭니다.
     - `<button id="filterButton">Apply Filters</button>`: 필터를 적용하는 버튼을 만듭니다.
   - `<ul id="itemList">`: 필터링할 항목 목록을 정의합니다. 각각의 항목은 `<li>` 태그로 작성되며, 각 항목에는 `data-name`, `data-category`, `data-price` 속성이 추가됩니다.

2. **CSS 부분:**
   - 기본적인 스타일을 설정하여 필터 입력 필드와 목록을 보기 좋게 만듭니다.
   - `.filters` 클래스는 필터 입력 필드와 버튼을 수직으로 정렬하고 간격을 설정합니다.

3. **JavaScript 부분:**
   - DOM이 완전히 로드된 후 실행되도록 `DOMContentLoaded` 이벤트를 사용합니다.
   - 필터 입력 필드와 필터 버튼을 선택합니다.
   - 필터 버튼에 클릭 이벤트 리스너를 추가합니다.
   - 버튼이 클릭되면 각 입력 필드의 값을 가져와서 소문자로 변환합니다.
   - 각 항목을 순회하며 항목의 속성과 필터 값을 비교합니다.
     - `nameMatch`: 이름 필터와 항목의 이름이 일치하는지 확인합니다.
     - `categoryMatch`: 카테고리 필터와 항목의 카테고리가 일치하는지 확인합니다.
     - `minPriceMatch`: 최소 가격 필터와 항목의 가격이 일치하는지 확인합니다.
     - `maxPriceMatch`: 최대 가격 필터와 항목의 가격이 일치하는지 확인합니다.
   - 모든 조건이 일치하면 항목을 표시하고, 하나라도 일치하지 않으면 항목을 숨깁니다.


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Filter Functionality</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Filter Items</h2>
        <div class="filters">
            <input type="text" id="nameFilter" placeholder="Filter by name...">
            <input type="text" id="categoryFilter" placeholder="Filter by category...">
            <input type="number" id="minPriceFilter" placeholder="Min price">
            <input type="number" id="maxPriceFilter" placeholder="Max price">
            <button id="filterButton">Apply Filters</button>
        </div>
        <ul id="itemList">
            <li data-name="Apple" data-category="Fruit" data-price="1">Apple - Fruit - $1</li>
            <li data-name="Banana" data-category="Fruit" data-price="2">Banana - Fruit - $2</li>
            <li data-name="Carrot" data-category="Vegetable" data-price="3">Carrot - Vegetable - $3</li>
            <li data-name="Doughnut" data-category="Dessert" data-price="4">Doughnut - Dessert - $4</li>
            <li data-name="Eggplant" data-category="Vegetable" data-price="5">Eggplant - Vegetable - $5</li>
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
     - `<title>Advanced Filter Functionality</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 고급 필터 기능을 담을 컨테이너를 만듭니다.
     - `<h2>Filter Items</h2>`: 제목을 표시합니다.
     - `<div class="filters">`: 필터 입력 필드와 필터 버튼을 담는 컨테이너를 만듭니다.
       - `<input type="text" id="nameFilter" placeholder="Filter by name...">`: 이름으로 필터링할 수 있는 입력 필드를 만듭니다.
       - `<input type="text" id="categoryFilter" placeholder="Filter by category...">`: 카테고리로 필터링할 수 있는 입력 필드를 만듭니다.
       - `<input type="number" id="minPriceFilter" placeholder="Min price">`: 최소 가격으로 필터링할 수 있는 입력 필드를 만듭니다.
       - `<input type="number" id="maxPriceFilter" placeholder="Max price">`: 최대 가격으로 필터링할 수 있는 입력 필드를 만듭니다.
       - `<button id="filterButton">Apply Filters</button>`: 필터를 적용하는 버튼을 만듭니다.
     - `<ul id="itemList">`: 필터링할 항목 목록을 정의합니다. 각각의 항목은 `<li>` 태그로 작성되며, 각 항목에는 `data-name`, `data-category`, `data-price` 속성이 추가됩니다.

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

.filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
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

4. **.filters 스타일:**
   - `display: flex;`: 필터 입력 필드와 버튼을 플렉스박스로 정렬합니다.
   - `flex-direction: column;`: 필터 입력 필드와 버튼을 세로로 배치합니다.
   - `gap: 10px;`: 각 필터 입력 필드와 버튼 사이에 10픽셀 간격을 설정합니다.
   - `margin-bottom: 20px;`: 필터 입력 필드와 버튼 아래에 20픽셀의 여백을 설정합니다.

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
    const nameFilter = document.getElementById("nameFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const minPriceFilter = document.getElementById("minPriceFilter");
    const maxPriceFilter = document.getElementById("maxPriceFilter");
    const filterButton = document.getElementById("filterButton");
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");

    filterButton.addEventListener("click", function() {
        const nameValue = nameFilter.value.toLowerCase();
        const categoryValue = categoryFilter.value.toLowerCase();
        const minPriceValue = parseFloat(minPriceFilter.value);
        const maxPriceValue = parseFloat(maxPriceFilter.value);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemName = item.getAttribute("data-name").toLowerCase();
            const itemCategory = item.getAttribute("data-category").toLowerCase();
            const itemPrice = parseFloat(item.getAttribute("data-price"));

            let nameMatch = !nameValue || itemName.includes(nameValue);
            let categoryMatch = !categoryValue || itemCategory.includes(categoryValue);
            let minPriceMatch = isNaN(minPriceValue) || itemPrice >= minPriceValue;
            let maxPriceMatch = isNaN(maxPriceValue) || itemPrice <= maxPriceValue;

            if (nameMatch && categoryMatch &&

 minPriceMatch && maxPriceMatch) {
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

2. **필터 입력 필드와 버튼 선택:**
   - `const nameFilter = document.getElementById("nameFilter");`: `nameFilter` ID를 가진 입력 필드 요소를 선택합니다.
   - `const categoryFilter = document.getElementById("categoryFilter");`: `categoryFilter` ID를 가진 입력 필드 요소를 선택합니다.
   - `const minPriceFilter = document.getElementById("minPriceFilter");`: `minPriceFilter` ID를 가진 입력 필드 요소를 선택합니다.
   - `const maxPriceFilter = document.getElementById("maxPriceFilter");`: `maxPriceFilter` ID를 가진 입력 필드 요소를 선택합니다.
   - `const filterButton = document.getElementById("filterButton");`: `filterButton` ID를 가진 버튼 요소를 선택합니다.
   - `const itemList = document.getElementById("itemList");`: `itemList` ID를 가진 목록 요소를 선택합니다.
   - `const items = itemList.getElementsByTagName("li");`: 목록에서 모든 `<li>` 항목을 선택합니다.

3. **필터 버튼 클릭 이벤트 리스너 추가:**
   - `filterButton.addEventListener("click", function() { ... });`: 필터 버튼이 클릭되면 함수를 실행합니다.

4. **필터 값 가져오기:**
   - `const nameValue = nameFilter.value.toLowerCase();`: 이름 필터의 값을 소문자로 변환하여 가져옵니다.
   - `const categoryValue = categoryFilter.value.toLowerCase();`: 카테고리 필터의 값을 소문자로 변환하여 가져옵니다.
   - `const minPriceValue = parseFloat(minPriceFilter.value);`: 최소 가격 필터의 값을 부동 소수점 숫자로 변환하여 가져옵니다.
   - `const maxPriceValue = parseFloat(maxPriceFilter.value);`: 최대 가격 필터의 값을 부동 소수점 숫자로 변환하여 가져옵니다.

5. **목록 항목 필터링:**
   - `for (let i = 0; i < items.length; i++) { ... }`: 목록의 각 항목을 순회하며 필터링합니다.
   - `const item = items[i];`: 현재 항목을 선택합니다.
   - `const itemName = item.getAttribute("data-name").toLowerCase();`: 현재 항목의 이름 속성을 소문자로 변환하여 가져옵니다.
   - `const itemCategory = item.getAttribute("data-category").toLowerCase();`: 현재 항목의 카테고리 속성을 소문자로 변환하여 가져옵니다.
   - `const itemPrice = parseFloat(item.getAttribute("data-price"));`: 현재 항목의 가격 속성을 부동 소수점 숫자로 변환하여 가져옵니다.

6. **조건 확인:**
   - `let nameMatch = !nameValue || itemName.includes(nameValue);`: 이름 필터와 항목의 이름이 일치하는지 확인합니다. 필터가 비어 있으면 모든 항목을 포함합니다.
   - `let categoryMatch = !categoryValue || itemCategory.includes(categoryValue);`: 카테고리 필터와 항목의 카테고리가 일치하는지 확인합니다. 필터가 비어 있으면 모든 항목을 포함합니다.
   - `let minPriceMatch = isNaN(minPriceValue) || itemPrice >= minPriceValue;`: 최소 가격 필터와 항목의 가격이 일치하는지 확인합니다. 필터가 비어 있으면 모든 항목을 포함합니다.
   - `let maxPriceMatch = isNaN(maxPriceValue) || itemPrice <= maxPriceValue;`: 최대 가격 필터와 항목의 가격이 일치하는지 확인합니다. 필터가 비어 있으면 모든 항목을 포함합니다.

7. **항목 표시/숨기기:**
   - `if (nameMatch && categoryMatch && minPriceMatch && maxPriceMatch) { ... }`: 모든 조건이 일치하면 항목을 표시하고, 하나라도 일치하지 않으면 항목을 숨깁니다.
     - `item.style.display = "";`: 항목을 표시합니다.
     - `item.style.display = "none";`: 항목을 숨깁니다.
