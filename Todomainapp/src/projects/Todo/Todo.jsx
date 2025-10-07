import {  useState } from "react";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { TodoFrom } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";


export const Todo = () =>{
    

    const [task, setTask] = useState([]);

    

    
    const handleFormSubmit = (inputValue) =>{
       

        if(!inputValue) return;

        if(task.includes(inputValue)) return;
        
        setTask((prevTask) => [ ...prevTask, inputValue]);

        
        

    }

    //todo date and time
 

 //deleted data using button and fun
 const handleDeleteTodo = (value) =>{
        const updated = task.filter((curTask) => curTask !== value);
        setTask(updated);
 }

 //deletd all clear all list
 const handleClearButton = () =>{
    setTask([ ]);
 }
    
  

    return <section className="todo-container">
        <header>
            <h1 className="header">Todo List</h1>
            <TodoDateTime/>
            
        </header>
        <TodoFrom onAddTodo={handleFormSubmit} />
        <section className="myUnorderList">
            <ul>
                {
                    task.map((curTask, index) =>{
                        return <TodoList key={index} 
                        data={curTask} 
                        onDeletedTodo = {handleDeleteTodo}/>
                        
                    })
                }
            </ul>

        </section>
        <section>
            <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
        </section>
    </section>
}