import { useEffect, useState} from 'react'
import Mycomponent from '../components/Mycomponent';
import Timer from '../components/Timer';


function App() {
  const name = "Raj";
  const Rating = "5.6"

  function myGenre() {
    const genre = "Romcom"
    return genre
  }
  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(()=>{
  //   console.log(" App componenet i am Mounting");
    
  // }, []);

  // return <div className='App'>
  //   {/* {isVisible ? <Mycomponent/>: <></>}
  //   <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button> */}
  // </div>
   

  //this is dynamic value declare using jsx
  return <div className='App'> 
    <h2>Name : {name}</h2>  
    <h2> Rating : {Rating}</h2>
    <h3> genre : {myGenre()}</h3>
    <button>Watch now</button>

    
    <Timer/>
    
  </div>
  
  
}

export default App
