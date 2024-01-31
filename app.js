// app.js
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput.trim() !== '') {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    
    if (data.cod === '404') {
        weatherInfo.innerHTML = '<p>City not found. Please enter a valid city.</p>';
    } else {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `<p>${data.name}, ${data.sys.country}</p>
                                <p>Temperature: ${temperature} &#8451;</p>
                                <p>Description: ${description}</p>`;
    }
}
