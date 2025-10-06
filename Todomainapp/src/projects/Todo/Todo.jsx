import { useEffect, useState } from "react";
import { MdCheck , MdDeleteForever} from "react-icons/md";
import "./Todo.css";


export const Todo = () =>{
    const [inputValue, setinputValue] = useState("");

    const [task, setTask] = useState([]);

    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) =>{
        setinputValue(value)
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) {
            setinputValue("");
            return;
        }

        setTask((prevTask) => [ ...prevTask, inputValue]);

        setinputValue("");
        

    }

    //todo date and time
 useEffect(() => {
    const interval =  setInterval(() => {
        const now = new Date();
        const formateDate = now.toLocaleDateString();
        const formatTime = now.toLocaleTimeString();
        setDateTime(`${formateDate} - ${formatTime}`)

    }, 1000);

    return clearInterval(interval)

 }, [])
    
  

    return <section className="todo-container">
        <header>
            <h1 className="header">Todo List</h1>
            <h2 className="date-time">{dateTime}</h2>
        </header>
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off"
                     value={inputValue}
                     onChange={(event) => handleInputChange(event.target.value)}></input>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add task</button>
                </div>
            </form>
        </section>
        <section className="myUnorderList">
            <ul>
                {
                    task.map((curTask, index) =>{
                        return <li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <button className="check-btn">
                                <MdCheck/>
                            </button>
                            <button className="delete-btn">
                                <MdDeleteForever/>
                            </button>
                        </li>
                    })
                }
            </ul>

        </section>
    </section>
}