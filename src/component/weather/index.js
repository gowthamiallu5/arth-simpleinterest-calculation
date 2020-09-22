import React from "react";
import "./styles.scss";

//function component as an arrow function
const Weather = () => {
  const handle = (e) => {
    e.preventDefault();
  };

  return (
    <section className="main-cont">
      <form className="main" onSubmit={handle}>
        <h1 className="head">Weather</h1>
        <input type="text" placeholder="Enter City" maxLength="50" value="" />
        <button type="submit">Get Forecast</button>
        <div className="weather-info">
          <p>City : {}</p>
          <p>Date : {}</p>
          <p>Temperature : {}</p>
        </div>
      </form>
    </section>
  );
};

export default Weather;
