import { useState } from "react";
import "./hooks1.css";

export const Controller = () =>{
    const [name, setName] = useState("");

    const handleForm = () =>{
        event.preventDefault();

        // const dateValue = document.querySelector('#inputName').value;
        // console.log(dateValue);
        console.log(name);
        
    }

    const handleControll = () =>{
        setName(event.target.value);
    }
    return(
        <section className="container-state">
            <h1>Controller form</h1>
            <form onSubmit={handleForm}>
                <label>
                    Name:
                    <input id="inputName" name="name" 
                    type="text"
                    value={name} 
                    onChange={handleControll}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}