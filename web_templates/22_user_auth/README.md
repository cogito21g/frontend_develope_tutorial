# User Authentication
- 사용자 인증 기능을 구현하기 위해서는 로그인, 회원가입, 비밀번호 복구 기능을 포함
- 보안을 위해 비밀번호는 해시 알고리즘을 사용하여 저장
- 기본적인 HTML, CSS, JavaScript와 Node.js를 사용하여 서버 측 인증을 처리

### 기본 구조
1. HTML - 로그인, 회원가입, 비밀번호 복구 페이지
2. CSS - 페이지 스타일링
3. JavaScript - 클라이언트 측 검증
4. Node.js - 서버 측 인증 처리


### 동작 방식 설명

1. **HTML 부분:**
   - 로그인, 회원가입, 비밀번호 복구를 위한

 폼을 각각 정의합니다.
   - 각 섹션은 기본적으로 하나만 보이고 나머지는 숨겨지도록 `hidden` 클래스를 사용합니다.
   - 링크를 클릭하면 JavaScript를 통해 섹션을 전환합니다.

2. **CSS 부분:**
   - 폼 스타일을 설정하고, 기본적인 레이아웃과 스타일을 정의합니다.
   - `hidden` 클래스는 요소를 숨기기 위해 사용됩니다.

3. **JavaScript 부분:**
   - 각 폼에 대해 제출 이벤트 리스너를 설정하여 서버에 요청을 보냅니다.
   - 섹션 전환을 위한 `showSection` 함수를 정의합니다.
   - `fetch` API를 사용하여 서버에 로그인, 회원가입, 비밀번호 재설정 요청을 보냅니다.

4. **Node.js 서버 부분:**
   - Express를 사용하여 서버를 설정합니다.
   - `bcrypt`를 사용하여 비밀번호를 해시하고 비교합니다.
   - 사용자 데이터를 임시로 메모리에 저장합니다.
   - 로그인, 회원가입, 비밀번호 재설정 요청을 처리하는 라우트를 정의합니다.



### 1. HTML - 로그인, 회원가입, 비밀번호 복구 페이지

HTML은 사용자 인터페이스를 정의합니다. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Authentication</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Login Form -->
        <div id="login">
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="loginEmail">Email</label>
                    <input type="email" id="loginEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" id="loginPassword" name="password" required>
                </div>
                <button type="submit">Login</button>
                <p><a href="#" onclick="showSection('signup')">Sign Up</a> | <a href="#" onclick="showSection('forgotPassword')">Forgot Password?</a></p>
            </form>
        </div>

        <!-- Sign Up Form -->
        <div id="signup" class="hidden">
            <h2>Sign Up</h2>
            <form id="signupForm">
                <div class="form-group">
                    <label for="signupEmail">Email</label>
                    <input type="email" id="signupEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="signupPassword">Password</label>
                    <input type="password" id="signupPassword" name="password" required>
                </div>
                <button type="submit">Sign Up</button>
                <p><a href="#" onclick="showSection('login')">Login</a></p>
            </form>
        </div>

        <!-- Forgot Password Form -->
        <div id="forgotPassword" class="hidden">
            <h2>Forgot Password</h2>
            <form id="forgotPasswordForm">
                <div class="form-group">
                    <label for="forgotEmail">Email</label>
                    <input type="email" id="forgotEmail" name="email" required>
                </div>
                <button type="submit">Reset Password</button>
                <p><a href="#" onclick="showSection('login')">Login</a></p>
            </form>
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
     - `<title>User Authentication</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.
   - `<body>`: 문서의 본문을 정의합니다.
     - `<div class="container">`: 페이지의 주요 컨테이너입니다.
       - **로그인 폼**: 사용자가 로그인할 수 있는 폼입니다.
         - `<div id="login">`: 로그인 섹션을 정의합니다.
         - `<form id="loginForm">`: 로그인 폼을 정의합니다.
           - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="loginEmail">Email</label>`: 이메일 입력 필드의 레이블입니다.
             - `<input type="email" id="loginEmail" name="email" required>`: 이메일 입력 필드입니다.
           - `<div class="form-group">`: 비밀번호 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="loginPassword">Password</label>`: 비밀번호 입력 필드의 레이블입니다.
             - `<input type="password" id="loginPassword" name="password" required>`: 비밀번호 입력 필드입니다.
           - `<button type="submit">Login</button>`: 로그인 버튼입니다.
           - `<p><a href="#" onclick="showSection('signup')">Sign Up</a> | <a href="#" onclick="showSection('forgotPassword')">Forgot Password?</a></p>`: 회원가입 및 비밀번호 복구 링크입니다.
       - **회원가입 폼**: 사용자가 회원가입할 수 있는 폼입니다.
         - `<div id="signup" class="hidden">`: 회원가입 섹션을 정의합니다. 기본적으로 숨겨져 있습니다.
         - `<form id="signupForm">`: 회원가입 폼을 정의합니다.
           - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="signupEmail">Email</label>`: 이메일 입력 필드의 레이블입니다.
             - `<input type="email" id="signupEmail" name="email" required>`: 이메일 입력 필드입니다.
           - `<div class="form-group">`: 비밀번호 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="signupPassword">Password</label>`: 비밀번호 입력 필드의 레이블입니다.
             - `<input type="password" id="signupPassword" name="password" required>`: 비밀번호 입력 필드입니다.
           - `<button type="submit">Sign Up</button>`: 회원가입 버튼입니다.
           - `<p><a href="#" onclick="showSection('login')">Login</a></p>`: 로그인 링크입니다.
       - **비밀번호 복구 폼**: 사용자가 비밀번호를 복구할 수 있는 폼입니다.
         - `<div id="forgotPassword" class="hidden">`: 비밀번호 복구 섹션을 정의합니다. 기본적으로 숨겨져 있습니다.
         - `<form id="forgotPasswordForm">`: 비밀번호 복구 폼을 정의합니다.
           - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
             - `<label for="forgotEmail">Email</label>`: 이메일 입력 필드의 레이블입니다.
             - `<input type="email" id="forgotEmail" name="email" required>`: 이메일 입력 필드입니다.
           - `<button type="submit">Reset Password</button>`: 비밀번호 재설정 버튼입니다.
           - `<p><a href="#" onclick="showSection('login')">Login</a></p>`: 로그인 링크입니다.

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
    width: 300px;
}

h2 {
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
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

.hidden {
    display: none;
}

p {
    text-align: center;
}

a {
    color: #5cb85c;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `background-color: #f2f2f2;`: 페이지의 배경색을 연한 회색으로 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
     - `padding: 20px;`: 페이지의 기본 패딩을 설정합니다.
     - `display: flex;`: Flexbox를 사용하여 중앙에 배치합니다.
     - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
     - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
     - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.
   -

 `.container`: 페이지 주요 컨테이너의 스타일을 정의합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `padding: 20px;`: 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
     - `width: 300px;`: 컨테이너 너비를 300px로 설정합니다.
   - `h2`: 제목 스타일을 정의합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
   - `.form-group`: 각 입력 필드를 포함하는 컨테이너의 스타일을 정의합니다.
     - `margin-bottom: 15px;`: 하단 여백을 설정합니다.
   - `label`: 레이블 스타일을 정의합니다.
     - `display: block;`: 블록 레벨 요소로 설정하여 레이블이 전체 너비를 차지하도록 합니다.
     - `margin-bottom: 5px;`: 하단 여백을 설정합니다.
   - `input[type="email"], input[type="password"]`: 이메일 및 비밀번호 입력 필드의 스타일을 정의합니다.
     - `width: 100%;`: 입력 필드가 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 8px;`: 입력 필드 내부의 여백을 설정합니다.
     - `border: 1px solid #ccc;`: 테두리를 설정합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
   - `button`: 버튼 스타일을 정의합니다.
     - `width: 100%;`: 버튼이 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 10px;`: 버튼 내부의 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae4c;`: 배경색을 더 어두운 녹색으로 설정합니다.
   - `.hidden`: 숨겨진 요소의 스타일을 정의합니다.
     - `display: none;`: 요소를 숨깁니다.
   - `p`: 단락 스타일을 정의합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
   - `a`: 링크 스타일을 정의합니다.
     - `color: #5cb85c;`: 링크 색상을 녹색으로 설정합니다.
     - `text-decoration: none;`: 링크의 밑줄을 제거합니다.
   - `a:hover`: 링크에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `text-decoration: underline;`: 링크에 밑줄을 추가합니다.

### 3. JavaScript - 클라이언트 측 검증 및 섹션 전환

JavaScript는 클라이언트 측에서 폼 제출을 처리하고 섹션을 전환합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // 서버에 로그인 요청을 보냅니다.
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
            } else {
                alert('Login failed: ' + data.message);
            }
        });
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        // 서버에 회원가입 요청을 보냅니다.
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Signup successful!');
            } else {
                alert('Signup failed: ' + data.message);
            }
        });
    });

    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;
        // 서버에 비밀번호 재설정 요청을 보냅니다.
        fetch('/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Password reset email sent!');
            } else {
                alert('Password reset failed: ' + data.message);
            }
        });
    });
});

function showSection(sectionId) {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('forgotPassword').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **로그인 폼 처리:**
   - `const loginForm = document.getElementById('loginForm');`: 로그인 폼 요소를 선택합니다.
   - `loginForm.addEventListener('submit', function(e) { ... });`: 로그인 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `const email = document.getElementById('loginEmail').value;`: 이메일 입력 필드의 값을 가져옵니다.
     - `const password = document.getElementById('loginPassword').value;`: 비밀번호 입력 필드의 값을 가져옵니다.
     - `fetch('/login', { ... })`: 서버에 로그인 요청을 보냅니다.
       - `method: 'POST'`: POST 요청을 보냅니다.
       - `headers: { 'Content-Type': 'application/json' }`: 요청 헤더를 설정합니다.
       - `body: JSON.stringify({ email, password })`: 요청 본문에 JSON 형태로 이메일과 비밀번호를 포함합니다.
       - `response => response.json()`: 서버 응답을 JSON으로 변환합니다.
       - `data => { ... }`: 변환된 데이터를 처리합니다.
         - `if (data.success) { ... }`: 로그인 성공 시 메시지를 표시합니다.
         - `else { ... }`: 로그인 실패 시 메시지를 표시합니다.

3. **회원가입 폼 처리:**
   - `const signupForm = document.getElementById('signupForm');`: 회원가입 폼 요소를 선택합니다.
   - `signupForm.addEventListener('submit', function(e) { ... });`: 회원가입 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `const email = document.getElementById('signupEmail').value;`: 이메일 입력 필드의 값을 가져옵니다.
     - `const password = document.getElementById('signupPassword').value;`: 비밀번호 입력 필드의 값을 가져옵니다.
     - `fetch('/signup', { ... })`: 서버에 회원가입 요청을 보냅니다.
       - `method: 'POST'`: POST 요청을 보냅니다.
       - `headers: { 'Content-Type': 'application/json' }`: 요청 헤더를 설정합니다.
       - `body: JSON.stringify({ email, password })`: 요청 본문에 JSON 형태로 이메일과 비밀번호를 포함합니다.
       - `response => response.json()`: 서버 응답을 JSON으로 변환합니다.
       - `data => { ... }`: 변환된 데이터를 처리합니다.
         - `if (data.success) { ... }`: 회원가입 성공 시 메시지를 표시합니다.
         - `else { ... }`: 회원가입 실패 시 메시지를 표시합니다.

4. **비밀번호 재설정 폼 처리:**
   - `const

 forgotPasswordForm = document.getElementById('forgotPasswordForm');`: 비밀번호 재설정 폼 요소를 선택합니다.
   - `forgotPasswordForm.addEventListener('submit', function(e) { ... });`: 비밀번호 재설정 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `const email = document.getElementById('forgotEmail').value;`: 이메일 입력 필드의 값을 가져옵니다.
     - `fetch('/forgot-password', { ... })`: 서버에 비밀번호 재설정 요청을 보냅니다.
       - `method: 'POST'`: POST 요청을 보냅니다.
       - `headers: { 'Content-Type': 'application/json' }`: 요청 헤더를 설정합니다.
       - `body: JSON.stringify({ email })`: 요청 본문에 JSON 형태로 이메일을 포함합니다.
       - `response => response.json()`: 서버 응답을 JSON으로 변환합니다.
       - `data => { ... }`: 변환된 데이터를 처리합니다.
         - `if (data.success) { ... }`: 비밀번호 재설정 이메일 전송 성공 시 메시지를 표시합니다.
         - `else { ... }`: 비밀번호 재설정 실패 시 메시지를 표시합니다.

5. **섹션 전환 함수:**
   - `function showSection(sectionId) { ... }`: 섹션을 전환하는 함수를 정의합니다.
     - `document.getElementById('login').classList.add('hidden');`: 로그인 섹션을 숨깁니다.
     - `document.getElementById('signup').classList.add('hidden');`: 회원가입 섹션을 숨깁니다.
     - `document.getElementById('forgotPassword').classList.add('hidden');`: 비밀번호 복구 섹션을 숨깁니다.
     - `document.getElementById(sectionId).classList.remove('hidden');`: 지정된 섹션을 표시합니다.

### 4. Node.js - 서버 측 인증 처리

Node.js와 Express를 사용하여 서버 측에서 인증을 처리합니다.

#### 서버 설정 및 사용자 데이터베이스 시뮬레이션

```javascript
// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// 사용자 데이터를 저장하기 위한 임시 메모리 데이터베이스
const users = {};

// 로그인 요청 처리
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid password' });
            }
        });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

// 회원가입 요청 처리
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (users[email]) {
        res.json({ success: false, message: 'User already exists' });
    } else {
        bcrypt.hash(password, 10, (err, hash) => {
            users[email] = { email, password: hash };
            res.json({ success: true });
        });
    }
});

// 비밀번호 재설정 요청 처리
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    if (users[email]) {
        // 실제로는 이메일을 보내는 로직이 있어야 합니다.
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

#### 상세 설명:

1. **모듈 및 서버 설정:**
   - `const express = require('express');`: Express 모듈을 가져옵니다.
   - `const bcrypt = require('bcrypt');`: bcrypt 모듈을 가져옵니다.
   - `const bodyParser = require('body-parser');`: body-parser 모듈을 가져옵니다.
   - `const app = express();`: Express 애플리케이션을 생성합니다.
   - `const port = 3000;`: 서버 포트를 설정합니다.
   - `app.use(bodyParser.json());`: JSON 요청 본문을 파싱합니다.
   - `app.use(express.static('public'));`: 정적 파일을 제공할 디렉토리를 설정합니다.

2. **임시 메모리 데이터베이스:**
   - `const users = {};`: 사용자 데이터를 저장할 객체를 생성합니다.

3. **로그인 요청 처리:**
   - `app.post('/login', (req, res) => { ... });`: POST 요청을 처리하는 라우트를 설정합니다.
     - `const { email, password } = req.body;`: 요청 본문에서 이메일과 비밀번호를 추출합니다.
     - `const user = users[email];`: 사용자 데이터를 가져옵니다.
     - `if (user) { ... }`: 사용자가 존재하는 경우
       - `bcrypt.compare(password, user.password, (err, result) => { ... });`: 입력된 비밀번호와 저장된 해시된 비밀번호를 비교합니다.
         - `if (result) { ... }`: 비밀번호가 일치하는 경우
           - `res.json({ success: true });`: 성공 응답을 반환합니다.
         - `else { ... }`: 비밀번호가 일치하지 않는 경우
           - `res.json({ success: false, message: 'Invalid password' });`: 실패 응답을 반환합니다.
     - `else { ... }`: 사용자가 존재하지 않는 경우
       - `res.json({ success: false, message: 'User not found' });`: 실패 응답을 반환합니다.

4. **회원가입 요청 처리:**
   - `app.post('/signup', (req, res) => { ... });`: POST 요청을 처리하는 라우트를 설정합니다.
     - `const { email, password } = req.body;`: 요청 본문에서 이메일과 비밀번호를 추출합니다.
     - `if (users[email]) { ... }`: 사용자가 이미 존재하는 경우
       - `res.json({ success: false, message: 'User already exists' });`: 실패 응답을 반환합니다.
     - `else { ... }`: 사용자가 존재하지 않는 경우
       - `bcrypt.hash(password, 10, (err, hash) => { ... });`: 비밀번호를 해시합니다.
         - `users[email] = { email, password: hash };`: 해시된 비밀번호를 저장합니다.
         - `res.json({ success: true });`: 성공 응답을 반환합니다.

5. **비밀번호 재설정 요청 처리:**
   - `app.post('/forgot-password', (req, res) => { ... });`: POST 요청을 처리하는 라우트를 설정합니다.
     - `const { email } = req.body;`: 요청 본문에서 이메일을 추출합니다.
     - `if (users[email]) { ... }`: 사용자가 존재하는 경우
       - `res.json({ success: true });`: 성공 응답을 반환합니다.
       - **실제로는 이메일을 보내는 로직이 있어야 합니다.**
     - `else { ... }`: 사용자가 존재하지 않는 경우
       - `res.json({ success: false, message: 'User not found' });`: 실패 응답을 반환합니다.

6. **서버 시작:**
   - `app.listen(port, () => { ... });`: 서버를 시작합니다.
     - `console.log(`Server running at http://localhost:${port}`);`: 서버가 실행 중임을 콘솔에 출력합니다.
