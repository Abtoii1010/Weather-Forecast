const result = document.getElementById("result");
const form = document.getElementById("from");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const apiKey = "f513e8f0bfbf6a86359c22b7b42bc698";
const city = document.getElementById("city");
const temp = document.getElementById("Temp");
const humid = document.getElementById("Humid");
const type = document.getElementById("Type");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let cityname = inp.value;

  if (cityname === "") {
    window.alert("Enter a City");
    return;
  }

  getWeather(cityname);
});

async function getWeather(cityname) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`,
  );
  if (!response.ok) {
    window.alert("Please input a Valid City!!");
    return;
  }

  let data = await response.json();

  city.textContent = `City: ${data.name}`;
  temp.textContent = `Temperature: ${data.main.temp}`;
  humid.textContent = `Humidity : ${data.main.humidity}`;
  type.textContent = `Weather: ${data.weather[0].description}`;
  result.style.display = "block";
}
