import axios from "axios";
import { useState } from "react";

import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  function handelCityChange(e) {
    setCity(e.target.value);
  }

  const featchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"9ae2200eb82722de0ffc52f3ea098a71"}`
      );
      setWeather(response);
      setCity("");
    } catch (error) {
      console.log("Error while featching error data");
    }
  };

  function handelClick() {
    featchWeather();
  }
  return (
    <div className="weather-container mt-4">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handelCityChange}
      />
      <button onClick={handelClick}>Get Weather</button>
      {weather && (
        <div>
          <h2 className="font-bold">{weather.data.name}</h2>
          <p>Temp : {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
