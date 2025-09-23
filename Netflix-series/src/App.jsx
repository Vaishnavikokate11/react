//import { EventHandling } from "./components/EventHandling";
import { EventPropogation } from "./components/EventPropogation";
//import { EventProps } from "./components/EventProps";
//import Movies from "./components/Movies"
import "./components/Netflix.css"
import "./components/NetFlix.module.css";


function App() {
  

  return (
    <section className="container">
      {/*<h1 className="card-heading">List of Best Netflix Series</h1>
      
      <Movies/>*/}
      {/*<EventHandling/>*/}
     {/* <EventProps/>*/}
     <EventPropogation/>
     
    </section>
  )
}

export default App

