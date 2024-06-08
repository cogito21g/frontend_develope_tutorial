#
- 날씨 위젯(Weather Widget)
- 현재 날씨 정보를 표시하는 위젯을 추가하여 사용자가 최신 기상 정보를 확인
- 위치 기반 날씨 정보 제공도 가능
- HTML, CSS, JavaScript를 사용하고, OpenWeatherMap API를 통해 날씨 정보 가져옴.

### 기본 구조
1. HTML - 날씨 위젯의 구조 정의
2. CSS - 날씨 위젯의 스타일링
3. JavaScript - OpenWeatherMap API를 사용하여 날씨 정보 가져오기 및 표시


### 동작 방식 설명

1. **HTML 부분:**
   - **날씨 위젯 구조**:
     - `<div class="weather-widget">`: 날씨 위젯 컨테이너.
     - `<h2>Current Weather</h2>`: 위젯 제목.
     - `<div id="weatherInfo">`: 날씨 정보를 표시할 컨테이너.
       - `<p id="location">Location: <span id="city">Loading...</span></p>`: 도시 이름을 표시할 요소.
       - `<p id="temperature">Temperature: <span id="temp">Loading...</span>°C</p>`: 온도를 표시할 요소.
       - `<p id="description">Condition: <span id="desc">Loading...</span></p>`: 날씨 설명을 표시할 요소.
     - `<button id="getLocationBtn">Get Weather for My Location</button>`: 현재 위치의 날씨를 가져오는 버튼.

2. **CSS 부분:**
   - **기본 스타일**:
     - `body`: 페이지 기본 스타일 정의 (중앙 정렬, 배경색 등).
     - `.weather-widget`: 날씨 위젯 스타일 정의 (배경색, 패딩, 그림자 등).
   - **텍스트 스타일**:
     - `h2`: 제목 스타일 정의.
     - `#weatherInfo p`: 날씨 정보 텍스트 스타일 정의.
   - **버튼 스타일**:
     - `button`: 버튼 기본 스타일 정의.
     - `button:hover`: 버튼 호버 스타일 정의.

3. **JavaScript 부분:**
   - **DOM 로드 이벤트**:
     - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되면 함수 실행.
   - **API 키 및 요소 선택**:
     - `const apiKey = 'YOUR_API_KEY';`: OpenWeatherMap API 키 설정.
     - 날씨 정보를 표시할 요소들 선택 (`cityElement`, `tempElement`, `descElement`).
     - 위치 가져오기 버튼 요소 선택 (`getLocationBtn`).
   - **날씨 정보 가져오기**:
     - `function fetchWeather(lat, lon) { ... }`: 주어진 위도와 경도를 사용하여 날씨 정보를 가져오는 함수.
       - `fetch(url)`: OpenWeatherMap API에 요청을 보내 날씨 정보를 가져옴.
       - `then(response => response.json())`: 응답을 JSON으로 변환.
       - `then(data => { ... })`: 데이터를 사용하여 요소의 텍스트를 업데이트.
       - `catch(error => { ... })`: 에러 처리.
   - **위치 가져오기**:
     - `function getLocation() { ... }`: 사용자의 현재 위치를 가져오는 함수.
       - `navigator.geolocation.getCurrentPosition(position => { ... })`: 위치 정보를 가져옴.
       - 위치 정보 가져오기 실패 시 에러 처리.
   - **위치 가져오기 버튼 이벤트 리스너**:
     - `getLocationBtn.addEventListener('click', getLocation);`: 버튼 클릭 시 `getLocation` 함수 실행.
   - **초기 위치 설정**:
     - `fetchWeather(40.7128, -74.0060);`: 초기 위치를 뉴욕으로 설정하여 날씨 정보를 가져옴.


### 1. HTML - 날씨 위젯의 구조 정의

HTML은 사용자 인터페이스를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Widget</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="weather-widget">
        <h2>Current Weather</h2>
        <div id="weatherInfo">
            <p id="location">Location: <span id="city">Loading...</span></p>
            <p id="temperature">Temperature: <span id="temp">Loading...</span>°C</p>
            <p id="description">Condition: <span id="desc">Loading...</span></p>
        </div>
        <button id="getLocationBtn">Get Weather for My Location</button>
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
     - `<title>Weather Widget</title>`: 웹 페이지의 제목을 설정합니다.
     - `<link rel="stylesheet" href="styles.css">`: 외부 CSS 파일을 연결합니다.
   - `<body>`: 문서의 본문을 정의합니다.
     - `<div class="weather-widget">`: 날씨 위젯 컨테이너입니다.
       - `<h2>Current Weather</h2>`: 위젯 제목입니다.
       - `<div id="weatherInfo">`: 날씨 정보를 표시할 컨테이너입니다.
         - `<p id="location">Location: <span id="city">Loading...</span></p>`: 도시 이름을 표시할 요소입니다.
         - `<p id="temperature">Temperature: <span id="temp">Loading...</span>°C</p>`: 온도를 표시할 요소입니다.
         - `<p id="description">Condition: <span id="desc">Loading...</span></p>`: 날씨 설명을 표시할 요소입니다.
       - `<button id="getLocationBtn">Get Weather for My Location</button>`: 현재 위치의 날씨를 가져오는 버튼입니다.
   - `<script src="scripts.js"></script>`: 외부 JavaScript 파일을 포함합니다.

### 2. CSS - 날씨 위젯의 스타일링

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

.weather-widget {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

h2 {
    margin: 0 0 20px;
}

#weatherInfo p {
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}
```

#### 상세 설명:

1. **기본 스타일:**
   - `body`: 페이지의 기본 스타일을 정의합니다.
     - `font-family: Arial, sans-serif;`: 기본 폰트를 설정합니다.
     - `background-color: #f2f2f2;`: 페이지의 배경색을 연한 회색으로 설정합니다.
     - `display: flex;`: Flexbox를 사용하여 중앙에 배치합니다.
     - `justify-content: center;`: 수평 방향으로 가운데 정렬합니다.
     - `align-items: center;`: 수직 방향으로 가운데 정렬합니다.
     - `height: 100vh;`: 페이지 높이를 100%로 설정합니다.
     - `margin: 0;`: 기본 여백을 제거합니다.
   
2. **위젯 스타일:**
   - `.weather-widget`: 날씨 위젯의 스타일을 정의합니다.
     - `background-color: white;`: 배경색을 흰색으로 설정합니다.
     - `padding: 20px;`: 내부 여백을 설정합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: 가벼운 그림자를 추가하여 입체감을 줍니다.
     - `text-align: center;`: 텍스트를 가운데 정렬합니다.
     - `width: 300px;`: 위젯 너비를 300px로 설정합니다.

3. **텍스트 스타일:**
   - `h2`: 제목 스타일을 정의합니다.
     - `margin: 0 0 20px;`: 하단 여백을 설정합니다.
   - `#weatherInfo p`: 날씨 정보 텍스트의 스타일을 정의합니다.
     - `margin: 10px 0;`: 상하 여백을 설정합니다.

4. **버튼 스타일:**
   - `button`: 버튼의 스타일을 정의합니다.
     - `padding: 10px 20px;`: 내부 여백을 설정합니다.
     - `background-color: #5cb85c;`: 배경색을 녹색으로 설정합니다.
     - `color: white;`: 글자색을 흰색으로 설정합니다.
     - `border: none;`: 테두리를 제거합니다.
     - `border-radius: 5px;`: 모서리를 둥글게 설정합니다.
     - `cursor: pointer;`: 포인터 커서를 표시하여 클릭 가능한 영역임을 나타냅니다.
   - `button:hover`: 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
     - `background-color: #4cae4c;`: 배경색을 더 어두운 녹색으로 설정합니다.

### 3. JavaScript - OpenWeatherMap API를 사용하여 날씨 정보 가져오기 및 표시

JavaScript는 클라이언트 측에서 날씨 정보를 가져오고 표시하는 기능을 수행합니다.

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'YOUR_API_KEY'; // OpenWeatherMap API 키를 여기에 입력하세요.
    const weatherInfo = document.getElementById('weatherInfo');
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('desc');
    const getLocationBtn = document.getElementById('getLocationBtn');

    function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                cityElement.textContent = data.name;
                tempElement.textContent = data.main.temp.toFixed(1);
                descElement.textContent = data.weather[0].description;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please try again later.');
            });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon);
            }, error => {
                console.error('Error getting location:', error);
                alert('Failed to get your location. Please check your location settings.');
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }

    getLocationBtn.addEventListener('click', getLocation);

    // 초기 위치는 고정된 좌표로 설정 (예: 뉴욕)
    fetchWeather(40.7128, -74.0060);
});
```

#### 상세 설명:

1. **DOMContentLoaded 이벤트:**
   - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되고 DOM 트리가 완성되면 실행되는 함수를 설정합니다. 이를 통해 모든 요소가 준비된 후에 코드를 실행할 수 있습니다.

2. **변수 설정:**
   - `const apiKey = 'YOUR_API_KEY';`: OpenWeatherMap API 키를 설정합니다. API 키는 OpenWeatherMap 웹사이트에서 발급받아야 합니다.
   - `const weatherInfo = document.get

ElementById('weatherInfo');`: 날씨 정보를 표시할 컨테이너 요소를 선택합니다.
   - `const cityElement = document.getElementById('city');`: 도시 이름을 표시할 요소를 선택합니다.
   - `const tempElement = document.getElementById('temp');`: 온도를 표시할 요소를 선택합니다.
   - `const descElement = document.getElementById('desc');`: 날씨 설명을 표시할 요소를 선택합니다.
   - `const getLocationBtn = document.getElementById('getLocationBtn');`: 위치 가져오기 버튼 요소를 선택합니다.

3. **날씨 정보 가져오기 함수:**
   - `function fetchWeather(lat, lon) { ... }`: 주어진 위도(lat)와 경도(lon)를 사용하여 날씨 정보를 가져오는 함수입니다.
     - `const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;`: OpenWeatherMap API의 URL을 구성합니다.
     - `fetch(url)`: API에 GET 요청을 보냅니다.
       - `then(response => response.json())`: 서버 응답을 JSON으로 변환합니다.
       - `then(data => { ... })`: 변환된 데이터를 사용하여 요소의 텍스트를 업데이트합니다.
         - `cityElement.textContent = data.name;`: 도시 이름을 업데이트합니다.
         - `tempElement.textContent = data.main.temp.toFixed(1);`: 온도를 소수점 한 자리로 표시하여 업데이트합니다.
         - `descElement.textContent = data.weather[0].description;`: 날씨 설명을 업데이트합니다.
       - `catch(error => { ... })`: 에러가 발생하면 콘솔에 에러를 출력하고, 사용자에게 알림을 표시합니다.

4. **위치 가져오기 함수:**
   - `function getLocation() { ... }`: 사용자의 현재 위치를 가져오는 함수입니다.
     - `if (navigator.geolocation) { ... }`: 브라우저가 지리적 위치 API를 지원하는지 확인합니다.
       - `navigator.geolocation.getCurrentPosition(position => { ... })`: 위치 정보를 가져옵니다.
         - `const lat = position.coords.latitude;`: 위도 값을 가져옵니다.
         - `const lon = position.coords.longitude;`: 경도 값을 가져옵니다.
         - `fetchWeather(lat, lon);`: 가져온 위도와 경도를 사용하여 날씨 정보를 가져옵니다.
       - `error => { ... }`: 위치 정보를 가져오는 데 실패하면 콘솔에 에러를 출력하고, 사용자에게 알림을 표시합니다.
     - `else { ... }`: 브라우저가 지리적 위치 API를 지원하지 않으면 사용자에게 알림을 표시합니다.

5. **위치 가져오기 버튼 이벤트 리스너:**
   - `getLocationBtn.addEventListener('click', getLocation);`: 버튼 클릭 시 `getLocation` 함수가 실행되도록 이벤트 리스너를 추가합니다.

6. **초기 위치 설정:**
   - `fetchWeather(40.7128, -74.0060);`: 페이지가 로드될 때 초기 위치를 뉴욕으로 설정하여 날씨 정보를 가져옵니다.

## 수정된 코드

해당 에러 메시지가 발생하는 이유는 여러 가지가 있을 수 있습니다. 예를 들어, 사용자의 위치 서비스가 비활성화되어 있거나 브라우저에서 위치 액세스 권한을 거부했을 경우입니다. 코드에 대한 개선점과 함께 자세히 설명해드리겠습니다.

또한, OpenWeatherMap 공용 API 키 `b6907d289e10d714a6e88b30761fae22`는 제한된 기능을 제공할 수 있으므로 더 나은 테스트를 위해 무료 API 키를 생성하는 것이 좋습니다. 하지만 지금은 공용 API 키를 사용하여 계속 진행하겠습니다.

### 1. HTML - 날씨 위젯의 구조 정의

HTML은 사용자 인터페이스를 정의합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Widget</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="weather-widget">
        <h2>Current Weather</h2>
        <div id="weatherInfo">
            <p id="location">Location: <span id="city">Loading...</span></p>
            <p id="temperature">Temperature: <span id="temp">Loading...</span>°C</p>
            <p id="description">Condition: <span id="desc">Loading...</span></p>
        </div>
        <button id="getLocationBtn">Get Weather for My Location</button>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
```

### 2. CSS - 날씨 위젯의 스타일링

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

.weather-widget {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

h2 {
    margin: 0 0 20px;
}

#weatherInfo p {
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}
```

### 3. JavaScript - OpenWeatherMap API를 사용하여 날씨 정보 가져오기 및 표시

```javascript
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'b6907d289e10d714a6e88b30761fae22'; // 공용 API 키
    const weatherInfo = document.getElementById('weatherInfo');
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('desc');
    const getLocationBtn = document.getElementById('getLocationBtn');

    function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.name && data.main && data.weather) {
                    cityElement.textContent = data.name;
                    tempElement.textContent = data.main.temp.toFixed(1);
                    descElement.textContent = data.weather[0].description;
                } else {
                    cityElement.textContent = "Unavailable";
                    tempElement.textContent = "N/A";
                    descElement.textContent = "N/A";
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please try again later.');
            });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon);
            }, error => {
                console.error('Error getting location:', error);
                alert('Failed to get your location. Please check your location settings.');
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }

    getLocationBtn.addEventListener('click', getLocation);

    // 초기 위치는 고정된 좌표로 설정 (예: 뉴욕)
    fetchWeather(40.7128, -74.0060);
});
```

### 동작 방식 설명

1. **HTML 부분:**
   - **날씨 위젯 구조**:
     - `<div class="weather-widget">`: 날씨 위젯 컨테이너.
     - `<h2>Current Weather</h2>`: 위젯 제목.
     - `<div id="weatherInfo">`: 날씨 정보를 표시할 컨테이너.
       - `<p id="location">Location: <span id="city">Loading...</span></p>`: 도시 이름을 표시할 요소.
       - `<p id="temperature">Temperature: <span id="temp">Loading...</span>°C</p>`: 온도를 표시할 요소.
       - `<p id="description">Condition: <span id="desc">Loading...</span></p>`: 날씨 설명을 표시할 요소.
     - `<button id="getLocationBtn">Get Weather for My Location</button>`: 현재 위치의 날씨를 가져오는 버튼.

2. **CSS 부분:**
   - **기본 스타일**:
     - `body`: 페이지 기본 스타일 정의 (중앙 정렬, 배경색 등).
     - `.weather-widget`: 날씨 위젯 스타일 정의 (배경색, 패딩, 그림자 등).
   - **텍스트 스타일**:
     - `h2`: 제목 스타일 정의.
     - `#weatherInfo p`: 날씨 정보 텍스트 스타일 정의.
   - **버튼 스타일**:
     - `button`: 버튼 기본 스타일 정의.
     - `button:hover`: 버튼 호버 스타일 정의.

3. **JavaScript 부분:**
   - **DOM 로드 이벤트**:
     - `document.addEventListener("DOMContentLoaded", function() { ... });`: 문서가 완전히 로드되면 함수 실행.
   - **API 키 및 요소 선택**:
     - `const apiKey = 'b6907d289e10d714a6e88b30761fae22';`: OpenWeatherMap 공용 API 키 설정.
     - 날씨 정보를 표시할 요소들 선택 (`cityElement`, `tempElement`, `descElement`).
     - 위치 가져오기 버튼 요소 선택 (`getLocationBtn`).
   - **날씨 정보 가져오기**:
     - `function fetchWeather(lat, lon) { ... }`: 주어진 위도와 경도를 사용하여 날씨 정보를 가져오는 함수.
       - `fetch(url)`: OpenWeatherMap API에 요청을 보내 날씨 정보를 가져옴.
       - `then(response => response.json())`: 응답을 JSON으로 변환.
       - `then(data => { ... })`: 데이터를 사용하여 요소의 텍스트를 업데이트.
       - `catch(error => { ... })`: 에러 처리.
   - **위치 가져오기**:
     - `function getLocation() { ... }`: 사용자의 현재 위치를 가져오는 함수.
       - `navigator.geolocation.getCurrentPosition(position => { ... })`: 위치 정보를 가져옴.
       - 위치 정보 가져오기 실패 시 에러 처리.
   - **위치 가져오기 버튼 이벤트 리스너**:
     - `getLocationBtn.addEventListener('click', getLocation);`: 버튼 클릭 시 `getLocation` 함수 실행.
   - **초기 위치 설정**:
     - `fetchWeather(40.7128, -74.0060);`: 초기 위치를 뉴욕으로 설정하여 날씨 정보를 가져옴.
