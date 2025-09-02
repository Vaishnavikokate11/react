import React , {useState}from "react";

const CounterComponend = () =>{
    const [count, setCount] = useState(0);
    

    
    return <div>
        <p>Count Componened - {count}</p>
        <h6>Number is {count%2==0 ? "even": "odd"}</h6>
        
        
        <button onClick={() => setCount(count+1)}>Increment</button>
         <button onClick={() => setCount(count-1)}>Decrement</button>

        
    </div>
}


export default CounterComponend;