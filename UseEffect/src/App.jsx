import { useEffect, useState} from 'react'
import Mycomponent from '../components/Mycomponent';
import Timer from '../components/Timer';


function App() {

  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(()=>{
  //   console.log(" App componenet i am Mounting");
    
  // }, []);

  // return <div className='App'>
  //   {/* {isVisible ? <Mycomponent/>: <></>}
  //   <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button> */}
  // </div>

  return <div className='App'>
    <Timer/>
  </div>
  
  
}

export default App
