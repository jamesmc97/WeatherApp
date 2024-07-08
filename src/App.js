import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/{locationKey}`
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
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
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
          href="https://github.com/yourusername/weather-app"
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
