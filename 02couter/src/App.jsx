import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import { set } from 'mongoose'

function App() {
//useState /use to manage state in functional component
const [counter, setCounter] = useState(15)
  //let counter = 15;
const addValue = () =>{
 // counter +=1;
 setCounter(counter + 1);
//setCounter(prevCouter => prevCouter+1); //imporatant to interview question batch update the value is 19 then 21 then 23
 if(counter == 20){
   alert("Counter reached 20");
   setCounter(0);
 }
  //console.log("Counter value", counter);
  
  
}
const removeValue = ()=>{
  setCounter(counter-1);
  if(counter <= 0){
    alert("Counter reached 0 no negetive value allowed");
    setCounter(0);
  }
}
  

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value: {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
