import { useState } from "react";
import "./register.css";

export const Login = () =>{
    const [user, setUser]= useState({
        firstName: "",
        password: ""
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(user);
        
    }

    return (
        <section className="container-state">
            <div className="container1">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                            <div className="form-grid">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                    <input type="text" name="firstName" placeholder="Enter your first name" 
                                    required 
                                    value={user.firstName}
                                    onChange={handleInputChange}/>
                                </label>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <input type="password" name="password" placeholder="Enter your password"
                                     required 
                                     value={user.password}
                                    onChange={handleInputChange}/>
                                </label>
                            </div>
                             <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <button type="submit">Login</button>
                            </div>
                            </form>
            </div>
            </section>
    )
}