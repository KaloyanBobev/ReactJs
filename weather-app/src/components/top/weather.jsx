import React from 'react';
import './style.scss';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="weather-container">
                <h3 className="header">Location name</h3>
                <div className="inner-container">
                    <div className="image"><img src={require('../../resources/images/sun.jpg')} alt="sun"></img></div>
                    <div className="current-weather"> 10&#176;</div>
                </div>
                <h3 className="footer">Sunny</h3>
            </div>
        )
    }
}