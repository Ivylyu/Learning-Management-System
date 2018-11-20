import React from 'react';

const LoginForm = () => (
    <div>
     <form>
    <input className ="userName" placeholder = "s123"></input>
    <input className="passWord" placeholder = "123456789"></input>
    </form>
    <button className = "loginBtn">Login</button>
    </div>
)

export default LoginForm;