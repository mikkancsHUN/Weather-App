const apiKey = "2ba03d47420a0e767912a5c10df3183c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.input-section input');
const searchBtn = document.querySelector('.input-section button');
const weatherIcon = document.querySelector('.weather__img');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();

    console.log(data);

    document.querySelector('.weather__location').innerHTML = data.name;
    document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.weather__detail-humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.weather__detail-wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png';
    } else if(data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png';
    } else if(data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png';
    } else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png';
    } else if(data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
})