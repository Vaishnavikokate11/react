import { useState } from "react";
import  Counts from "./MemoCount";


export const ReactMemo = () =>{
    
        const [count, setCount] = useState(0);
        
            // const handleButoon = () =>{
            //     setCount(count+1);
            // }
            return(
                <>
                <div className="container-state" style={{textAlign: "center"}}>
                    <h1>use Memo!</h1>
                    <br></br>
                    <p>{count}</p>
                    <button className="state-button" onClick={() => setCount(count+1)}>Increment</button>
                </div>
                <Counts/>

                </>
            
            )
        
    
}
