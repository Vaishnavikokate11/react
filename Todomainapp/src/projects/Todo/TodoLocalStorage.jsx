
export const getLocalStorageData = () =>{
    
        const rowData = localStorage.getItem("myTodoList");
        return rowData ? JSON.parse(rowData): []; 
    
}

export const setLocalStorageData = (task) =>{
     //todo add data to local storage
    return localStorage.setItem("myTodoList", JSON.stringify(task))
        
    
}