import React from "react";
import Header from "../components/Header";
import Todoitem from "../components/Todoiterm";
import Button  from "../components/Button";
import "./style.css"
import CounterComponend from "../components/CounterComponend";
const App = () => {
  return (
    <div className="todo-container">
      <CounterComponend/>
      <Header header = "Todo"/>
      <Todoitem text = "Eat"/>
      <Todoitem completed = {true} text = "Code" />
      <Todoitem text = "Play"/>
      <Todoitem text = "Sleep"/>
      <Button/>
    </div>
  )


}
export default App;