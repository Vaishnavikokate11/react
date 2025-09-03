import React , {useEffect, useState} from "react";

const Timer = () =>{
    const [time, setTime] = useState(0);

    useEffect(()=>{
        //mounted
        const timer = setInterval(()=> setTime(time + 1), 2000)
        console.log("Add new interval");
        

        return function(){
            clearInterval(timer)
            console.log('clear old interval');
            
        }
    }, [time])
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current Time is {time}</p>
        </div>
    )

}
export default Timer;