import React from "react";
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder="e-mail" />
            <input type="password" placeholder="password" />
            
            <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
