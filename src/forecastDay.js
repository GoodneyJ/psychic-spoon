import React from 'react'


//Self explanatory functional component that displays information about the related day recieved from the forecast array prop
export default function forecastDay(props) {

    let euDate = props.date.split(" ")[0];
        
    let year = euDate.split("-")[0];
    let month = euDate.split('-')[1];
    let day = euDate.split('-')[2];
    let usDate = `${month} / ${day} / ${year}`

    return (
        <div>
            <div id={props.date} className="current-day-container hidden">
                <div id="current-day-left">
                    <div id="img-wrapper" >
                        <img src={props.forecast.day.condition.icon} alt="bruh"/>
                    </div>
                    <div id="left-info">
                        <h4 id="location-name">{props.location.name}, {props.location.region}</h4>
                        <h5 id="location-time">{usDate}</h5>
                        <h4 id="current-temp">Avg: {props.forecast.day.avgtemp_f}&#176;F</h4>
                    </div>
                </div>
                <div id="current-day-right">
                    <p id="current-condition-text">{props.forecast.day.condition.text}</p>
                    <p id="current-humidity">Avg Humidity: {props.forecast.day.avghumidity}</p>
                    <p id="current-wind-speed">Max WS: {props.forecast.day.maxwind_mph} mph</p>
                </div>
            </div>
        </div>
    )
}
