import React from 'react'
import currentDay from './currentDay'

export default function weatherCard(props) {

    let splitDate = props.date.split('-')
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2]

    return (
        <a className="weather-card-button" href="#" id={`day ${props.date}`} onClick={() => props.daySwitch(props.date)}>
            <div className="weather-card">
                <p id="date-header">{month} / {day} / {year}</p>
                <img src={props.icon} alt="icon" className="card-icon" />
                <p>Hi: {props.maxTemp}&#176;F</p>
                <p>Lo: {props.minTemp}&#176;F</p>
            </div>
        </a>
    )
}
