import React, { useState } from 'react';
import axios from 'axios';

import WeatherInfo from './WeatherInfo';
import './Weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
    error: false, // added error option
  });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      error: false,
    });
  }

  function handleError() {
    setWeatherData({
      ready: false,
      error: true,
    });
  }

  function search() {
    if (!city) {
      handleError(); // Handle empty city
      return;
    }

    const apiKey = '017d56650cd168d68067850318775d43';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a City"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="Submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      {weatherData.error && (
        <p className="error-message">City not found. Please try again.</p>
      )}
      {weatherData.ready && <WeatherInfo data={weatherData} />}
    </div>
  );
}
