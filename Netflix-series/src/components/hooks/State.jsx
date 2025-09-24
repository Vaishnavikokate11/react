import { useState } from 'react'
import './EV.css'

export const State = () =>{

    const [count , setCount] = useState(0);

    const handleButtonClick = () =>{
        setCount(() => count+1);

        if(count >= 20){
            alert(" value is not allowed")
        }
        
    }

    const handleButton = () =>{
        setCount(() => count -1);
        if(count < 0){
            alert(" negetive value is not allowed")
        }
    }

    return(
        <>
        <section className='main-div'>
            <h1>{count}</h1>
            <button className='btn-name' onClick={handleButtonClick}>Increment</button>
            <button className='btn-name' onClick={handleButton}>Decrement</button>
        </section>
        </>
    )
}