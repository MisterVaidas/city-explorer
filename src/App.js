import React from "react";
import axios from "axios";
import { Card, Image } from 'react-bootstrap';
import './css/styles.css';

class App extends React.Component {
  state={
    city: '',
    lat: '',
    lon: '',
    map: ''
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
    const response = await axios.get(url);

    const locationData = response.data[0];

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=13&size=400x400&format=png`;

    this.setState({
      lat: locationData.lat,
      lon: locationData.lon,
      displayName: locationData.display_name,
      map: mapUrl
    });
  } catch (error) {
    console.error(error);
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
    </div>
  );
}
}

export default App;
