import React from 'react';

import './SideNav.scss';
import Clock from '../Clock/Clock';

const KEY = "2b5a2ac09bf7d75d7be4aec6429fa12f";
const BASE = "https://api.openweathermap.org/data/2.5/";

export default class SideNav extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "Стара Загора",
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
            .catch(error => {
                console.log("An error occurred while trying to fetch data from Foursquare: " +
                    error)
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

    dateBuilder(d) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    render() {
        return (
            <div className="side-nav">
                <Clock />
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
                    <div className="location">{this.state.name}, {this.state.country}</div>
                    <div className="date">{this.dateBuilder(new Date())}</div>
                </div>

                <div className="weather-box">
                    <div>{this.state.weather}</div>
                    <div className="temp">{Math.round(this.state.temp)}&#176;C</div>
                </div>
            </div>

        )
    }
}