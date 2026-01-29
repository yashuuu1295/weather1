import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=madanapalle&units=metric&appid=18dcebc5a9e399f78818907511424fd9"
      )
      .then(res => setWeather(res.data));
  }, []);

  return (
  <div className="weather-box">
    <h1 className="title">Weather App</h1>

    <div className="details">
      <h2 className="place">{weather?.name}</h2>
      <span className="degree">{weather?.main?.temp}°</span>
      <p className="unit">Celsius</p>
    </div>
  </div>
);

};

export default Comp;