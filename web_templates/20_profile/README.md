# Profile
- 프로필 페이지(Profile Page)
- 사용자가 자신의 프로필을 관리할 수 있는 기능을 추가
- 개인 정보 수정, 프로필 사진 변경, 계정 설정 등을 포함

물론입니다! 사용자 프로필 페이지를 구현하는 방법을 안내하겠습니다. 이 예제에서는 HTML, CSS, JavaScript를 사용하여 프로필 사진 변경, 개인 정보 수정, 계정 설정 기능을 포함하는 기본적인 프로필 페이지를 만들겠습니다.

### 1. HTML - 기본 구조

HTML을 사용하여 프로필 페이지의 기본 구조와 콘텐츠를 설정합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="profile-container">
        <h1>User Profile</h1>
        <div class="profile-photo">
            <img id="profileImage" src="default-profile.png" alt="Profile Photo">
            <input type="file" id="uploadImage" accept="image/*">
        </div>
        <form id="profileForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" value="JohnDoe">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="johndoe@example.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>
            <button type="submit">Save Changes</button>
        </form>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

### 2. CSS - 스타일링

CSS를 사용하여 프로필 페이지의 스타일을 정의합니다.

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

.profile-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.profile-photo {
    position: relative;
    margin-bottom: 20px;
}

.profile-photo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-photo input[type="file"] {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    cursor: pointer;
    width: 100px;
    height: 100px;
    top: 0;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
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
```

### 3. JavaScript - 동작 구현

JavaScript를 사용하여 프로필 사진을 변경하고 폼 데이터를 처리합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById('profileImage');
    const uploadImage = document.getElementById('uploadImage');
    const profileForm = document.getElementById('profileForm');

    uploadImage.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
});
```

### 동작 방식 설명

1. **HTML 부분:**
   - `<!DOCTYPE html>`: HTML5 문서임을 선언합니다.
   - `<html lang="en">`: 문서의 언어를 영어로 설정합니다.
   - `<head>`: 문서의 메타데이터를 포함합니다.
     - `<meta charset="UTF-8">`: 문서의 문자 인코딩을 UTF-8로 설정합니다.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 반응형 디자인을 위해 뷰포트를 설정합니다.
     - `<title>User Profile Page</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.
   - `<body>`: 문서의 본문을 정의합니다.
     - `<div class="profile-container">`: 프로필 페이지의 주요 컨테이너입니다.
       - `<h1>User Profile</h1>`: 페이지 제목을 표시합니다.
       - `<div class="profile-photo">`: 프로필 사진을 표시하는 컨테이너입니다.
         - `<img id="profileImage" src="default-profile.png" alt="Profile Photo">`: 기본 프로필 사진을 표시합니다.
         - `<input type="file" id="uploadImage" accept="image/*">`: 사용자가 프로필 사진을 업로드할 수 있는 파일 입력 요소입니다.
       - `<form id="profileForm">`: 사용자가 자신의 정보를 수정할 수 있는 폼입니다.
         - `<div class="form-group">`: 각 입력 필드를 포함하는 컨테이너입니다.
           - `<label for="username">Username</label>`: 입력 필드의 레이블입니다.
           - `<input type="text" id="username" name="username" value="JohnDoe">`: 사용자 이름 입력 필드입니다.
         - `<div class="form-group">`: 이메일 입력 필드와 레이블을 포함하는 컨테이너입니다.
           - `<label for="email">Email</label>`: 입력 필드의 레이블입니다.
           - `<input type="email" id="email" name="email" value="johndoe@example.com">`: 이메일 입력 필드입니다.
         - `<div class="form-group">`: 비밀번호 입력 필드와 레이블을 포함하는 컨테이너입니다.
           - `<label for="password">Password</label>`: 입력 필드의 레이블입니다.
           - `<input type="password" id="password" name="password">`: 비밀번호 입력 필드입니다.
         - `<button type="submit">Save Changes</button>`: 폼을 제출하는 버튼입니다.

2. **CSS 부분:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `background-color: #f2f2f2;`: 페이지의 배경색을 연한 회색으로 설정합니다.
     - `display: flex;`: Flexbox를 사용하여 페이지를 중앙에 배치합니다.
     - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
     - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
     - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
   - `.profile-container`: 프로필 컨테이너의 스타일을 정의합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `padding: 20px;`: 컨테이너 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
     - `width: 300px;`: 컨테이너 너비를 300px로 설정합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
   - `.profile-photo`: 프로필 사진 컨테이너의 스타일을 정의합니다.
     - `position: relative;`: 위치를 상대적으로 설정합니다.
     - `margin-bottom: 20px;`: 하단 여백을 20px로 설정합니다.
   - `.profile-photo img`: 프로필 사진의 스타일을 정의합니다.
     - `width: 100px;`: 프로필 사진의 너비를 100px로 설정합니다.
     - `height: 100px;`: 프로필 사진의 높이를 100px로 설정합니다.
     - `border-radius: 50%;`: 원형으로 만들기 위해 모서리를 둥글게 설정합니다.
     - `object-fit: cover;`: 이미지가 요소에 맞추어 잘림 없이

 표시되도록 설정합니다.
   - `.profile-photo input[type="file"]`: 파일 입력 요소의 스타일을 정의합니다.
     - `position: absolute;`: 절대 위치로 설정하여 이미지 위에 겹치게 배치합니다.
     - `left: 50%;`: 왼쪽을 기준으로 중앙에 배치합니다.
     - `transform: translateX(-50%);`: 중앙 정렬을 위해 가로 방향으로 이동시킵니다.
     - `opacity: 0;`: 파일 입력 요소를 보이지 않게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
     - `width: 100px;`: 입력 요소의 너비를 100px로 설정합니다.
     - `height: 100px;`: 입력 요소의 높이를 100px로 설정합니다.
     - `top: 0;`: 상단에 배치합니다.
   - `.form-group`: 각 입력 필드를 포함하는 컨테이너의 스타일을 정의합니다.
     - `margin-bottom: 15px;`: 하단 여백을 15px로 설정합니다.
     - `text-align: left;`: 텍스트를 왼쪽 정렬합니다.
   - `label`: 입력 필드 레이블의 스타일을 정의합니다.
     - `display: block;`: 블록 레벨 요소로 설정하여 레이블이 전체 너비를 차지하도록 합니다.
     - `margin-bottom: 5px;`: 하단 여백을 5px로 설정합니다.
   - `input[type="text"], input[type="email"], input[type="password"]`: 텍스트, 이메일, 비밀번호 입력 필드의 스타일을 정의합니다.
     - `width: 100%;`: 입력 필드가 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 8px;`: 입력 필드 내부의 여백을 설정합니다.
     - `border: 1px solid #ccc;`: 테두리를 설정합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
   - `button`: 제출 버튼의 스타일을 정의합니다.
     - `width: 100%;`: 버튼이 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 10px;`: 버튼 내부의 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae4c;`: 배경색을 더 어두운 녹색으로 설정합니다.

### 3. JavaScript - 동작 구현

JavaScript를 사용하여 프로필 사진을 변경하고 폼 데이터를 처리합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById('profileImage');
    const uploadImage = document.getElementById('uploadImage');
    const profileForm = document.getElementById('profileForm');

    // 프로필 사진 변경 처리
    uploadImage.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // 폼 제출 처리
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **프로필 사진 변경 처리:**
   - `const profileImage = document.getElementById('profileImage');`: 프로필 이미지 요소를 선택합니다.
   - `const uploadImage = document.getElementById('uploadImage');`: 파일 입력 요소를 선택합니다.
   - `uploadImage.addEventListener('change', function() { ... });`: 파일 입력 요소에 파일이 선택되면 실행되는 이벤트 리스너를 추가합니다.
     - `const file = this.files[0];`: 선택된 파일을 가져옵니다.
     - `if (file) { ... }`: 파일이 선택된 경우 실행됩니다.
       - `const reader = new FileReader();`: FileReader 객체를 생성합니다.
       - `reader.onload = function(e) { ... };`: 파일을 읽은 후 실행되는 함수를 설정합니다.
         - `profileImage.src = e.target.result;`: 프로필 이미지의 src 속성을 파일의 데이터 URL로 설정하여 이미지를 변경합니다.
       - `reader.readAsDataURL(file);`: 파일을 데이터 URL로 읽습니다.

3. **폼 제출 처리:**
   - `const profileForm = document.getElementById('profileForm');`: 프로필 폼 요소를 선택합니다.
   - `profileForm.addEventListener('submit', function(e) { ... });`: 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
     - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
     - `alert('Profile updated successfully!');`: 폼이 성공적으로 제출되었음을 알리는 경고창을 표시합니다.

