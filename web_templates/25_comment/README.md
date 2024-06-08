물론입니다! 댓글 기능을 추가하여 사용자들이 콘텐츠에 대해 의견을 남길 수 있도록 해보겠습니다. 이 예제에서는 HTML, CSS, JavaScript, Node.js, 그리고 MongoDB를 사용하여 댓글 시스템을 구축합니다.

### 기본 구조
1. HTML - 댓글 입력 폼과 댓글 리스트
2. CSS - 페이지 스타일링
3. JavaScript - 클라이언트 측 검증 및 서버와의 통신
4. Node.js - 서버 측 댓글 처리
5. MongoDB - 데이터베이스 저장


### 동작 방식 설명

1. **HTML 부분:**
   - **댓글 입력 폼**: 사용자가 댓글을 남길 수 있는 폼을 정의합니다.
   - **댓글 리스트**: 제출된 댓글을 표시할 리스트를 정의합니다.

2. **CSS 부분:**
   - 기본적인 레이아웃과 스타일을 설정합니다. 입력 필드, 버튼, 댓글 아이템 등에 스타일을 적용합니다.

3. **JavaScript 부분:**
   - **댓글 폼 제출 처리**: 폼 제출 이벤트를 처리하고, 서버에 댓글을 전송합니다.
   - **댓글 목록 불러오기**: 서버에서 댓글 목록을 가져와서 화면에 표시합니다.

4. **Node.js 서버 부분:**
   - **MongoDB 연결**: MongoDB 데이터베이스에 연결합니다.
   - **댓글 스키마 및 모델 정의**: 댓글 데이터를 저장할 스키마와 모델을 정의합니다.
   - **댓글 조회 요청 처리**: 모든 댓글을 조회하여 클라이언트에 반환합니다.
   - **댓글 작성 요청 처리**: 새로운 댓글을 데이터베이스에 저장합니다.



### 1. HTML - 댓글 입력 폼과 댓글 리스트

HTML은 사용자 인터페이스를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comment Section</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Comments</h1>
        <div id="commentFormContainer">
            <h2>Leave a Comment</h2>
            <form id="commentForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <textarea id="comment" name="comment" rows="4" required></textarea>
                </div>
                <button type="submit">Submit Comment</button>
            </form>
        </div>
        <div id="commentsContainer">
            <h2>All Comments</h2>
            <ul id="commentsList"></ul>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

#### 상세 설명:

1. **DOCTYPE 및 HTML 구조:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>Comment Section</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.
   - `<body>`: 문서의 본문을 정의합니다.
     - `<div class="container">`: 주요 컨테이너를 정의합니다.
       - `<h1>Comments</h1>`: 페이지 제목을 표시합니다.
       - **댓글 폼 컨테이너**:
         - `<div id="commentFormContainer">`: 댓글 폼을 담는 컨테이너입니다.
         - `<h2>Leave a Comment</h2>`: 댓글 섹션 제목을 표시합니다.
         - `<form id="commentForm">`: 댓글 폼을 정의합니다.
           - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="name">Name</label>`: 이름 입력 필드의 레이블입니다.
             - `<input type="text" id="name" name="name" required>`: 이름 입력 필드입니다.
           - `<div class="form-group">`: 댓글 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="comment">Comment</label>`: 댓글 입력 필드의 레이블입니다.
             - `<textarea id="comment" name="comment" rows="4" required></textarea>`: 댓글 입력 필드입니다.
           - `<button type="submit">Submit Comment</button>`: 댓글 제출 버튼입니다.
       - **댓글 리스트 컨테이너**:
         - `<div id="commentsContainer">`: 댓글 리스트를 담는 컨테이너입니다.
         - `<h2>All Comments</h2>`: 댓글 리스트 섹션 제목을 표시합니다.
         - `<ul id="commentsList"></ul>`: 댓글 리스트를 표시하는 비정렬 목록입니다.

2. **JavaScript 파일 포함:**
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
    align-items: center;
    height: 100vh;
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

#commentsList {
    list-style-type: none;
    padding: 0;
}

.comment-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.comment-item:last-child {
    border-bottom: none;
}

.comment-content {
    margin: 10px 0;
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
     - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
     - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.

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
   - `input[type="text"], textarea`: 텍스트 입력 필드 및 텍스트 영역의 스타일을 정의합니다.
     - `width: 100%;`: 입력 필드가 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 8px;`: 내부 여백을 설정합니다.
     - `border: 1px solid #ccc;`: 테두리를 설정합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.

7. **버튼 스타일:**
   - `button`: 버튼 스타일을 정의합니다.
     - `width: 100%;`: 버튼이 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 10px;`: 버튼 내부의 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.

8. **버튼 호버 스타일:**
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae

4c;`: 배경색을 더 어두운 녹색으로 설정합니다.

9. **댓글 리스트 스타일:**
   - `#commentsList`: 댓글 리스트 스타일을 정의합니다.
     - `list-style-type: none;`: 리스트 스타일을 제거합니다.
     - `padding: 0;`: 리스트 패딩을 제거합니다.

10. **댓글 아이템 스타일:**
    - `.comment-item`: 각 댓글 아이템의 스타일을 정의합니다.
      - `border-bottom: 1px solid #ccc;`: 하단에 테두리를 추가합니다.
      - `padding: 10px 0;`: 상하 여백을 설정합니다.

11. **댓글 아이템 마지막 요소 스타일:**
    - `.comment-item:last-child`: 마지막 댓글 아이템의 스타일을 정의합니다.
      - `border-bottom: none;`: 하단 테두리를 제거합니다.

12. **댓글 내용 스타일:**
    - `.comment-content`: 댓글 내용 스타일을 정의합니다.
      - `margin: 10px 0;`: 상하 여백을 설정합니다.

### 3. JavaScript - 클라이언트 측 검증 및 서버와의 통신

JavaScript는 클라이언트 측에서 폼 제출을 처리하고 서버와 통신합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    // 댓글 목록 업데이트
    function loadComments() {
        fetch('/comments')
            .then(response => response.json())
            .then(comments => {
                commentsList.innerHTML = '';
                comments.forEach(comment => {
                    const li = document.createElement('li');
                    li.classList.add('comment-item');
                    li.innerHTML = `
                        <p class="comment-content">${comment.comment}</p>
                        <p><strong>${comment.name}</strong></p>
                    `;
                    commentsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error loading comments:', error));
    }

    // 페이지 로드 시 댓글 목록 불러오기
    loadComments();

    // 댓글 폼 제출 처리
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, comment }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Comment submitted successfully!');
                commentForm.reset();
                loadComments();
            } else {
                alert('Failed to submit comment');
            }
        })
        .catch(error => console.error('Error submitting comment:', error));
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **댓글 폼 및 댓글 리스트 요소 선택:**
   - `const commentForm = document.getElementById('commentForm');`: 댓글 폼 요소를 선택합니다.
   - `const commentsList = document.getElementById('commentsList');`: 댓글 리스트 요소를 선택합니다.

3. **댓글 목록 업데이트 함수:**
   - `function loadComments() { ... }`: 서버에서 댓글 목록을 불러와서 화면에 표시하는 함수를 정의합니다.
     - `fetch('/comments')`: 서버에서 `/comments` 경로로 GET 요청을 보냅니다.
       - `then(response => response.json())`: 서버 응답을 JSON으로 변환합니다.
       - `then(comments => { ... })`: 변환된 데이터를 처리합니다.
         - `commentsList.innerHTML = '';`: 댓글 리스트를 비웁니다.
         - `comments.forEach(comment => { ... })`: 각 댓글을 반복하여 리스트에 추가합니다.
           - `const li = document.createElement('li');`: 리스트 아이템을 생성합니다.
           - `li.classList.add('comment-item');`: 리스트 아이템에 클래스를 추가합니다.
           - `li.innerHTML = `...`;`: 리스트 아이템의 내용을 설정합니다.
           - `commentsList.appendChild(li);`: 리스트 아이템을 리스트에 추가합니다.

4. **페이지 로드 시 댓글 목록 불러오기:**
   - `loadComments();`: 페이지 로드 시 댓글 목록을 불러옵니다.

5. **댓글 폼 제출 처리:**
   - `commentForm.addEventListener('submit', function(e) { ... });`: 댓글 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `const name = document.getElementById('name').value;`: 이름 입력 필드의 값을 가져옵니다.
     - `const comment = document.getElementById('comment').value;`: 댓글 입력 필드의 값을 가져옵니다.
     - `fetch('/comments', { ... })`: 서버에 댓글을 전송합니다.
       - `method: 'POST'`: POST 요청을 보냅니다.
       - `headers: { 'Content-Type': 'application/json' }`: 요청 헤더를 설정합니다.
       - `body: JSON.stringify({ name, comment })`: 요청 본문에 JSON 형태로 이름과 댓글을 포함합니다.
       - `then(response => response.json())`: 서버 응답을 JSON으로 변환합니다.
       - `then(data => { ... })`: 변환된 데이터를 처리합니다.
         - `if (data.success) { ... }`: 댓글 제출 성공 시 메시지를 표시합니다.
           - `alert('Comment submitted successfully!');`: 성공 메시지를 표시합니다.
           - `commentForm.reset();`: 폼을 초기화합니다.
           - `loadComments();`: 댓글 목록을 업데이트합니다.
         - `else { ... }`: 댓글 제출 실패 시 메시지를 표시합니다.
           - `alert('Failed to submit comment');`: 실패 메시지를 표시합니다.
       - `catch(error => console.error('Error submitting comment:', error));`: 에러가 발생하면 콘솔에 에러를 출력합니다.

### 4. Node.js - 서버 측 댓글 처리

Node.js와 MongoDB를 사용하여 서버 측에서 댓글을 처리합니다.

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
mongoose.connect('mongodb://localhost/commentDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 댓글 스키마 및 모델 정의
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

const Comment = mongoose.model('Comment', commentSchema);

// 댓글 조회 요청 처리
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(comments);
        }
    });
});

// 댓글 작성 요청 처리
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const newComment = new Comment({ name, comment });
    newComment.save((err) => {
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
   - `const port = 3000;`: 서버 포트를 설정합니다.
   - `app.use(bodyParser.json());`: JSON 요청 본문을 파싱합니다.
   - `app.use(express.static('public'));`: 정적 파일을 제공할 디렉토리를 설정합니다.

2. **MongoDB 연결 설정:**
   - `mongoose.connect('mongodb://localhost/commentDB', { useNewUrlParser: true, useUnifiedTopology: true });`: MongoDB 데이터베이스에 연결합니다.

3. **댓글 스키마 및 모델 정의:**
   - `const commentSchema = new mongoose.Schema({ ... });`: 댓글 데이터를 저장할 스키마를 정의합니다.
     - `name: String`: 댓글 작성자의 이름을 문자열로 저장합니다.
     - `comment: String`: 댓글 내용을 문자열로 저장합니다.
   - `const Comment = mongoose.model('Comment', commentSchema);`: 댓글 모델을 생성합니다.

4. **댓글 조회 요청 처리:**
   - `app.get('/comments', (req, res) => { ... });`: GET 요청을 처리하는 라우트를 설정합니다.
     - `Comment.find({}, (err, comments) => { ... });`: 모든 댓글을 조회합니다.
       - `

if (err) { ... }`: 에러가 발생한 경우
         - `res.status(500).send(err);`: 500 상태 코드와 함께 에러를 반환합니다.
       - `else { ... }`: 에러가 발생하지 않은 경우
         - `res.json(comments);`: 조회된 댓글을 JSON으로 반환합니다.

5. **댓글 작성 요청 처리:**
   - `app.post('/comments', (req, res) => { ... });`: POST 요청을 처리하는 라우트를 설정합니다.
     - `const { name, comment } = req.body;`: 요청 본문에서 이름과 댓글을 추출합니다.
     - `const newComment = new Comment({ name, comment });`: 새로운 댓글 객체를 생성합니다.
     - `newComment.save((err) => { ... });`: 댓글을 데이터베이스에 저장합니다.
       - `if (err) { ... }`: 에러가 발생한 경우
         - `res.status(500).send(err);`: 500 상태 코드와 함께 에러를 반환합니다.
       - `else { ... }`: 에러가 발생하지 않은 경우
         - `res.json({ success: true });`: 성공 응답을 반환합니다.

6. **서버 시작:**
   - `app.listen(port, () => { ... });`: 서버를 시작합니다.
     - `console.log(`Server running at http://localhost:${port}`);`: 서버가 실행 중임을 콘솔에 출력합니다.
