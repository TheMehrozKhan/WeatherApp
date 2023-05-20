document.getElementById('submit').addEventListener('click', function(event) {
    var cityInput = document.getElementById('city');
    if (!cityInput.value) {
      event.preventDefault(); // Prevent form submission
      alert('Please complete all fields.');
    }
  });
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '70f6938b46msh01a2fd10137eac6p1f8ed9jsndaa2c154a35f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed

            const sunrise = new Date(response.sunrise * 1000);
            const sunriseHours = sunrise.getHours();
            const sunriseMinutes = sunrise.getMinutes();
            const sunriseTime = `${sunriseHours % 12 || 12}:${sunriseMinutes.toString().padStart(2, '0')} ${sunriseHours < 12 ? 'AM' : 'PM'}`;
            document.getElementById('sunrise').textContent = sunriseTime;

            const sunset = new Date(response.sunset * 1000);
            const sunsetHours = sunset.getHours();
            const sunsetMinutes = sunset.getMinutes();
            const sunsetTime = `${sunsetHours % 12 || 12}:${sunsetMinutes.toString().padStart(2, '0')} ${sunsetHours < 12 ? 'AM' : 'PM'}`;
            document.getElementById('sunset').textContent = sunsetTime;


            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Karachi")