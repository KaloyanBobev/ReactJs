import React from 'react';
import './style.scss';

export default class Weather extends React.Component {

    render() {
        const { location, last_updated, temp_c, text, iconURL } = this.props;
        return (
            <div className="weather-container">
                <h3 className="header">City: {location} </h3>
                <h3 className="header">Local time:{last_updated.slice(11, 20)} </h3>
                <h3 className="header">Date: {last_updated.slice(0, 10)}  </h3>
                <div className="inner-container">
                    <div className="image"><img src={iconURL} alt="sun"></img></div>
                    <div className="current-weather"> {temp_c}&#176;</div>
                </div>
                <h3 className="footer">{text}</h3>
            </div>
        )
    }
}