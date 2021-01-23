import React, { Component } from 'react'

export default class currentDay extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        
    }
    


    render() {

        let euDate = this.props.current.last_updated.split(" ")[0];
        
        let year = euDate.split("-")[0];
        let month = euDate.split('-')[1];
        let day = euDate.split('-')[2];
        let usDate = `${month} / ${day} / ${year}`
        return (
            <div>
                <div id={this.props.date} className="current-day-container">
                    <div id="current-day-left">
                        <div id="img-wrapper">
                            <img src={this.props.current.condition.icon} alt="bruh"/>
                        </div>
                        <div id="left-info">
                            <h4 id="location-name">{this.props.location.name}, {this.props.location.region}</h4>
                            <h5 id="location-time">{this.props.time} {usDate}</h5>
                            <h4 id="current-temp">Rn: {this.props.current.temp_f}&#176;F</h4>
                        </div>
                    </div>
                    <div id="current-day-right">
                        <p id="current-condition-text">{this.props.current.condition.text}</p>
                        <p id="current-humidity">{this.props.current.humidity} Humidity</p>
                        <p id="current-wind-speed">WS: {this.props.current.wind_mph} mph</p>
                    </div>
            </div>
            

            </div>
        )
    }
}
