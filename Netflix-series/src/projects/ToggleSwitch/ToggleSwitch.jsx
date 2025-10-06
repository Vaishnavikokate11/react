import { useState } from "react";
import "./ToggleSwitch.css";
import {IoIosSwitch} from "react-icons/io";
import { FaUser } from "react-icons/fa";
export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleTOggleSwitch = () =>{
        setIsOn(!isOn);
    }

    const cheackSwitch = isOn ?  "On" : "Off";
    const toggleBG = {backgroundColor: isOn ?  "#4caf50" : "grey"}
    return (
        <>
        <h1 style={{color:"#000", textAlign:"center"}}>Toggle Switch <IoIosSwitch style={{color:"red", textAlign:"center"}}/> <FaUser /></h1>
        <div className="toggle-switch" 
        style={toggleBG} onClick={handleTOggleSwitch}>
            
            <div className={`switch ${cheackSwitch}`}>
                <span className="switch-state">{cheackSwitch}</span>
            </div>
        </div>
        </>
    )
}