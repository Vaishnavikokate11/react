import { useState } from "react";
import "./hooks1.css";

export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

   //if my step is 5 then my count should increses or decrase by 5 
   if (count + step <= 100 && count -step >= 0){
     
    count + step;
    count -step;

   } 

    return (
            <div className="container-state" style={{ textAlign: "center" }}>
                <div className="challenge-box">
                    <h1>useState Challenge!</h1>
                    <br />
                    <p>Count : <span>{count}</span></p>
                    <div>
                        <label>
                            Step:
                            <input
                                type="number"
                                value={step}
                                onChange={e => setStep(Number(e.target.value))}
                            />
                        </label>
                    </div>
                    <div className="grid-three-cols">
                        <button onClick={() => setCount(Math.min(count + step, 100))}>Increment</button>
                        <button onClick={() => setCount(Math.max(count - step, 0))}>Decrement</button>
                        <button onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            </div>
    );
};