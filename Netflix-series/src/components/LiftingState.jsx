import { useState } from "react"

export const LiftingState = () =>{
    const [inputvalue, setInputvalue] = useState(""); // lifting this for parent
    return(
        <>
        <InputComponenet inputvalue={inputvalue} setInputvalue={setInputvalue}/>
        <DisplayComponeet inputvalue={inputvalue} />
        </>
    )
}

const InputComponenet = ({inputvalue, setInputvalue}) =>{
    

    return(
        <>
        <input type="text" placeholder="enter your name" 
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}></input>
        </>
    )
}

const DisplayComponeet = ({inputvalue}) => {
    return(
        <p>This is display input value: {inputvalue}</p>
    )
}