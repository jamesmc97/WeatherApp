import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=cc427f69b73eb948792a74187c03fac1&units=metric`,
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        placeholder="Enter Zip Code"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <div>Temperature: {weather.main.temp} °C</div>
          <div>Humidity: {weather.main.humidity} %</div>
          <div>Wind Speed: {weather.wind.speed} m/s</div>
        </div>
      )}
      <footer>
        <a
          href="https://github.com/jamesmc97/WeatherApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
