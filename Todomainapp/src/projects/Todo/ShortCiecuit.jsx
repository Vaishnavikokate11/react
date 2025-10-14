import { useState } from "react"
import "./short.css"

export const ShortCircuit = () =>{
    const [isLogin, setIsLogin] = useState(true);
    const [isUser, setUser] = useState()
    

    return (
        <section className="container-short">
            <h1>Welcome to ShortCircuit Evalution</h1>
            {isLogin && <p className="title2">You are logged in!</p>}
            <p className="title2">
              {isUser ? `Hello ${isUser}` : "You are logged in!"}
            </p>
            <div className="grid-three">
                <button onClick={() => setIsLogin(!isLogin)}>Toggle Login</button>
                <button onClick={() => setUser("Vaishu")}>Set user</button>
                <button onClick={() => setUser()}>Clear User</button>
            </div>
        </section>
    )
}