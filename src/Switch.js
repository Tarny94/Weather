import React, {useState} from "react";
import { Switch } from "@mui/material";



export const ControllerSwitched = ({tempC, tempF }) => {

    const [checked, setChecked] = useState(true);

    const handleChange = (event ) => {
      setChecked(event.target.checked);
    };
    console.log(tempC, tempF)
    
    return (
        <div>
            <h3>{checked ? tempC + ' ℃'  : tempF + '℉'}
            <Switch 
            checked = {checked}
            onChange = {handleChange}
            inputProps ={{'aria_label': 'controlled' }}
            /></h3>
        </div>
    )
}