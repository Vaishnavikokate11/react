import { useState } from "react";
import "./register.css";


export const Registration = () =>{

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(user);
        

    }

    return(
        <section className="container-state">
            <div className="container1">
            <h2>Signup</h2>
            <h3 style={{color: "skyblue"}}>please sign up here</h3>

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
                                    <span className="label-text">Last Name</span>
                                    <input type="text" name="lastName" placeholder="Enter your last name" 
                                    required
                                    value={user.lastName}
                                    onChange={handleInputChange} />
                                </label>

                                <label className="label">
                                    <span className="label-text">Email</span>
                                    <input type="email" name="email" placeholder="Enter your email"
                                     required 
                                     value={user.email}
                                    onChange={handleInputChange}/>
                                </label>

                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <input type="password" name="password" placeholder="Enter your password"
                                     required 
                                     value={user.password}
                                    onChange={handleInputChange}/>
                                </label>

                                <label className="label">
                                    <span className="label-text">Phone no</span>
                                    <input type="tel" name="phone" placeholder="Enter your phone number"
                                     required 
                                     value={user.phone}
                                    onChange={handleInputChange}/>
                                
                                </label>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <button type="submit">Sign up</button>
                            </div>
                        </form>
            </div>
        </section>

        
    )
}