# Weather App

A simple weather application that allows users to input a city name and see the current weather conditions, including temperature, humidity, wind speed, and weather description. Built using vanilla JavaScript, HTML, and CSS (no frameworks like React used).

## Features

- **Search by City:** Users can input a city name and get real-time weather data.
- **Display Current Weather Data:** Shows the city name, temperature (in Celsius), weather description, humidity, wind speed, and a weather icon.
- **Error Handling:** If an invalid city is entered or there's an issue with the API, the app shows an error message.
- **Responsive Design:** The app is mobile-friendly and adapts to different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API (https://openweathermap.org/api)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

Open index.html in your browser to start using the app.
Usage

Open the app in your browser.
Type a city name into the input field and press "Enter" to view the current weather conditions.
The app will display:
City name
Temperature (in Celsius)
Weather description (e.g., sunny, cloudy)
Wind speed and humidity
Weather icon representing the conditions
Example

Search for:

"London"
"Paris"
"New York"
Example Result:

City: London
Temperature: 15°C
Weather: Clear sky
Wind Speed: 3.1 m/s
Humidity: 67%
Error Handling

If the city is not found, the app will show an error message: "City not found."
If no city is entered, an error will prompt the user to provide a valid city name.
Future Improvements

Implement more detailed error handling and user feedback.
Add a feature to allow users to search for weather by ZIP code or geolocation.
Refactor code to use a modern framework like React for better scalability.
