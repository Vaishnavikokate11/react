import { useEffect , useState} from "react";



export const TodoDateTime = () =>{
    const [dateTime, setDateTime] = useState("");
    

        useEffect(() => {
    const interval =  setInterval(() => {
        const now = new Date();
        const formateDate = now.toLocaleDateString();
        const formatTime = now.toLocaleTimeString();
        setDateTime(`${formateDate} - ${formatTime}`)

    }, 1000);

    return () => clearInterval(interval);

 }, [])
     return   <h2 className="date-time">{dateTime}</h2>

    
};