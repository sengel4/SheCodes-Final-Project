let now = new Date();
let showTime = document.querySelector("showTime");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
let day = days[now.getDay()];
document.getElementById("showTime").innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let enterCity = document.getElementById("currentCity");
  if (searchInput.value) {
    enterCity.innerHTML = `${searchInput.value}`;
    searchCity();
  } else {
    console.log("No New Item");
  }
}

let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", search);

function displayWeatherCondition(response) {
  let showTemp = document.getElementById("currentTemp");
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(showTemp);
  if (document.querySelector("#currentCity").innerHTML) {
    showTemp.innerHTML = `${
      document.querySelector("#currentTemp").innerHTML
    } degrees`;
  } else {
    console.log("No New Item");
  }
}

function searchCity() {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let town = document.getElementById("currentCity").innerHTML;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
