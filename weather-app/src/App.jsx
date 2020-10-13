import React from 'react';
import axios from "axios";
import './sass/app.scss'

import TopSection from './components/top';
import BottomSection from './components/bottom';



const WEATHER_KEY = "2db66cfa44f64319a37102115201210";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: "London",
      numForecastDays: 4,
      isLoading: false
    }
  }

  updateWeather() {
    const { cityName, numForecastDays } = this.state;

    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY} &q=${cityName} &days=${numForecastDays}`;
    axios.get(URL)
      .then(response => {
        return response.data;
      }).then((data) => {
        this.setState({
          isLoading: true,
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecastdays: data.forecast.forecastday

        })
      })
      .catch((err) => {
        if (err) {
          console.error("cannot fetch weather date from API", err);
        }
      })

  }

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", (data) => {
      this.setState({ cityName: data }, () => { this.updateWeather(); })

      console.log("LocationName", data);
    })
  }

  render() {
    const { isLoading, cityName, temp_c, isDay, text, iconURL, forecastdays } = this.state;

    return (
      <div className="app-container" >
        <div className="main-container">
          {!isLoading && <h1>Loading Weather...</h1>}
          {isLoading && <div className="top-section"><TopSection
            location={cityName}
            temp_c={temp_c}
            isDay={isDay}
            text={text}
            iconURL={iconURL}
            eventEmitter={this.props.eventEmitter}
          /></div>}
          <div className="bottom-section">
            <BottomSection forecastdays={forecastdays} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
