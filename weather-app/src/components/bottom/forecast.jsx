import React from 'react';


export default class Forecastday extends React.Component {

    render() {
        return (
            <div className="forecast-container">
                <div className="image"><img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="forecast image"></img></div>
                <div className="text">Sunny</div>
            </div>
        )
    }
}