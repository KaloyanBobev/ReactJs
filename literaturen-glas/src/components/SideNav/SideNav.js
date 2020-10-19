import React from 'react';

import './SideNav.scss';

const KEY = "2b5a2ac09bf7d75d7be4aec6429fa12f";
const BASE = "https://api.openweathermap.org/data/2.5/";

export default class SideNav extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "София",
            temp: '',
            country: '',
            weather: '',
            feels_like: '',


        }
        this.changeHandler = this.changeHandler.bind(this);
        this.searchTown = this.searchTown.bind(this);

    }

    changeHandler(e) {
        this.setState({ query: e.target.value })

    }

    fetchData() {
        fetch(`${BASE}weather?q=${this.state.query}&units=metric&APPID=${KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    weather: data.weather[0].main,

                    query: ""
                })
                console.log(data);
            })
    }
    componentDidMount() {
        this.fetchData();
    }
    searchTown(event) {
        if (event.key === "Enter") {
            this.fetchData();
        }
    }

    render() {
        return (
            <div className="side-nav">
                <h4>Прогноза за времето</h4>
                <input
                    type="text"
                    className="search-bar"
                    value={this.query}
                    placeholder="въведи град"
                    onChange={this.changeHandler}
                    onKeyUp={this.searchTown}
                />

                <div className="location-box">
                    <div>{this.state.name}, {this.state.country}</div>
                    <div className="date"></div>
                </div>

                <div className="weather-box">
                    <div>{this.state.weather}</div>
                    <div>{Math.round(this.state.temp)}&#176;C</div>
                </div>





            </div>

        )
    }
}