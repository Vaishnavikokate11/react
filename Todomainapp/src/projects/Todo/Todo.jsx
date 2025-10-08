import {  useState } from "react";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { TodoFrom } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";
import { setLocalStorageData, getLocalStorageData } from "./TodoLocalStorage";




export const Todo = () =>{
    
    const [task, setTask] = useState(() => getLocalStorageData())

    const handleFormSubmit = (inputValue) =>{
       
        const {id, content, checked} = inputValue

        if(!content) return; //input field is empty or not

        //if(task.includes(inputValue)) return; //to check id data is alreday exisit or not

        const ifTodoContentMatch = task.find(
            (curTask) => curTask.content === content
        )
        if(ifTodoContentMatch) return;

        //when user fill new data then adding data
        setTask((prevTask) => [ ...prevTask, {id, content, checked}]);   

    }
     //todo add data to local storage
     setLocalStorageData(task);

    //todo date and time
 

 //deleted data using button and fun
 const handleDeleteTodo = (value) =>{
        const updated = task.filter((curTask) => curTask.content !== value);
        setTask(updated);
 }

 //for check todo is done or not

 const handleCheckTodo = (value) =>{
    const updatedTask = task.map((curTask) => {
        if(curTask.content === value){
            return { ...curTask, checked: !curTask.checked}
        }else{
            return curTask;
        }
    })
    setTask(updatedTask)

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
                        return (
                        <TodoList 
                        key={curTask.id} 
                        data={curTask.content} 
                        checked = {curTask.checked}
                        onDeletedTodo = {handleDeleteTodo}
                        onHandleCheck = {handleCheckTodo}
                        />
                        );
                        
                    })
                }
            </ul>

        </section>
        <section>
            <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
        </section>
    </section>
}