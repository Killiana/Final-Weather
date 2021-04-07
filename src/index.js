function getDay(timestamp){
  let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10){
 hours `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
  minutes `0${minutes}`;
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
showTemp = response.data.main.temp;
   
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

function showCity(city){
let apiKey = "5d480a9ea4973e7dfcb6ca4444c1582f";
let units = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(getCity);
}

function handleCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#input-element");
  showCity(cityInput.value);
}
function getFah(event){
  event.preventDefault();
  fahLink.classList.add("active");
celsLink.classList.remove("active");
  let fahTemp = document.querySelector("#temperature");
 
  fahTemp.innerHTML = Math.round(showTemp * 9/5) + 32;  
}
function getCels(event){
  event.preventDefault();
  celsLink.classList.add("active"); 
  fahLink.classList.remove("active");
  let celsTemp = document.querySelector("#temperature");
  celsTemp.innerHTML = Math.round(showTemp);
}
let showTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleCity);

let fahLink = document.querySelector("#fah-link");
fahLink.addEventListener("click", getFah);
let celsLink = document.querySelector("#ces-link");
celsLink.addEventListener("click", getCels);
showCity("London");