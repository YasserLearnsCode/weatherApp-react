import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="forecast-container">
        <div className="forecast-title">5-DAY FORECAST</div>

        <div className="forecast" id="js-forecast">
          <div className="row">
            <div className="col">
              <span className="forecast-day" id="js-forecast-day"></span>
            </div>
            <div className="col icon-col">
              <span id="js-forecast-icon"></span>
            </div>

            <div className="col">
              <div className="forecast-temp">
                <strong>
                  <span className="forecast-temp-max-color">
                    <span
                      className="forecast-temp-max"
                      id="js-forecast-temp-max"
                    ></span>{" "}
                  </span>
                </strong>{" "}
                <span className="forecast-temp-min-color">
                  <span id="js-forecast-temp-min"> &nbsp;</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
