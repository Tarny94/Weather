import React, { useEffect, useState } from "react";

import { featchWeater } from "../Utils/Api";
import { Filter } from "./Filter";
import { WeatherCard } from "./WeatherCard";



const WeaterRequest = () => {
  const [weater, setWeater] = useState(null);
  const [region, setRegion] = useState(null)
 
  // const changeRegion = (e) => { 
  //   setRegion(e.target.value)
  // }
 
  const handleRegion = () => {
    featchWeater(region).then((data)=>{
      console.log(data.data)
     setWeater(data.data)  

   }).catch(e => {
    console.log(e)
  })
  
  }

  const handleRegionKey = (e) => { 
     if(e.key === 'Enter' ) {
      handleRegion();
     } 
  } 

  
  return (
    <div>
      <div>
        <h1>Weater</h1>
        <Filter
          handleRegionKey={handleRegionKey}
          handleRegion={handleRegion}
          setRegion={setRegion}
        />
      </div>
      {weater ? <WeatherCard weather={weater} /> : null}
    </div>
  )
};

export default WeaterRequest;
