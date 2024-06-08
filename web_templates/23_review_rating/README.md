# Review and Rating System
- 리뷰 및 평점 기능을 추가하여 사용자 피드백을 수집할 수 있는 기능 구현
- HTML, CSS, JavaScript, Node.js, 그리고 MongoDB를 사용하여 리뷰 및 평점 시스템을 구축

### 기본 구조
1. HTML - 리뷰 및 평점 입력 폼과 리뷰 리스트
2. CSS - 페이지 스타일링
3. JavaScript - 클라이언트 측 검증 및 서버와의 통신
4. Node.js - 서버 측 리뷰 및 평점 처리
5. MongoDB - 데이터베이스 저장

### 동작 방식 설명

1. **HTML 부분:**
   - **리뷰 및 평점 입력 폼**: 사용자가 리뷰와 평점을 남길 수 있는 폼을 정의합니다.
   - **리뷰 리스트**: 제출된 리뷰를 표시할 리스트를 정의합니다.

2. **CSS 부분:**
   - 기본적인 레이아웃과 스타일을 설정합니다. 입력 필드, 버튼, 리뷰 아이템 등에 스타일을 적용합니다.

3. **JavaScript 부분:**
   - **리뷰 폼 제출 처리**: 폼 제출 이벤트를 처리하고, 서버에 리뷰를 전송합니다.
   - **리뷰 목록 불러오기**: 서버에서 리뷰 목록을 가져와서 화면에 표시합니다.

4. **Node.js 서버 부분:**
   - **MongoDB 연결**: MongoDB 데이터베이스에 연결합니다.
   - **리뷰 스키마 및 모델 정의**: 리뷰 데이터를 저장할 스키마와 모델을 정의합니다.
   - **리뷰 조회 요청 처리**: 모든 리뷰를 조회하여 클라이언트에 반환합니다.
   - **리뷰 작성 요청 처리**: 새로운 리뷰를 데이터베이스에 저장합니다.


### 1. HTML - 리뷰 및 평점 입력 폼과 리뷰 리스트

HTML은 사용자 인터페이스를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review and Rating System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Product Reviews</h1>
        <div id="reviewFormContainer">
            <h2>Leave a Review</h2>
            <form id="reviewForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="rating">Rating</label>
                    <select id="rating" name="rating" required>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Terrible</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="review">Review</label>
                    <textarea id="review" name="review" rows="4" required></textarea>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
        <div id="reviewsContainer">
            <h2>Reviews</h2>
            <ul id="reviewsList"></ul>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **HTML 기본 구조:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>Review and Rating System</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **본문 콘텐츠:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<div class="container">`: 주요 컨테이너를 정의합니다.
     - `<h1>Product Reviews</h1>`: 페이지 제목을 표시합니다.
     - **리뷰 폼 컨테이너**:
       - `<div id="reviewFormContainer">`: 리뷰 폼을 담는 컨테이너입니다.
       - `<h2>Leave a Review</h2>`: 리뷰 섹션 제목을 표시합니다.
       - `<form id="reviewForm">`: 리뷰 폼을 정의합니다.
         - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
           - `<label for="name">Name</label>`: 이름 입력 필드의 레이블입니다.
           - `<input type="text" id="name" name="name" required>`: 이름 입력 필드입니다.
         - `<div class="form-group">`: 평점 입력 필드를 포함하는 컨테이너입니다.
           - `<label for="rating">Rating</label>`: 평점 입력 필드의 레이블입니다.
           - `<select id="rating" name="rating" required>`: 평점 선택 필드입니다.
             - `<option value="5">5 - Excellent</option>`: 평점 옵션입니다.
             - `<option value="4">4 - Good</option>`
             - `<option value="3">3 - Average</option>`
             - `<option value="2">2 - Poor</option>`
             - `<option value="1">1 - Terrible</option>`
         - `<div class="form-group">`: 리뷰 입력 필드를 포함하는 컨테이너입니다.
           - `<label for="review">Review</label>`: 리뷰 입력 필드의 레이블입니다.
           - `<textarea id="review" name="review" rows="4" required></textarea>`: 리뷰 입력 필드입니다.
         - `<button type="submit">Submit Review</button>`: 리뷰 제출 버튼입니다.
     - **리뷰 리스트 컨테이너**:
       - `<div id="reviewsContainer">`: 리뷰 리스트를 담는 컨테이너입니다.
       - `<h2>Reviews</h2>`: 리뷰 리스트 섹션 제목을 표시합니다.
       - `<ul id="reviewsList"></ul>`: 리뷰 리스트를 표시하는 비정렬 목록입니다.

3. **JavaScript 파일 포함:**
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 포함합니다.

### 2. CSS - 페이지 스타일링

CSS는 웹 페이지의 스타일을 정의합니다.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 600px;
}

h1, h2 {
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
select,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

#reviewsList {
    list-style-type: none;
    padding: 0;
}

.review-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.review-item:last-child {
    border-bottom: none;
}

.review-rating {
    font-weight: bold;
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `background-color: #f2f2f2;`: 페이지의 배경색을 연한 회색으로 설정합니다.
     - `margin: 0;`: 기본 여백을 제거합니다.
     - `padding: 20px;`: 기본 패딩을 설정합니다.
     - `display: flex;`: Flexbox를 사용하여 중앙에 배치합니다.
     - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
   
2. **컨테이너 스타일:**
   - `.container`: 주요 컨테이너의 스타일을 정의합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `padding: 20px;`: 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
     - `width: 600px;`: 컨테이너 너비를 600px로 설정합니다.
   
3. **제목 스타일:**
   - `h1, h2`: 제목 스타일을 정의합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
   
4. **폼 그룹 스타일:**
   - `.form-group`: 각 입력 필드를 포함하는 컨테이너의 스타일을 정의합니다.
     - `margin-bottom: 15px;`: 하단 여백을 설정합니다.
   
5. **레이블 스타일:**
   - `label`: 레이블 스타일을 정의합니다.
     - `display: block;`: 블록 레벨 요소로 설정하여 레이블이 전체 너비를 차지하도록 합니다.
     - `margin-bottom: 5px;`: 하단 여백을 설정합니다.
   
6. **입력 필드 스타일:**
   - `input[type="text"], select, textarea`: 텍스트 입력 필드, 선택 필드 및 텍스트 영역의 스타일을 정의합니다.
     - `width: 100%;`: 입력 필드가 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 8px;`: 내부 여백을 설정합니다.
     - `border: 1px solid #ccc;`: 테두리를 설정합니다.


     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
   
7. **버튼 스타일:**
   - `button`: 버튼 스타일을 정의합니다.
     - `width: 100%;`: 버튼이 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 10px;`: 내부 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
   
8. **버튼 호버 스타일:**
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae4c;`: 배경색을 더 어두운 녹색으로 설정합니다.
   
9. **리뷰 리스트 스타일:**
   - `#reviewsList`: 리뷰 리스트 스타일을 정의합니다.
     - `list-style-type: none;`: 리스트 스타일을 제거합니다.
     - `padding: 0;`: 리스트 패딩을 제거합니다.
   
10. **리뷰 아이템 스타일:**
    - `.review-item`: 각 리뷰 아이템의 스타일을 정의합니다.
      - `border-bottom: 1px solid #ccc;`: 하단에 테두리를 추가합니다.
      - `padding: 10px 0;`: 상하 여백을 설정합니다.
   
11. **리뷰 아이템 마지막 요소 스타일:**
    - `.review-item:last-child`: 마지막 리뷰 아이템의 스타일을 정의합니다.
      - `border-bottom: none;`: 하단 테두리를 제거합니다.
   
12. **리뷰 평점 스타일:**
    - `.review-rating`: 리뷰 평점 스타일을 정의합니다.
      - `font-weight: bold;`: 글자를 굵게 설정합니다.

### 3. JavaScript - 클라이언트 측 검증 및 서버와의 통신

JavaScript는 클라이언트 측에서 폼 제출을 처리하고 서버와 통신합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // 리뷰 목록 업데이트
    function loadReviews() {
        fetch('/reviews')
            .then(response => response.json())
            .then(reviews => {
                reviewsList.innerHTML = '';
                reviews.forEach(review => {
                    const li = document.createElement('li');
                    li.classList.add('review-item');
                    li.innerHTML = `
                        <p class="review-rating">Rating: ${review.rating}</p>
                        <p>${review.review}</p>
                        <p><strong>${review.name}</strong></p>
                    `;
                    reviewsList.appendChild(li);
                });
            });
    }

    // 페이지 로드 시 리뷰 목록 불러오기
    loadReviews();

    // 리뷰 폼 제출 처리
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, rating, review }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Review submitted successfully!');
                reviewForm.reset();
                loadReviews();
            } else {
                alert('Failed to submit review');
            }
        });
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **리뷰 폼 및 리뷰 리스트 요소 선택:**
   - `const reviewForm = document.getElementById('reviewForm');`: 리뷰 폼 요소를 선택합니다.
   - `const reviewsList = document.getElementById('reviewsList');`: 리뷰 리스트 요소를 선택합니다.

3. **리뷰 목록 업데이트 함수:**
   - `function loadReviews() { ... }`: 서버에서 리뷰 목록을 불러와서 화면에 표시하는 함수를 정의합니다.
     - `fetch('/reviews')`: 서버에서 `/reviews` 경로로 GET 요청을 보냅니다.
       - `then(response => response.json())`: 서버 응답을 JSON으로 변환합니다.
       - `then(reviews => { ... })`: 변환된 데이터를 처리합니다.
         - `reviewsList.innerHTML = '';`: 리뷰 리스트를 비웁니다.
         - `reviews.forEach(review => { ... })`: 각 리뷰를 반복하여 리스트에 추가합니다.
           - `const li = document.createElement('li');`: 리스트 아이템을 생성합니다.
           - `li.classList.add('review-item');`: 리스트 아이템에 클래스를 추가합니다.
           - `li.innerHTML = `...`;`: 리스트 아이템의 내용을 설정합니다.
           - `reviewsList.appendChild(li);`: 리스트 아이템을 리스트에 추가합니다.

4. **페이지 로드 시 리뷰 목록 불러오기:**
   - `loadReviews();`: 페이지 로드 시 리뷰 목록을 불러옵니다.

5. **리뷰 폼 제출 처리:**
   - `reviewForm.addEventListener('submit', function(e) { ... });`: 리뷰 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `const name = document.getElementById('name').value;`: 이름 입력 필드의 값을 가져옵니다.
     - `const rating = document.getElementById('rating').value;`: 평점 입력 필드의 값을 가져옵니다.
     - `const review = document.getElementById('review').value;`: 리뷰 입력 필드의 값을 가져옵니다.
     - `fetch('/reviews', { ... })`: 서버에 리뷰를 전송합니다.
       - `method: 'POST'`: POST 요청을 보냅니다.
       - `headers: { 'Content-Type': 'application/json' }`: 요청 헤더를 설정합니다.
       - `body: JSON.stringify({ name, rating, review })`: 요청 본문에 JSON 형태로 이름, 평점 및 리뷰를 포함합니다.
       - `then(response => response.json())`: 서버 응답을 JSON으로 변환합니다.
       - `then(data => { ... })`: 변환된 데이터를 처리합니다.
         - `if (data.success) { ... }`: 리뷰 제출 성공 시 메시지를 표시합니다.
           - `alert('Review submitted successfully!');`: 성공 메시지를 표시합니다.
           - `reviewForm.reset();`: 폼을 초기화합니다.
           - `loadReviews();`: 리뷰 목록을 업데이트합니다.
         - `else { ... }`: 리뷰 제출 실패 시 메시지를 표시합니다.
           - `alert('Failed to submit review');`: 실패 메시지를 표시합니다.

### 4. Node.js - 서버 측 리뷰 및 평점 처리

Node.js와 MongoDB를 사용하여 서버 측에서 리뷰 및 평점을 처리합니다.

#### 서버 설정 및 MongoDB 연결

```javascript
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 리뷰 스키마 및 모델 정의
const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Review = mongoose.model('Review', reviewSchema);

// 리뷰 조회 요청 처리
app.get('/reviews', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(reviews);
        }
    });
});

// 리뷰 작성 요청 처리
app.post('/reviews', (req, res) => {
    const { name, rating, review } = req.body;
    const newReview = new Review({ name, rating, review });
    newReview.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

#### 상세 설명:

1. **모듈 및 서버 설정:**
   - `const express = require('express');`: Express 모듈을 가져옵니다.
   - `const bodyParser = require('body-parser');`: body-parser 모듈을 가져옵니다.
   - `const mongoose = require('mongoose');`: mongoose 모듈을 가져옵니다.
   - `const app = express();`: Express 애플리케이션을 생성합니다.
   - `const

 port = 3000;`: 서버 포트를 설정합니다.
   - `app.use(bodyParser.json());`: JSON 요청 본문을 파싱합니다.
   - `app.use(express.static('public'));`: 정적 파일을 제공할 디렉토리를 설정합니다.

2. **MongoDB 연결 설정:**
   - `mongoose.connect('mongodb://localhost/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true });`: MongoDB 데이터베이스에 연결합니다.

3. **리뷰 스키마 및 모델 정의:**
   - `const reviewSchema = new mongoose.Schema({ ... });`: 리뷰 데이터를 저장할 스키마를 정의합니다.
     - `name: String`: 리뷰 작성자의 이름을 문자열로 저장합니다.
     - `rating: Number`: 리뷰 평점을 숫자로 저장합니다.
     - `review: String`: 리뷰 내용을 문자열로 저장합니다.
   - `const Review = mongoose.model('Review', reviewSchema);`: 리뷰 모델을 생성합니다.

4. **리뷰 조회 요청 처리:**
   - `app.get('/reviews', (req, res) => { ... });`: GET 요청을 처리하는 라우트를 설정합니다.
     - `Review.find({}, (err, reviews) => { ... });`: 모든 리뷰를 조회합니다.
       - `if (err) { ... }`: 에러가 발생한 경우
         - `res.status(500).send(err);`: 500 상태 코드와 함께 에러를 반환합니다.
       - `else { ... }`: 에러가 발생하지 않은 경우
         - `res.json(reviews);`: 조회된 리뷰를 JSON으로 반환합니다.

5. **리뷰 작성 요청 처리:**
   - `app.post('/reviews', (req, res) => { ... });`: POST 요청을 처리하는 라우트를 설정합니다.
     - `const { name, rating, review } = req.body;`: 요청 본문에서 이름, 평점 및 리뷰를 추출합니다.
     - `const newReview = new Review({ name, rating, review });`: 새로운 리뷰 객체를 생성합니다.
     - `newReview.save((err) => { ... });`: 리뷰를 데이터베이스에 저장합니다.
       - `if (err) { ... }`: 에러가 발생한 경우
         - `res.status(500).send(err);`: 500 상태 코드와 함께 에러를 반환합니다.
       - `else { ... }`: 에러가 발생하지 않은 경우
         - `res.json({ success: true });`: 성공 응답을 반환합니다.

6. **서버 시작:**
   - `app.listen(port, () => { ... });`: 서버를 시작합니다.
     - `console.log(`Server running at http://localhost:${port}`);`: 서버가 실행 중임을 콘솔에 출력합니다.
