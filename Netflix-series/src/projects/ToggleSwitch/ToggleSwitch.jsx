import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleTOggleSwitch = () =>{
        setIsOn(!isOn);
    }

    const cheackSwitch = isOn ?  "On" : "Off";
    const toggleBG = {backgroundColor: isOn ?  "#4caf50" : "grey"}
    return (
        <div className="toggle-switch" 
        style={toggleBG} onClick={handleTOggleSwitch}>
            <div className={`switch ${cheackSwitch}`}>
                <span className="switch-state">{cheackSwitch}</span>
            </div>
        </div>
    )
}