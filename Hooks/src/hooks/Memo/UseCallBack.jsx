import { useCallback, useState, memo } from "react";


const Button = memo (({onClick, children}) => {
    console.log(`Rendering children : ${children}`);
    
    return (
        <button onClick={onClick}>{children}</button>
    )
});

export default function UseCallBack() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() =>{
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1)
        
    },[])

    const decrement = useCallback(() =>{
        console.log("decrement inside");
        setCount((prevCount) => prevCount - 1)
        
    },[])

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>

        </div>
    )
}
