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
