import React,{useState} from "react";
import "./styles.scss";

//function component as an arrow function
const Weather = () => {

  const [city, setCity] = useState("");
  
  const handle = (e) => {
    e.preventDefault();
    const toServer = {
      "city": city,
     
    }
    console.log(toServer);
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
          <p>Date : {}</p>
          <p>City : {}</p>
          <p>Temperature : {}</p>
        </div>
      </form>
    </section>
  );
};

export default Weather;
