import React from 'react';
import './css/weather.css';
import { format, parse } from 'date-fns';

class Weather extends React.Component {
    render() {
        const { forecastData } = this.props;

        // If no data received yet, show a loading message
        if (!forecastData) {
            return (
                <div className="weather-container">
                    <h2 className="weather-title">Loading weather data...</h2>
                </div>
            )
        }

        // If there was an error, show an error message
        if (forecastData.error) {
            return (
                <div className="weather-container">
                    <h2 className="weather-title">Error loading weather data.</h2>
                </div>
            )
        }

        const date = parse(forecastData.date, "yyyy-MM-dd HH:mm:ss", new Date());
        const formattedDate = format(date, "PPpp");

        return (
            <div className="weather-container">
                <h2 className="weather-title">Weather Forecast</h2>
                <ul className="weather-list">
                    <li className="weather-item">
                        <div><strong>Date: </strong> {formattedDate}</div>
                        <div><strong>Description: </strong> {forecastData.description}</div>
                        <div><strong>Temp: </strong> {forecastData.temperature}</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Weather;
