mport React, { Component } from 'react';
import { render } from 'react-dom';

class Weather extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      latitude: 0,
      longitude: 0,
      weather: {}
    }
  }

  componentDidMount() {
    if (window.navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeatherData(position.coords.latitude, position.coords.longitude)
      })
    }
  }

  getWeatherData(latitude, longitude) {
    const weatherapi = "https://fcc-weather-api.glitch.me/api/current?"

    fetch(`${weatherapi}lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          latitude,
          longitude,
          weather: data
        })
      })
  }
  
  render() {
    return (
      <div>
        <h3>Weather</h3>
        <span>{this.state.weather?.main?.temp}</span>
      </div>
    );
  }
}
render(<Weather />, document.getElementById('root'));
