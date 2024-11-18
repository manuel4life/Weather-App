document
  .querySelector("#location-input")
  .addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const location = e.target.value.trim();
      const weatherdata = await getWeatherData(location);
      displayWeatherData(weatherdata);
    }
  });

// Fetch weather data
const getWeatherData = async (location) => {
  try {
    if (!location) throw new Error("Location cannot be empty.");

    const apiKey = "7ff69b106eb6b0cd43d9c708583c3085";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    if (!response.ok) throw new Error("City not found.");

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
    return {};
  }
};

// Display weather data
const displayWeatherData = (data) => {
  const weatherDataElement = document.getElementById("weather-data");

  if (!data || Object.keys(data).length === 0 || data.cod !== 200) {
    weatherDataElement.innerHTML = "Invalid location. Please try again.";
    return;
  }

  const temperatureCelsius = Math.floor(data.main.temp - 273.15);
  const backgroundColor = getBackgroundColor(temperatureCelsius);
  weatherDataElement.style.backgroundColor = backgroundColor;

  weatherDataElement.innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature: ${temperatureCelsius}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
};

// Change background color based on temperature
const getBackgroundColor = (temperature) => {
  if (temperature < 0) return "lightblue";
  if (temperature < 10) return "lightgreen";
  if (temperature < 20) return "lightyellow";
  if (temperature < 30) return "lightsalmon";
  return "lightcoral";
};

// Fetch default weather on load
window.onload = async () => {
  const defaultLocation = "Abokobi";
  const weatherData = await getWeatherData(defaultLocation);
  displayWeatherData(weatherData);
};
