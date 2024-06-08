# Player 
- 음악 및 비디오 플레이어(Music and Video Player)
- 음악이나 비디오를 재생할 수 있는 플레이어를 웹 페이지에 추가
- 미디어 콘텐츠를 통해 사용자에게 더 많은 정보를 제공


### 동작 방식 설명

1. **HTML 부분:**
   - 기본 페이지 구조를 정의합니다.
   - 헤더(`header`)와 주요 콘텐츠 영역(`main`)을 설정합니다.
   - 음악 플레이어 섹션(`section`)을 추가하고, `<audio>` 태그를 사용하여 음악 파일을 삽입합니다.
     - `controls` 속성을 사용하여 기본 재생 컨트롤(재생, 일시 정지, 볼륨 조절 등)을 표시합니다.
     - `<source>` 태그를 사용하여 오디오 파일의 경로와 타입을 지정합니다.
   - 비디오 플레이어 섹션을 추가하고, `<video>` 태그를 사용하여 비디오 파일을 삽입합니다.
     - `controls` 속성을 사용하여 기본 재생 컨트롤을 표시합니다.
     - `width` 속성을 사용하여 비디오의 너비를 설정합니다.
     - `<source>` 태그를 사용하여 비디오 파일의 경로와 타입을 지정합니다.

2. **CSS 부분:**
   - 기본적인 페이지 스타일을 정의합니다.
   - `body` 태그의 기본 스타일을 설정하여 폰트, 여백, 패딩 등을 조정합니다.
   - `header` 태그의 스타일을 설정하여 배경색, 글자색, 텍스트 정렬, 패딩 등을 조정합니다.
   - `main` 태그의 패딩을 설정하여 주요 콘텐츠 영역을 정의합니다.
   - `section` 태그의 마진을 설정하여 각 섹션 사이에 여백을 둡니다.

### 예제 파일 설정

1. **오디오 파일 추가:**
   - 프로젝트 디렉토리에 `audio-file.mp3` 파일을 추가합니다. 실제 파일 이름과 경로는 예제와 일치하도록 설정해야 합니다.

2. **비디오 파일 추가:**
   - 프로젝트 디렉토리에 `video-file.mp4` 파일을 추가합니다. 실제 파일 이름과 경로는 예제와 일치하도록 설정해야 합니다.


물론입니다! 각 코드 블록의 상세 설명을 제공하겠습니다.

### 1. HTML - 기본 구조

HTML은 웹 페이지의 기본 구조와 콘텐츠를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music and Video Player Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Music and Video Player Example</h1>
    </header>
    <main>
        <section>
            <h2>Music Player</h2>
            <audio controls>
                <source src="audio-file.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </section>
        <section>
            <h2>Video Player</h2>
            <video controls width="600">
                <source src="video-file.mp4" type="video/mp4">
                Your browser does not support the video element.
            </video>
        </section>
    </main>
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
     - `<title>Music and Video Player Example</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.

2. **헤더 및 콘텐츠 섹션:**
   - `<body>`: 문서의 본문을 정의합니다.
   - `<header>`: 페이지의 헤더를 정의합니다.
     - `<h1>Music and Video Player Example</h1>`: 페이지 제목을 표시합니다.
   - `<main>`: 주요 콘텐츠 영역을 정의합니다.
     - 첫 번째 `<section>`: 음악 플레이어를 위한 섹션입니다.
       - `<h2>Music Player</h2>`: 섹션 제목을 표시합니다.
       - `<audio controls>`: 오디오 파일을 재생할 수 있는 HTML5 오디오 플레이어입니다.
         - `<source src="audio-file.mp3" type="audio/mpeg">`: 오디오 파일의 경로와 타입을 지정합니다.
         - `Your browser does not support the audio element.`: 브라우저가 오디오 요소를 지원하지 않을 경우 표시될 대체 텍스트입니다.
     - 두 번째 `<section>`: 비디오 플레이어를 위한 섹션입니다.
       - `<h2>Video Player</h2>`: 섹션 제목을 표시합니다.
       - `<video controls width="600">`: 비디오 파일을 재생할 수 있는 HTML5 비디오 플레이어입니다.
         - `<source src="video-file.mp4" type="video/mp4">`: 비디오 파일의 경로와 타입을 지정합니다.
         - `Your browser does not support the video element.`: 브라우저가 비디오 요소를 지원하지 않을 경우 표시될 대체 텍스트입니다.

3. **JavaScript 파일 포함:**
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 포함합니다. 이 예제에서는 별도의 JavaScript 코드가 필요하지 않지만, 추가적인 기능을 구현할 때 사용할 수 있습니다.

### 2. CSS - 스타일링

CSS는 웹 페이지의 스타일을 정의합니다.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

main {
    padding: 20px;
}

section {
    margin: 20px 0;
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `margin: 0;`: 페이지의 기본 여백을 제거합니다.
     - `padding: 0;`: 페이지의 기본 패딩을 제거합니다.
     - `line-height: 1.6;`: 기본 줄 간격을 설정합니다.

2. **헤더 스타일:**
   - `header`: 헤더의 배경색, 글자색, 텍스트 정렬, 패딩을 설정합니다.
     - `background-color: #333;`: 헤더의 배경색을 어두운 회색으로 설정합니다.
     - `color: #fff;`: 헤더의 글자색을 흰색으로 설정합니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
     - `padding: 20px 0;`: 상하 20px의 패딩을 설정합니다.

3. **메인 콘텐츠 스타일:**
   - `main`: 메인 콘텐츠 영역의 패딩을 설정합니다.
     - `padding: 20px;`: 모든 방향에서 20px의 패딩을 설정합니다.
   - `section`: 각 섹션의 기본 스타일을 정의합니다.
     - `margin: 20px 0;`: 각 섹션 사이에 20px의 여백을 설정합니다.

### 3. JavaScript - 동작 구현

이 예제에서는 추가적인 JavaScript 코드가 필요하지 않습니다. HTML5 `<audio>`와 `<video>` 태그는 기본적으로 브라우저에서 제공하는 컨트롤을 사용하여 재생, 일시 정지, 볼륨 조절 등을 지원합니다. 하지만 필요에 따라 추가적인 기능을 구현할 수 있습니다.

예를 들어, 다음과 같은 간단한 JavaScript 코드를 사용하여 페이지 로드 시 음악을 자동으로 재생하도록 설정할 수 있습니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.querySelector("audio");
    audioElement.play();
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다.

2. **오디오 요소 선택 및 자동 재생:**
   - `const audioElement = document.querySelector("audio");`: 첫 번째 `<audio>` 요소를 선택하여 `audioElement` 변수에 저장합니다.
   - `audioElement.play();`: 오디오를 자동으로 재생합니다.

이렇게 하면 웹 페이지에 기본적인 음악 및 비디오 플레이어가 추가됩니다. 필요에 따라 더 많은 기능을 추가하거나 스타일을 조정할 수 있습니다.
