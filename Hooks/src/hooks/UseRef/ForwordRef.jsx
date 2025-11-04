import { useId, useRef, forwardRef } from "react"

export const ForwordRef = () => {
    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        // guard against null refs
        const userVal = username.current ? username.current.value : "";
        const passVal = password.current ? password.current.value : "";
        console.log(userVal, passVal);
    }

    return (
        <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input ref={username} label="username" />
        <BeforeReact19Input ref={password} label="password" />
             <button>Submit</button>

        </form>
    )
}

//I need to create parent componenet 

const BeforeReact19Input = (props) =>{
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input id={id} type="text" ref={props.ref} />
        </div>
    )

};