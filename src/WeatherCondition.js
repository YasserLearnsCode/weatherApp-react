import React from "react";
import "./WeatherCondition.css";

export default function WeatherCondition() {
  return (
    <div className="WeatherCondition">
      <div className="current-weather-condition">
        <h1>
          <span className="city-element" id="js-city-element"></span> <br />
          <span className="city-temp">
            <span className="temp-element" id="js-temp-element"></span>
            <span className="metric">&deg;C</span>
          </span>
        </h1>

        <div className="condition">
          <strong>
            <span className="day" id="js-day"></span>
            <span className="hour" id="js-hour"></span>:
            <span id="js-minutes"></span>
          </strong>
          , <span id="js-conditions"></span> <br />
          Humidity: <span className="humidity" id="js-humidity"></span>
          <span className="humidity">%</span> &nbsp; Wind:
          <span className="wind-speed" id="js-wind-speed"></span>
          <span className="wind-speed">km/h</span>
        </div>
      </div>
    </div>
  );
}
