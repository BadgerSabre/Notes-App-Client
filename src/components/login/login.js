import React, {useState} from 'react'
import './login.css'
import LoginForm from './loginForm/loginForm';
import RegisterForm from './registerForm/registerForm';

const LoginPage = () => {

    const [isSignedUp, toggleForm] = useState(false)

    const handleFormToggle = () => {
        isSignedUp ? toggleForm(false) : toggleForm(true)
    }
    
    return (
        <div id='login-register-container'>
            <div>
                {
                    isSignedUp ? <span>Need to Register? <button className='btn btn-warning mx-2' onClick={handleFormToggle}>Sign Up</button></span>
                    : <span>Already Signed Up? <button className='btn btn-warning mx-2' onClick={handleFormToggle}>Sign In</button></span>
                }
            </div>
            {isSignedUp ? <LoginForm /> : <RegisterForm />}
        </div>
    )
}

export default LoginPage;