import React from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

class App extends React.Component {
  state={
    city: '',
    lat: '',
    lon: '',
    mapImg: ''
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

    this.setState({
      lat: locationData.lat,
      lon: locationData.lon,
      displayName: locationData.display_name,
      mapImg: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=13&size=400x400&format=png`
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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.state.displayName}</Card.Title>
              <Card.Text>Latitude: {this.state.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.lon}</Card.Text>
            </Card.Body>
            <Card.Img variant="botton" src={this.state.mapImg} />
          </Card>
  }
    </div>
  );
}
}

export default App;
