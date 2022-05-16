import { useEffect, useState } from "react";

import { featchWeater } from "./Api";
import { ControllerSwitched } from "./Switch";



const WetherRequest = () => {
  const [weather, setWeather] = useState(null);
  const [region, setRegion] = useState(null)
  const [tempC, setTempC] = useState()
  const [tempF, setTempF] = useState()

  const changeRegion = (e) => {
    
    setRegion(e.target.value)
  
  }

  const setTemp = () => {
    setTempC(weather.current.temp_c) 
    setTempF(weather.current.temp_f)
  }
   
  const clickButtonLocation = () => {
     
    featchWeater(region).then((data)=>{
      console.log(data.data)
     setWeather(data.data)  
     setTemp(weather)
   }).catch(e => {
    console.log(e)
  })
  
  }

  const enterLocation = (e) => { 
     if(e.key === 'Enter' ) {
       featchWeater(region).then((data)=>{
        
         console.log(data.data)
        setWeather(data.data)
        setTemp(weather)
        
      }).catch(e => {
        console.log(e)
      })

      
     } 
  } 

  
  return <div>
    <div>
      <h1>Weater</h1>
      <input placeholder="Region" onKeyDown={enterLocation} onChange={changeRegion} ></input>
      <button onClick={clickButtonLocation} >ENTER</button>
    </div>
    <div>
      {weather && 
      <div>
      <h2>
         {weather.location.region}
        </h2>
        <h3>
          {weather.location.country}
        </h3>
        {weather && <h4>
          
          <ControllerSwitched 
            tempC = {tempC}
            tempF = {tempF}
            />
          
        </h4>}
            
        <h4>
          Wind: {weather.current.vis_km} km per hour 🍃
        </h4>
        <img src={weather.current.condition.icon} alt='image' />
       </div>}
    </div>
  </div>;
};

export default WetherRequest;
