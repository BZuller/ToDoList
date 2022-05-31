import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/global.css';
import '../styles/Login.css'
import '../routes';

function Login () {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate();

    async function validateLogin(email: string, password: string){
        const {data} = await axios.post('http://localhost:3333/sessions', {
            email, password
        });
        return data.token;
    }

    const handleSubmit = async (expect: React.FormEvent<HTMLFormElement>) => {
        expect.preventDefault();
        const token = await validateLogin(email, password);
        if (token) {
          navigate('/Home');
        }
      }

    return (
    <body>
    <div className="container">
        <form className='LoginForm' onSubmit={handleSubmit}>
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

        <input type="password"
        className="campos"
        placeholder='Senha'
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        />

        <button type="submit" className="LoginBtn">Login</button>

        </form>
    </div>
    </body>
    )
};

export default Login;