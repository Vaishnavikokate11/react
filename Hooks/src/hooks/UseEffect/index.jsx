import { useEffect, useState } from "react"


export const ReactUseEffect = () =>{
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(0);

    useEffect(() =>{
        console.log("count value" , count);
        
    }, [count])

    useEffect(() => {
        setInterval(() =>{
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000)

    },[])
    return(
        <div className="container-use-effect">
        <h1>Hello useEffect !</h1>
        <p>Count : {count}</p>
        <h1>Date : {date}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}