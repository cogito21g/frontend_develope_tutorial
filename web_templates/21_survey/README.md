# Survey
- 퀴즈 및 설문조사(Quiz and Survey)
- 사용자가 참여할 수 있는 퀴즈나 설문조사를 추가하여 사용자 참여도를 높이고, 피드백을 수집

물론입니다! 사용자 참여도를 높이고 피드백을 수집할 수 있는 퀴즈 및 설문조사 페이지를 구현해보겠습니다. 이 예제에서는 HTML, CSS, JavaScript를 사용하여 간단한 퀴즈 및 설문조사 기능을 구현합니다.

### 1. HTML - 기본 구조

HTML을 사용하여 퀴즈 및 설문조사 페이지의 기본 구조와 콘텐츠를 설정합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz and Survey</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Quiz and Survey</h1>

        <!-- Quiz Section -->
        <section id="quiz">
            <h2>Quiz</h2>
            <form id="quizForm">
                <div class="quiz-question">
                    <p>Question 1: What is the capital of France?</p>
                    <label><input type="radio" name="q1" value="Paris"> Paris</label>
                    <label><input type="radio" name="q1" value="London"> London</label>
                    <label><input type="radio" name="q1" value="Berlin"> Berlin</label>
                </div>
                <div class="quiz-question">
                    <p>Question 2: Which planet is known as the Red Planet?</p>
                    <label><input type="radio" name="q2" value="Mars"> Mars</label>
                    <label><input type="radio" name="q2" value="Venus"> Venus</label>
                    <label><input type="radio" name="q2" value="Jupiter"> Jupiter</label>
                </div>
                <button type="submit">Submit Quiz</button>
            </form>
            <div id="quizResult"></div>
        </section>

        <!-- Survey Section -->
        <section id="survey">
            <h2>Survey</h2>
            <form id="surveyForm">
                <div class="survey-question">
                    <p>How satisfied are you with our service?</p>
                    <label><input type="radio" name="satisfaction" value="Very Satisfied"> Very Satisfied</label>
                    <label><input type="radio" name="satisfaction" value="Satisfied"> Satisfied</label>
                    <label><input type="radio" name="satisfaction" value="Neutral"> Neutral</label>
                    <label><input type="radio" name="satisfaction" value="Dissatisfied"> Dissatisfied</label>
                    <label><input type="radio" name="satisfaction" value="Very Dissatisfied"> Very Dissatisfied</label>
                </div>
                <div class="survey-question">
                    <p>Any suggestions for improvement?</p>
                    <textarea name="suggestions" rows="4" cols="50"></textarea>
                </div>
                <button type="submit">Submit Survey</button>
            </form>
            <div id="surveyResult"></div>
        </section>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

### 2. CSS - 스타일링

CSS를 사용하여 퀴즈 및 설문조사 페이지의 스타일을 정의합니다.

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

form {
    margin: 20px 0;
}

.quiz-question, .survey-question {
    margin-bottom: 15px;
}

label {
    display: block;
    margin: 5px 0;
}

button {
    display: block;
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

#quizResult, #surveyResult {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #e2e2e2;
}
```

### 3. JavaScript - 동작 구현

JavaScript를 사용하여 퀴즈 및 설문조사 폼을 처리하고 결과를 표시합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Quiz Form
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        const answers = {
            q1: 'Paris',
            q2: 'Mars'
        };
        const formData = new FormData(quizForm);
        for (let [key, value] of formData.entries()) {
            if (value === answers[key]) {
                score++;
            }
        }
        quizResult.innerHTML = `You scored ${score} out of 2.`;
    });

    // Survey Form
    const surveyForm = document.getElementById('surveyForm');
    const surveyResult = document.getElementById('surveyResult');

    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(surveyForm);
        let satisfaction = formData.get('satisfaction');
        let suggestions = formData.get('suggestions');

        surveyResult.innerHTML = `<p>Thank you for your feedback!</p>
                                  <p>Satisfaction Level: ${satisfaction}</p>
                                  <p>Suggestions: ${suggestions}</p>`;
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
     - `<title>Quiz and Survey</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.
   - `<body>`: 문서의 본문을 정의합니다.
     - `<div class="container">`: 페이지의 주요 컨테이너입니다.
       - `<h1>Quiz and Survey</h1>`: 페이지 제목을 표시합니다.
       - **퀴즈 섹션**: 사용자 퀴즈를 위한 섹션입니다.
         - `<section id="quiz">`: 퀴즈 섹션을 정의합니다.
         - `<form id="quizForm">`: 퀴즈 폼을 정의합니다.
           - `<div class="quiz-question">`: 첫 번째 퀴즈 질문을 포함하는 컨테이너입니다.
             - `<p>Question 1: What is the capital of France?</p>`: 질문 텍스트입니다.
             - `<label><input type="radio" name="q1" value="Paris"> Paris</label>`: 라디오 버튼 옵션입니다.
           - `<div class="quiz-question">`: 두 번째 퀴즈 질문을 포함하는 컨테이너입니다.
             - `<p>Question 2: Which planet is known as the Red Planet?</p>`: 질문 텍스트입니다.
             - `<label><input type="radio" name="q2" value="Mars"> Mars</label>`: 라디오 버튼 옵션입니다.
           - `<button type="submit">Submit Quiz</button>`: 퀴즈 폼 제출 버튼입니다.
         - `<div id="quizResult"></div>`: 퀴즈 결과를 표시할 영역입니다.
       - **설문조사 섹션**: 사용자 설문조사를 위한 섹션입니다.
         - `<section id="survey">`: 설문조사 섹션을 정의합니다.
         - `<form id="surveyForm">`: 설문조사 폼을 정의합니다.
           - `<div class="survey-question">`: 첫 번째 설문조사 질문을 포함하는 컨테이너입니다.
             - `<p>How satisfied are you with our service?</p>`: 질문 텍스트입니다.
             - `<label><input type="radio" name="satisfaction" value="Very Satisfied"> Very Satisfied</label>`: 라디오 버튼 옵션입니다.
           - `<div class="survey-question">`: 두 번째 설문조사 질문을 포함하는 컨테이너입니다.
             - `<p>Any suggestions for improvement?</p>`: 질문 텍스트입니다.
             -

 `<textarea name="suggestions" rows="4" cols="50"></textarea>`: 텍스트 영역입니다.
           - `<button type="submit">Submit Survey</button>`: 설문조사 폼 제출 버튼입니다.
         - `<div id="surveyResult"></div>`: 설문조사 결과를 표시할 영역입니다.

2. **CSS 부분:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `background-color: #f2f2f2;`: 페이지의 배경색을 연한 회색으로 설정합니다.
     - `margin: 0;`: 기본 여백을 제거합니다.
     - `padding: 20px;`: 패딩을 설정합니다.
     - `display: flex; justify-content: center; align-items: center;`: Flexbox를 사용하여 중앙에 배치합니다.
   - `.container`: 페이지 주요 컨테이너의 스타일을 정의합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `padding: 20px;`: 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
     - `width: 600px;`: 컨테이너 너비를 600px로 설정합니다.
   - `h1, h2`: 제목 스타일을 정의합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
   - `form`: 폼의 스타일을 정의합니다.
     - `margin: 20px 0;`: 상하 여백을 설정합니다.
   - `.quiz-question, .survey-question`: 질문 컨테이너의 스타일을 정의합니다.
     - `margin-bottom: 15px;`: 하단 여백을 설정합니다.
   - `label`: 라벨 스타일을 정의합니다.
     - `display: block;`: 블록 레벨 요소로 설정하여 라벨이 전체 너비를 차지하도록 합니다.
     - `margin: 5px 0;`: 상하 여백을 설정합니다.
   - `button`: 버튼 스타일을 정의합니다.
     - `display: block;`: 블록 레벨 요소로 설정합니다.
     - `width: 100%;`: 버튼이 부모 요소의 전체 너비를 차지하도록 설정합니다.
     - `padding: 10px;`: 내부 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 3px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae4c;`: 배경색을 더 어두운 녹색으로 설정합니다.
   - `#quizResult, #surveyResult`: 결과 표시 영역의 스타일을 정의합니다.
     - `margin-top: 20px;`: 상단 여백을 설정합니다.
     - `padding: 10px;`: 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `background-color: #e2e2e2;`: 배경색을 연한 회색으로 설정합니다.

3. **JavaScript 부분:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다.
   - **퀴즈 폼 처리:**
     - `const quizForm = document.getElementById('quizForm');`: 퀴즈 폼 요소를 선택합니다.
     - `const quizResult = document.getElementById('quizResult');`: 퀴즈 결과 표시 요소를 선택합니다.
     - `quizForm.addEventListener('submit', function(e) { ... });`: 퀴즈 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
       - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
       - `let score = 0;`: 초기 점수를 0으로 설정합니다.
       - `const answers = { q1: 'Paris', q2: 'Mars' };`: 각 질문의 정답을 정의합니다.
       - `const formData = new FormData(quizForm);`: 폼 데이터를 가져옵니다.
       - `for (let [key, value] of formData.entries()) { ... }`: 폼 데이터의 각 항목을 반복합니다.
         - `if (value === answers[key]) { score++; }`: 사용자의 답변이 정답과 일치하면 점수를 증가시킵니다.
       - `quizResult.innerHTML = `You scored ${score} out of 2.`;`: 퀴즈 결과를 표시합니다.
   - **설문조사 폼 처리:**
     - `const surveyForm = document.getElementById('surveyForm');`: 설문조사 폼 요소를 선택합니다.
     - `const surveyResult = document.getElementById('surveyResult');`: 설문조사 결과 표시 요소를 선택합니다.
     - `surveyForm.addEventListener('submit', function(e) { ... });`: 설문조사 폼이 제출되면 실행되는 이벤트 리스너를 추가합니다.
       - `e.preventDefault();`: 폼의 기본 제출 동작을 방지합니다.
       - `const formData = new FormData(surveyForm);`: 폼 데이터를 가져옵니다.
       - `let satisfaction = formData.get('satisfaction');`: 만족도 값을 가져옵니다.
       - `let suggestions = formData.get('suggestions');`: 제안 내용을 가져옵니다.
       - `surveyResult.innerHTML = `<p>Thank you for your feedback!</p>
                                   <p>Satisfaction Level: ${satisfaction}</p>
                                   <p>Suggestions: ${suggestions}</p>`;`: 설문조사 결과를 표시합니다.

이렇게 하면 사용자가 참여할 수 있는 퀴즈 및 설문조사 기능이 구현됩니다. 필요에 따라 더 많은 질문을 추가하거나 스타일을 조정할 수 있습니다.

