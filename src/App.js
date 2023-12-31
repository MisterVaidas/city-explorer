import React from "react";
import axios from "axios";
import { Card, Image } from 'react-bootstrap';
import './css/styles.css';
import Alert from 'react-bootstrap/Alert';
import Weather from "./Weather";
import Movies from './Movies';



class App extends React.Component {
  state={
    city: '',
    lat: '',
    lon: '',
    map: '',
    errorMessage: ''
  }

  handleInputChange = event => {
    this.setState({city: event.target.value});
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SEARCH_STRING = this.state.city;
    const url = `https://eu1.locationiq.com/v1/search?key=${API_KEY}&q=${SEARCH_STRING}&format=json`;
  
    try {
      const locationResponse = await axios.get(url);
      const locationData = locationResponse.data[0];
      const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=13&size=400x400&format=png`;

      let weatherData = null;
      let movieData = null;
  
      try {
        const weatherDataResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?searchQuery=${SEARCH_STRING}`);
        weatherData = weatherDataResponse.data;
      } catch (weatherError) {
        this.setState({
          errorMessage: 'Weather information is not available for this location.'
        });
      }

      try {
        const movieDataResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies?searchQuery=${SEARCH_STRING}`);
        movieData = movieDataResponse.data;
      } catch (movieError) {
        this.setState({
          errorMessage: 'Movie information is not available for this location.'
        });
      }
  
      this.setState({
        lat: locationData.lat,
        lon: locationData.lon,
        displayName: locationData.display_name,
        map: mapUrl,
        weather: weatherData,
        movies: movieData, 
        errorMessage: ''
      });
    } catch (locationError) {
      console.error(locationError);
      this.setState({errorMessage: 'There was a problem with your request.'});
    }
}

  render() {
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" onChange={this.handleInputChange} />
        <button type="submit">Explore!</button>
      </form>

      {this.state.errorMessage &&
      <Alert variant="danger">
        {this.state.errorMessage}
      </Alert>
      }

      {this.state.lat && 
          <Card className="Card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.state.displayName}</Card.Title>
              <Card.Text>Latitude: {this.state.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.lon}</Card.Text>
              <Image className="Image" src={this.state.map} alt="Map" fluid />
            </Card.Body>
          </Card>
  }

      {this.state.weather && <Weather forecastData={this.state.weather} />}
      {this.state.movies && <Movies movieData={this.state.movies} />}

    </div>
  );
}
}

export default App;
