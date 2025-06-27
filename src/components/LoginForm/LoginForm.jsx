import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Nome' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Senha' required/>
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" />Lembre-me</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Não possui uma conta?<a href="#">Registre-se</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm