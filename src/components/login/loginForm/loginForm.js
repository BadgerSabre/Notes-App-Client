import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './loginForm.css'

import { verifyLogin } from '../../../actions/login'

const LoginForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({email: '', password: ''})

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        loginStatus()
    }

    const loginStatus = async () => {
        dispatch(verifyLogin(formData)).then( (data) => {
            console.log(data)
        })
        
    }

    return (
        <form id='login-form' onSubmit={handleFormSubmit}>
            <div className='form-group row'>
                <label htmlFor='useremail' className='col-sm-3 col-form-label'><b>Email</b></label>
                <div className='col-sm-8'>
                    <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type='email' className='form-control' id='useremail' placeholder='Email@email.com'></input>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor='userpassword' className='col-sm-3 col-form-label'><b>Password</b></label>
                <div className='col-sm-8'>
                    <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type='password' className='form-control' id='userpassword' placeholder='Password'></input>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type='submit' className='btn btn-success'>Sign In</button>
            </div>
        </form>
    )
}

export default LoginForm;