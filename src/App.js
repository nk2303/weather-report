import React, {useState} from 'react';
import './App.css';
import weather from 'weather-gov-api'
import UsCities from './UsCities';

function App() {

  const [selectCity, setSelectCity] = useState("Choose city")

  const getWeather = (lat, long) => {
    weather.getForecast('default', 40.71, -74.01)
      .then(data => { console.log(data.data.properties.periods[0])})
      .catch(err => console.log(err))
  }
  getWeather()
  const getCoordinates = city => {
    console.log(city)
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    getCoordinates(selectCity)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Weather App</h1>
        <form onSubmit={handleSubmit}>
        <label>
          PICK LOCATION
        </label>
        <select value={selectCity} onChange={e => setSelectCity(e.target.value)}>
            {UsCities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        <input type="submit" value="Submit" />
      </form>
        <p>WEATHER</p>
      </header>
    </div>
  );
}

export default App;
