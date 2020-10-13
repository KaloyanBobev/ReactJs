import React from 'react';
import './style.scss';

export default class Weather extends React.Component {

    render() {
        const { location, temp_c, text, iconURL } = this.props;
        return (
            <div className="weather-container">
                <h3 className="header">{location}</h3>
                <div className="inner-container">
                    <div className="image"><img src={iconURL} alt="sun"></img></div>
                    <div className="current-weather"> {temp_c}&#176;</div>
                </div>
                <h3 className="footer">{text}</h3>
            </div>
        )
    }
}