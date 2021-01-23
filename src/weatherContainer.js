import React, { Component } from 'react'
import WeatherCard from './weatherCard.js'
import CurrentDay from './currentDay.js'
import ForecastDay from './forecastDay.js'

export default class weatherContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: ''
        }

        //function bindings
        this.daySwitch = this.daySwitch.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount = () => {
        //Adds the active className to the default day
        document.getElementById(`day ${this.props.forecast[0].date}`).classList.add("active")

        //Calls the getTime function
        this.getTime();
    }

    getTime = () => {
        let twentyHour = this.props.location.localtime.split(" ")[1];
        let twelveHour = twentyHour.split(":")[0]
        let minutes = twentyHour.split(":")[1]

        if(twelveHour > 12) {
            let converted = `${twelveHour-12}:${minutes}`
            this.setState({
                currentTime: converted
            })
        } else {
            let converted = `${twelveHour}:${minutes}`
            this.setState({
                currentTime: converted
            })
        }
    }


    //Function used to switch view of different days from default current day to the info of the day belonging to button
    daySwitch = (date) => {
        if(this.props.forecast[0].date === date) {

            //Adds active className to first button, removes it from the others 
            document.getElementById(`day ${this.props.forecast[0].date}`).classList.add("active")
            document.getElementById(`day ${this.props.forecast[1].date}`).classList.remove("active")
            document.getElementById(`day ${this.props.forecast[2].date}`).classList.remove("active")

            //Adds hidden className to the other buttons, but removes it from this one
            document.getElementById(this.props.forecast[0].date).classList.remove("hidden")
            document.getElementById(this.props.forecast[1].date).classList.add("hidden")
            document.getElementById(this.props.forecast[2].date).classList.add("hidden")
        } else if(this.props.forecast[1].date === date) {

            //Adds active className to second button, removes it from the others 
            document.getElementById(`day ${this.props.forecast[0].date}`).classList.remove("active")
            document.getElementById(`day ${this.props.forecast[1].date}`).classList.add("active")
            document.getElementById(`day ${this.props.forecast[2].date}`).classList.remove("active")
            
            //Adds hidden className to the other buttons, but removes it from this one
            document.getElementById(date).classList.remove("hidden")
            document.getElementById(this.props.forecast[2].date).classList.add("hidden")
            document.getElementById(this.props.forecast[0].date).classList.add("hidden")
        } else {

            //Adds active className to third button, removes it from the others 
            document.getElementById(`day ${this.props.forecast[0].date}`).classList.remove("active")
            document.getElementById(`day ${this.props.forecast[1].date}`).classList.remove("active")
            document.getElementById(`day ${this.props.forecast[2].date}`).classList.add("active")

            //Adds hidden className to the other buttons, but removes it from this one
            document.getElementById(this.props.forecast[2].date).classList.remove("hidden")
            document.getElementById(this.props.forecast[1].date).classList.add("hidden")
            document.getElementById(this.props.forecast[0].date).classList.add("hidden")
        }
        

    }


    render() {
        

        console.log(this.props.forecast[1])


        return (

            <div>
                <div id="weather-container">

                    {/* Day components that are linked to weather card components below */}
                    <CurrentDay date={this.props.forecast[0].date} time={this.state.currentTime} current={this.props.current} location={this.props.location} />
                    <ForecastDay date={this.props.forecast[1].date} forecast={this.props.forecast[1]} location={this.props.location} />
                    <ForecastDay date={this.props.forecast[2].date} forecast={this.props.forecast[2]} location={this.props.location} />

                    {/* Maps the forecast array of objects to fit the WeatherCard Component */}
                    <div id="weather-card-container">
                        {this.props.forecast.map((day) =>{
                        return(
                                <WeatherCard daySwitch={this.daySwitch}
                                            maxTemp={day.day.maxtemp_f}
                                            minTemp={day.day.mintemp_f}
                                            icon={day.day.condition.icon}
                                            date={day.date}
                                />
                        )})}
                    </div>
                </div>
                <p id="signature">Made by Jarrod</p>
            </div>
        )
    }
}
