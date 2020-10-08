import React,{useState} from "react";
import "./styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { calculationactions } from './../../actions/index'

//function component as an arrow function
const Weather = () => {
  const result = useSelector(state => state.calculations.result);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    const toServer = {
      "city": city,
    }
    dispatch(calculationactions.wheather(toServer));
  };

  return (
    <section className="main-cont">
      <form className="main" data-test="main" onSubmit={handle}>
        <h1 className="head" data-test="header">
          Weather
        </h1>
        <input type="text" placeholder="Enter City" maxLength="50" value={city}  onChange={(e) => setCity(e.target.value)} />
        <button type="submit" data-test="button">
          Get Forecast
        </button>
        <div className="weather-info">
          <p>Date : {result.date}</p>
          <p>City : {result.city}</p>
          <p>Temperature in Fahrenheit: {result.temperatureF} °F</p>
          <p>Temperature in Celsius: {result.temperatureC} °C</p>
        </div>
      </form>
    </section>
  );
};

export default Weather;
