import { useState } from "react"


export const Counter = () =>{

    const [count, setCount] = useState(0);

    // const handleButoon = () =>{
    //     setCount(count+1);
    // }
    return(
        <div className="container-state" style={{textAlign: "center"}}>
            <h1>useState Hook!</h1>
            <br></br>
            <p>{count}</p>
            <button className="state-button" onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}