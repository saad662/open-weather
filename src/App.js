import "./components/style.css";
import React, { useState } from "react";
import { WeatherCard } from "./components/WeatherCard";

function App() {
  const [tempInfo, setTempInfo] = useState({});
  const [searchValue, setSearchValue] = useState("");


  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=163092b1101b21f8671e19d4645069de`;

      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { speed } = data.wind;
      const { country,sunset } = data.sys;
      const { name } = data;
      const { main: weathermood,description } = data.weather[0];


      const myWeatherInfo = {
        temp,
        pressure,
        humidity,
        speed,
        country,
        name,
        weathermood,
        sunset,
        description,
      };
      setTempInfo(myWeatherInfo);

    }
    catch (error) {
      console.log(error);
    }
  }

  
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Type Any city name" id="search" className="searchTerm" />
          <button className="searchButton" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      <WeatherCard  tempInfo={tempInfo}/>
    </>
  );
}

export default App;
