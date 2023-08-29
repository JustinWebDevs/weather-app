import WeatherForm from "./weatherForm";
import { useState, useEffect } from "react";
import WeatherInterface from "./weatherInterface";
import WeatherLoading from "./weatherLoading";
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const key = "d26a626fea284b46861213512232908";

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  });

  async function loadInfo(city = "bogota") {
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
      );

      const json = await request.json();

      console.log(json);
      setTimeout(() => {
        setWeather(json);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weatherContainer">
      <WeatherForm onChangeCity={onChangeCity} />
      {weather ? <WeatherInterface weather={weather} /> : <WeatherLoading />}
    </div>
  );
}
