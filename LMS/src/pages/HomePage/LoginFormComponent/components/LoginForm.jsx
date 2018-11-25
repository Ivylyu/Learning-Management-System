import React from 'react';
import '../components/styles.css';

const LoginForm = () => (
    <div>
     <form>
    <input type="text" placeholder = "userName"></input>
    <input type="password" placeholder = "password"></input>
    </form>
    <button>Login</button>
    </div>
)

export default LoginForm;