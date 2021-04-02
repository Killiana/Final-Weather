
function currentTemp(response){
    console.log(response.data);
    let temperatureEl = document.querySelector("#temperature");
    let cityName = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidityEl = document.querySelector("#humidity");
    let humidity = response.data.main.humidity;
    let windEl = document.querySelector("#wind");
    let wind = Math.round(response.data.wind.speed);
    windEl.innerHTML = `Wind: ${wind}mph`;
    humidityEl.innerHTML = `Humidity: ${humidity}%`;
    description.innerHTML = response.data.weather[0].description;
    temperatureEl.innerHTML = Math.round(response.data.main.temp);
    cityName.innerHTML = response.data.name;
}

let apiKey = "5d480a9ea4973e7dfcb6ca4444c1582f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Leeds&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(currentTemp);