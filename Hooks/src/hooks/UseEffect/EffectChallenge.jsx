
import { useEffect, useState } from "react";
export const EffectChallenge = () =>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("vaishu");

   useEffect(() =>{
       // make sure this component always controls the page title
       document.title = ` Count: ${count}`;
   },[count]);

    return(
        <div className="container-use-effect">
         <p>Count : <span>{count}</span></p>
         <button onClick={() => setCount(count+1)}>Increment</button>
         <p>
            Name: <span>{name}</span>
         </p>
         <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>

         </div>

    )

}