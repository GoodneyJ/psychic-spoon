
import React, { Component } from 'react'
import axios from 'axios';
import WeatherContainer from './weatherContainer.js'
import Styles from './styles.css'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      current: {},
      active: [],
      forecast: [],
      icon: '',
      loading: 1
    }

    //Function bindings
    this.axiosGetRequest = this.axiosGetRequest.bind(this);
  }

  componentDidMount() {
    this.axiosGetRequest();

  }

  //Axios get request, called on componentdidMount
  axiosGetRequest = () => {
    axios.get(process.env.REACT_APP_WEATHER_API)
    .then(res => {
      const data = res.data;
      const location = data.location;
      const current = data.current;
      const forecast = data.forecast.forecastday
      this.setState({
                      location: location,
                      current: current,
                      forecast: forecast,
                      icon: current.condition.icon,
                      loading: 0
                    })
    })
  }

  render() {
    
    if(this.state.loading)
    {
      return (<div id="loading"><p>Loading...</p></div>)
    }
    else
    {
      return (
        <div id="app-wrapper">
          {this.state.active.map((day) =>{
            return(<div><img src={this.active.condition.icon} /></div>)})
          }
          <WeatherContainer
            weatherButtonFilter={this.weatherButtonFilter}
            forecast={this.state.forecast}
            location={this.state.location}
            current={this.state.current}
          />
        </div>
      )
    }
  }
}
