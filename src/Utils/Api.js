import axios from "axios";

export const featchWeater = async (region) => 
await axios
  .get(
    `http://api.weatherapi.com/v1/current.json?key=cb8874ebb1344d34817173858220805&q=${region}&aqi=no`
  )
     
