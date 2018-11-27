import React from "react";
import "../components/styles.css";

const LoginForm = () => (
  <div className="signInFormContainer">
    <form className="loginForm">
      <input type="text" placeholder="userName" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
    
  </div>
);

export default LoginForm;
