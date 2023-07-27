import React from 'react';
import './css/weather.css'; 

class Weather extends React.Component {
    render() {
        return (
            <div className="weather-container">
                <h2 className="weather-title">Weather Forecast</h2>
                <ul className="weather-list">
                    {this.props.forecastData.map((forecast, index) => (
                        <li key={index} className="weather-item">
                            <strong className="weather-date">{forecast.date}</strong>: <span className="weather-description">{forecast.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Weather;
