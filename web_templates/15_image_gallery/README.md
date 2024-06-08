# Image Gallery
- 간단한 이미지 갤러리 구현
- 갤러리는 이미지 썸네일을 클릭하면 큰 이미지로 표시


### 동작 방식 설명

1. **HTML 부분:**
   - `<div class="gallery-container">`: 갤러리를 담을 컨테이너를 만듭니다.
     - `<h2>Image Gallery</h2>`: 갤러리 제목을 표시합니다.
     - `<div class="gallery">`: 썸네일 이미지를 담을 갤러리를 만듭니다.
       - 각 이미지에 `class="thumbnail"`을 추가하고, `data-full` 속성에 전체 이미지를 지정합니다.
     - `<div class="lightbox hidden" id="lightbox">`: 클릭된 이미지를 큰 화면으로 표시할 라이트박스를 만듭니다.
       - `<span class="close" id="close">&times;</span>`: 라이트박스를 닫기 위한 닫기 버튼을 만듭니다.
       - `<img class="lightbox-content" id="lightbox-content">`: 클릭된 이미지를 표시할 이미지 요소를 만듭니다.

2. **CSS 부분:**
   - 기본적인 스타일을 설정하여 갤러리를 보기 좋게 만듭니다.
   - `.thumbnail` 클래스는 썸네일 이미지를 스타일링합니다.
   - `.lightbox` 클래스는 클릭된 이미지를 큰 화면으로 표시할 때 사용합니다.
   - `.hidden` 클래스는 요소를 숨깁니다.
   - `.lightbox-content` 클래스는 라이트박스 안의 이미지를 스타일링합니다.
   - `.close` 클래스는 라이트박스 닫기 버튼을 스타일링합니다.

3. **JavaScript 부분:**
   - `DOMContentLoaded` 이벤트를 사용하여 문서가 완전히 로드된 후 실행합니다.
   - 모든 썸네일 이미지를 선택하여 클릭 이벤트 리스너를 추가합니다.
   - 썸네일 이미지를 클릭하면 `data-full` 속성에서 전체 이미지 URL을 가져와 라이트박스에 표시하고, 라이트박스를 보이도록 설정합니다.
   - 닫기 버튼을 클릭하면 라이트박스를 숨깁니다.
   - 라이트박스 외부를 클릭하면 라이트박스를 숨깁니다.


### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery-container">
        <h2>Image Gallery</h2>
        <div class="gallery">
            <img src="image1_thumbnail.jpg" alt="Image 1" class="thumbnail" data-full="image1.jpg">
            <img src="image2_thumbnail.jpg" alt="Image 2" class="thumbnail" data-full="image2.jpg">
            <img src="image3_thumbnail.jpg" alt="Image 3" class="thumbnail" data-full="image3.jpg">
            <img src="image4_thumbnail.jpg" alt="Image 4" class="thumbnail" data-full="image4.jpg">
        </div>
        <div class="lightbox hidden" id="lightbox">
            <span class="close" id="close">&times;</span>
            <img class="lightbox-content" id="lightbox-content">
        </div>
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
     - `<title>Image Gallery</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 구조:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="gallery-container">`: 갤러리를 담을 컨테이너를 만듭니다.
     - `<h2>Image Gallery</h2>`: 갤러리 제목을 표시합니다.
     - `<div class="gallery">`: 썸네일 이미지를 담을 갤러리를 만듭니다.
       - 각 이미지에 `class="thumbnail"`을 추가하고, `data-full` 속성에 전체 이미지를 지정합니다. 썸네일 이미지는 `src` 속성에 경로를 넣고, 전체 이미지는 `data-full` 속성에 경로를 넣습니다.
     - `<div class="lightbox hidden" id="lightbox">`: 클릭된 이미지를 큰 화면으로 표시할 라이트박스를 만듭니다.
       - `<span class="close" id="close">&times;</span>`: 라이트박스를 닫기 위한 닫기 버튼을 만듭니다.
       - `<img class="lightbox-content" id="lightbox-content">`: 클릭된 이미지를 표시할 이미지 요소를 만듭니다.

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

.gallery-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    text-align: center;
}

h2 {
    text-align: center;
}

.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.thumbnail {
    width: 150px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.2s;
}

.thumbnail:hover {
    transform: scale(1.1);
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.hidden {
    display: none;
}

.lightbox-content {
    max-width: 90%;
    max-height: 80%;
}

.close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
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

2. **.gallery-container 스타일:**
   - `background-color: white;`: 컨테이너 배경색을 흰색으로 설정합니다.
   - `padding: 20px;`: 컨테이너 내부 여백을 설정합니다.
   - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
   - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
   - `width: 80%;`: 컨테이너 너비를 80%로 설정합니다.
   - `max-width: 800px;`: 컨테이너 최대 너비를 800px로 설정합니다.
   - `text-align: center;`: 텍스트를 가운데 정렬합니다.

3. **h2 스타일:**
   - `text-align: center;`: 텍스트를 가운데 정렬합니다.

4. **.gallery 스타일:**
   - `display: flex;`: Flexbox를 사용하여 갤러리 정렬을 설정합니다.
   - `justify-content: center;`: 갤러리를 수평 방향으로 가운데 정렬합니다.
   - `flex-wrap: wrap;`: 갤러리 항목을 여러 줄로 감쌉니다.
   - `gap: 10px;`: 갤러리 항목 사이의 간격을 10px로 설정합니다.

5. **.thumbnail 스타일:**
   - `width: 150px;`: 썸네일 이미지의 너비를 150px로 설정합니다.
   - `height: 100px;`: 썸네일 이미지의 높이를 100px로 설정합니다.
   - `object-fit: cover;`: 이미지가 비율을 유지하며 요소에 맞추어지도록 설정합니다.
   - `cursor: pointer;`: 마우스를 올렸을 때 포인터 커서를 표시합니다.
   - `transition: transform 0.2s;`: 마우스를 올렸을 때 부드럽게 확대되도록 설정합니다.

6. **.thumbnail:hover 스타일:**
   - `transform: scale(1.1);`: 마우스를 올렸을 때 이미지가 1.1배 확대되도록 설정합니다.

7. **.lightbox 스타일:**
   - `position: fixed;`: 라이트박스를 화면에 고정합니다.
   - `top: 0; left: 0;`: 라이트박스를 화면의 상단과 좌측에 위치시킵니다.
   - `width: 100%; height: 100%;`: 라이트박스가 화면 전체를 덮도록 설정합니다.
   - `background-color: rgba(0, 0, 0, 0.8);`: 배경색을 반투명 검정색으로 설정합니다.
   - `display: flex;`: Flexbox를 사용하여 라이트박스 정렬을 설정합니다.
   - `justify-content: center;`: 라이트박스를 수평 방향으로 가운데 정렬합니다.
   - `align-items: center;`: 라이트박스를 수직 방향으로 가운데 정렬합니다.

8. **.hidden 스타일:**
   - `display: none;`: 요소를 숨깁니다.

9. **.lightbox-content 스타일:**
   - `max-width: 90%;`: 라이트박스 콘텐츠의 최대 너비를 90%로 설정합니다.
   - `max-height: 80%;`: 라이트박스 콘텐츠

의 최대 높이를 80%로 설정합니다.

10. **.close 스타일:**
    - `position: absolute;`: 닫기 버튼을 절대 위치로 설정합니다.
    - `top: 20px;`: 닫기 버튼을 상단에서 20px 떨어지도록 설정합니다.
    - `right: 40px;`: 닫기 버튼을 오른쪽에서 40px 떨어지도록 설정합니다.
    - `color: white;`: 닫기 버튼의 색상을 흰색으로 설정합니다.
    - `font-size: 40px;`: 닫기 버튼의 폰트 크기를 40px로 설정합니다.
    - `font-weight: bold;`: 닫기 버튼의 폰트를 굵게 설정합니다.
    - `cursor: pointer;`: 마우스를 올렸을 때 포인터 커서를 표시합니다.

### 3. JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const close = document.getElementById("close");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const fullImageSrc = thumbnail.getAttribute("data-full");
            lightboxContent.src = fullImageSrc;
            lightbox.classList.remove("hidden");
        });
    });

    close.addEventListener("click", function() {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 함수를 실행합니다. 이 이벤트를 사용하면 모든 DOM 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **요소 선택:**
   - `const thumbnails = document.querySelectorAll(".thumbnail");`: 클래스 `thumbnail`을 가진 모든 이미지를 선택합니다.
   - `const lightbox = document.getElementById("lightbox");`: ID `lightbox`를 가진 요소를 선택합니다.
   - `const lightboxContent = document.getElementById("lightbox-content");`: ID `lightbox-content`를 가진 이미지를 선택합니다.
   - `const close = document.getElementById("close");`: ID `close`를 가진 닫기 버튼을 선택합니다.

3. **썸네일 클릭 이벤트 리스너 추가:**
   - `thumbnails.forEach(thumbnail => { ... });`: 모든 썸네일 이미지를 순회하며 클릭 이벤트 리스너를 추가합니다.
   - `thumbnail.addEventListener("click", function() { ... });`: 썸네일 이미지를 클릭하면 함수를 실행합니다.
     - `const fullImageSrc = thumbnail.getAttribute("data-full");`: 클릭된 썸네일의 `data-full` 속성에서 전체 이미지의 경로를 가져옵니다.
     - `lightboxContent.src = fullImageSrc;`: 라이트박스 콘텐츠의 `src` 속성을 전체 이미지 경로로 설정합니다.
     - `lightbox.classList.remove("hidden");`: 라이트박스에서 `hidden` 클래스를 제거하여 라이트박스를 표시합니다.

4. **닫기 버튼 클릭 이벤트 리스너 추가:**
   - `close.addEventListener("click", function() { ... });`: 닫기 버튼을 클릭하면 함수를 실행합니다.
     - `lightbox.classList.add("hidden");`: 라이트박스에 `hidden` 클래스를 추가하여 라이트박스를 숨깁니다.

5. **라이트박스 외부 클릭 이벤트 리스너 추가:**
   - `lightbox.addEventListener("click", function(event) { ... });`: 라이트박스를 클릭하면 함수를 실행합니다.
     - `if (event.target === lightbox) { ... }`: 클릭된 대상이 라이트박스 자체인 경우
       - `lightbox.classList.add("hidden");`: 라이트박스에 `hidden` 클래스를 추가하여 라이트박스를 숨깁니다.


### 수정된 동작 방식 설명

1. **HTML 부분:**
   - 각 썸네일 이미지에 `data-full` 속성을 추가하여 전체 이미지의 경로를 지정합니다.
   - 라이트박스를 닫기 위한 닫기 버튼을 추가합니다.

2. **CSS 부분:**
   - 썸네일 이미지를 스타일링하고, 라이트박스 및 닫기 버튼의 스타일을 설정합니다.

3. **JavaScript 부분:**
   - `DOMContentLoaded` 이벤트를 사용하여 DOM이 완전히 로드된 후 코드를 실행합니다.
   - 썸네일 이미지를 클릭하면 `data-full` 속성에서 전체 이미지 경로를 가져와 라이트박스에 표시하고, 라이트박스를 보이도록 설정합니다.
   - 닫기 버튼을 클릭하면 라이트박스를 숨깁니다.
   - 라이트박스 외부를 클릭하면 라이트박스를 숨깁니다.

**오류 점검:**

1. **이미지 경로 확인:**
   - 이미지 경로가 올바른지 확인합니다. `image1_thumbnail.jpg`와 `image1.jpg`가 실제 서버 또는 로컬 파일 시스템에 존재하는지 확인하세요.

2. **브라우저 콘솔 확인:**
   - 브라우저의 개발자 도구 콘솔을 열어 오류 메시지가 있는지 확인합니다.

3. **데모 이미지를 사용하여 테스트:**
   - 임시로 URL이 있는 이미지를 사용하여 경로 문제를 확인합니다.

```html
<img src="https://via.placeholder.com/150" alt="Image 1" class="thumbnail" data-full="https://via.placeholder.com/600">
```

## 수정된 코드 설명

### HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery-container">
        <h2>Image Gallery</h2>
        <div class="gallery">
            <img src="image1_thumbnail.jpg" alt="Image 1" class="thumbnail" data-full="image1.jpg">
            <img src="image2_thumbnail.jpg" alt="Image 2" class="thumbnail" data-full="image2.jpg">
            <img src="image3_thumbnail.jpg" alt="Image 3" class="thumbnail" data-full="image3.jpg">
            <img src="image4_thumbnail.jpg" alt="Image 4" class="thumbnail" data-full="image4.jpg">
        </div>
        <div class="lightbox hidden" id="lightbox">
            <span class="close" id="close">&times;</span>
            <img class="lightbox-content" id="lightbox-content">
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **갤러리 컨테이너:**
   - `<div class="gallery-container">`: 갤러리를 담을 컨테이너입니다.
   - `<h2>Image Gallery</h2>`: 갤러리 제목을 표시합니다.
   
2. **갤러리 및 썸네일 이미지:**
   - `<div class="gallery">`: 썸네일 이미지를 담을 갤러리 컨테이너입니다.
   - 각 썸네일 이미지에 `class="thumbnail"`을 추가하고, 전체 이미지 경로를 `data-full` 속성에 지정합니다. 예를 들어:
     - `<img src="image1_thumbnail.jpg" alt="Image 1" class="thumbnail" data-full="image1.jpg">`: `src` 속성은 썸네일 이미지 경로, `data-full` 속성은 전체 이미지 경로를 지정합니다.

3. **라이트박스 및 닫기 버튼:**
   - `<div class="lightbox hidden" id="lightbox">`: 클릭된 이미지를 큰 화면으로 표시할 라이트박스 컨테이너입니다.
   - `<span class="close" id="close">&times;</span>`: 라이트박스를 닫기 위한 닫기 버튼입니다. `&times;`는 닫기 아이콘(×)을 표시합니다.
   - `<img class="lightbox-content" id="lightbox-content">`: 클릭된 이미지를 표시할 이미지 요소입니다.

### CSS - 스타일링

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

.gallery-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    text-align: center;
}

h2 {
    text-align: center;
}

.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.thumbnail {
    width: 150px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.2s;
}

.thumbnail:hover {
    transform: scale(1.1);
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.hidden {
    display: none;
}

.lightbox-content {
    max-width: 90%;
    max-height: 80%;
}

.close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}
```

#### 상세 설명:

1. **body 스타일:**
   - 페이지의 기본 폰트를 설정하고, Flexbox를 사용하여 내용을 중앙에 배치합니다.

2. **갤러리 컨테이너:**
   - 흰색 배경, 패딩, 둥근 모서리, 그림자를 설정하여 갤러리 컨테이너의 스타일을 정의합니다.

3. **갤러리 및 썸네일 이미지:**
   - 갤러리는 Flexbox를 사용하여 썸네일 이미지를 정렬합니다.
   - 썸네일 이미지는 일정한 크기로 설정하고, 마우스를 올렸을 때 확대되도록 스타일을 설정합니다.

4. **라이트박스:**
   - 화면 전체를 덮는 반투명 배경을 설정하고, Flexbox를 사용하여 이미지를 중앙에 배치합니다.
   - `hidden` 클래스를 사용하여 라이트박스를 기본적으로 숨깁니다.
   - 라이트박스 콘텐츠는 최대 크기를 제한하여 화면에 맞게 조정됩니다.

5. **닫기 버튼:**
   - 라이트박스의 오른쪽 상단에 배치하고, 큰 흰색 아이콘으로 스타일을 설정합니다.

### JavaScript - 동작 구현

JavaScript는 웹 페이지의 동작을 정의합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const close = document.getElementById("close");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const fullImageSrc = thumbnail.getAttribute("data-full");
            lightboxContent.src = fullImageSrc;
            lightbox.classList.remove("hidden");
        });
    });

    close.addEventListener("click", function() {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **썸네일 이미지 클릭 이벤트 리스너 추가:**
   - `.thumbnail` 클래스를 가진 모든 이미지를 선택하고, 클릭 이벤트 리스너를 추가합니다.
   - 썸네일 이미지를 클릭하면 `data-full` 속성에서 전체 이미지의 경로를 가져와 라이트박스 콘텐츠의 `src` 속성에 설정하고, 라이트박스를 표시합니다.

3. **닫기 버튼 클릭 이벤트 리스너 추가:**
   - 닫기 버튼을 클릭하면 라이트박스를 숨깁니다.

4. **라이트박스 외부 클릭 이벤트 리스너 추가:**
   - 라이트박스를 클릭하면 이벤트 대상이 라이트박스 자체인지 확인합니다. 그렇다면 라이트박스를 숨깁니다. 이를 통해 라이트박스 외부를 클릭했을 때 라이트박스가 닫히도록 합니다.