import React, { useState } from 'react';
import LocationSearch from "./components/LocationSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import DeltaDisplay from "./components/DeltaDisplay";
import './App.css';
const backendUrl = 'http://localhost:5000';

function App() {
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [deltaData, setDeltaData] = useState([]);

  const handleSearch = async (location) => {
    const newLocations = [...locations, location];
    setLocations(newLocations);

    if (newLocations.length >= 2) {
      try {
        const response = await fetch(`${backendUrl}/api/weather/GetWeather?locations=${newLocations.join('&locations=')}`);
        const data = await response.json();
        setWeatherData(data.weatherData);
        setDeltaData(data.delta);
      } catch (error) {
        alert('Unable to fetch weather data. Please ensure the backend server is running on http://localhost:5000');
      }
    }
  }
  return (
    <div>
      <h1>Weather Comparison</h1>
      <LocationSearch onSearch={handleSearch} />
      <WeatherDisplay data={weatherData} />
      {Object.keys(deltaData).length > 0 && <DeltaDisplay deltas={deltaData} />}
    </div>
  );
}

export default App;
