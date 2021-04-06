function getDay(timestamp){
  let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10){
 return `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
  return `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let day  = days[date.getDay()];


return `${day} ${hours}:${minutes}`;
}

function getCity(response){
    console.log(response.data);
    let temperature = document.querySelector("#temperature");
    let wind = document.querySelector("#wind");
    let humidity = document.querySelector("#humidity");
    let description = document.querySelector("#description");
    let city = document.querySelector("#city");
    let day = document.querySelector("#day");
    let tempEl = Math.round(response.data.main.temp);
    let windEl = Math.round(response.data.wind.speed);
    let iconEl = document.querySelector("#icon");
    temperature.innerHTML = `${tempEl}`;
    wind.innerHTML = `${windEl}`;
    humidity.innerHTML = response.data.main.humidity;
    description.innerHTML = response.data.weather[0].description;
    city.innerHTML = response.data.name;
    day.innerHTML = getDay(response.data.dt * 1000);
    iconEl.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconEl.setAttribute("alt", response.data.weather[0].description);
}


let apiKey = "5d480a9ea4973e7dfcb6ca4444c1582f";
let city = `London`;
let units = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
console.log(apiUrl);

axios.get(apiUrl).then(getCity);
