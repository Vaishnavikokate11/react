import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({ data, onDeletedTodo, checked,  onHandleCheck}) =>{
    return(
        <li  className="todo-item">
            <span className={checked ? "checkList": " notCheckList"}>{data}</span>
                 <button className="check-btn" onClick={() => onHandleCheck(data)}>
                        <MdCheck/>
                </button>
                <button className="delete-btn" 
                onClick={() => onDeletedTodo(data)}>
                        <MdDeleteForever/>
                 </button>
        </li>
    )
}