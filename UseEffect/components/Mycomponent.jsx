import React , {useEffect, useState}from "react";

const Mycomponent = () =>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);
    useEffect(()=>{
        console.log("my component is mouting");
        return function () {
            console.log("Unmouting");
            
        }
        
    }, [count])

    useEffect(()=>{
        console.log("count is updating ", count);
        return function() {
            console.log("count is changing", count);
            
        }
        
    }, [count])

    
    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={()=> setCount(count+1)}>Update</button>
            <p>Count second is {count1}</p>
            <button onClick={()=> setCount1(count1+1)}>Second update</button>
        </div>
    )
}
export default Mycomponent;