import axios from 'axios';
import React, { useState } from 'react';
import './styles/global.css';
import './styles/Login.css';

function Login () {
    const [email, setEmail] = useState<string>("")

    function validateLogin(email: string, password: string){
        axios.get('http://localhost:3333/sessions')
    }

    return (
    <body>
    <div className="container">
        <form className='LoginForm'>
        <h1>Login</h1>
        <input
        type="text"
        className="campos"
        placeholder='Email'
        name="email"
		value={email}
		onChange={(event) => setEmail(event.target.value)}
		required
        />
        <input type="password" className="campos" placeholder='Senha' />
        <button type="button" className="LoginBtn">Login</button>
        </form>
    </div>
    </body>
    )
};

export default Login;