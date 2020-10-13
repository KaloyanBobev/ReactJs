import React from 'react';

import './style.scss';
import Forecastday from './forecast';
export default class BottomSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const { forecastdays } = this.props;
        return (
            <div className="bottom-container">
                {forecastdays && forecastdays.map((day, idx) => {
                    return <Forecastday key={idx} />
                })}
            </div>
        )
    }
}