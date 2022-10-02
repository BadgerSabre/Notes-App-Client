import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './registerForm.css'
import { registerUser } from '../../../actions/register'

const RegisterForm = () => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({email: '', name: '', password: ''})

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleRegister()
    }

    const handleRegister = () => {
        dispatch(registerUser(formData))
    }

    return (
        <form id='register-form' onSubmit={handleFormSubmit}>
            <div className='form-group row'>
                <label htmlFor='register-useremail' className='col-sm-3 col-form-label'><b>Email</b></label>
                <div className='col-sm-8'>
                    <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type='email' className='form-control' id='register-useremail' placeholder='Email@email.com'></input>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor='username' className='col-sm-3 col-form-label'><b>Name</b></label>
                <div className='col-sm-8'>
                    <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type='text' className='form-control' id='username' placeholder='First Last'></input>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor='register-userpassword' className='col-sm-3 col-form-label'><b>Password</b></label>
                <div className='col-sm-8'>
                    <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type='password' className='form-control' id='register-userpassword' placeholder='Password'></input>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type='submit' className='btn btn-primary'>Sign Up</button>
            </div>
        </form>
    )
}

export default RegisterForm;