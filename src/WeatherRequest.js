import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";

const WetherRequest = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=cb8874ebb1344d34817173858220805&q=London&aqi=no"
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(weather);
  return <div>{weather && <h2>{weather.location.region}</h2>}</div>;
};

export default WetherRequest;
