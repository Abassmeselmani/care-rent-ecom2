import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import img from "../questionimages/looginimg.jpg";
import './register.css';

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); 
        setPasswordError(""); 

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered successfully:", res.user);
            navigate("/");
        } catch (error) {
            console.log("Error during register:", error);
    
            if (error.code === "auth/weak-password") {
                setPasswordError("Password should be at least 6 characters long.");
            } else if (error.code === "auth/invalid-email") {
                setPasswordError("The email address is not valid.");
            } else if (error.code === "auth/email-already-in-use") {
                setPasswordError("The email is already associated with an account.");
            } else {
                setPasswordError("An error occurred. Please try again.");
            }
        }
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <div className="login-container">
            <img className="login_img" src={img} alt="Login" />
            <div className="login">
                <h1 className="login-title">Register</h1>
                <form className="login-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            id="name"
                            className="login-input"
                            placeholder="Enter your name"
                        />
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            className="login-input"
                            placeholder="Enter your email"
                        />
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            id="password"
                            className="login-input"
                            placeholder="Enter your password"
                        />
                    </div>
        
                    <button type="submit" className="login-btn">Register</button>
                    {passwordError && <p className="error-message">{passwordError}</p>}
        
                    <p className="login-ask">Do you have an account? <a onClick={handleLogin} className="link" href="#">Log In</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
