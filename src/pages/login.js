import React from "react";
import img from "../questionimages/looginimg.jpg";
import { useNavigate } from "react-router-dom";


import './login.css';





function Login(){

  const navigate = useNavigate();

  const handleRegister=() => {
    navigate("/register");

  }
    return (


        
        <div className="login-container">
            <img className="login_img" src={img}/>
            <div className="login">
          <h1 className="login-title">Login</h1>
          <form className="login-form" >
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                className="login-input"
                placeholder="Enter your name"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                className="login-input"
                placeholder="Enter your password"
              />
            </div>
    
            <button type="submit" className="login-btn">Login</button>
            <p className="login-ask">Don't have an account? <a onClick={handleRegister} className="link" href="#">Register</a></p>

          </form>
        </div></div>
      );
  
}

export  default Login;