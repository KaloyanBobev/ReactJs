import React from 'react';


export default class Forecastday extends React.Component {

    render() {
        const { day } = this.props;
        if (!day) return null;

        return (
            <div className="forecast-container">

                <div className="image"><img src={day.condition.icon} alt="forecast"></img></div>
                <div className="text">{day.avgtemp_c}&#176;</div>
                <div className="muted-text">{day.condition.text}</div>
            </div>
        )
    }
}