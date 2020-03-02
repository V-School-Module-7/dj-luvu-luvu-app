import React, { useState, useContext } from 'react';
// import { Context } from '..Provider';
import { ShowContext } from '../Components/Provider'
// import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'

import logoOrange from '../Images/DJ-Luva-Luva_Dan-orange.png';

function Login(props) {
    const { login } = useContext(ShowContext)

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleChange = e => {
        const { name, value } = e.target
        if( name === 'username' ){
            setUsername(value)
        } else {
            setPassword(value)
        }
    }

    const clearInputs = () => {
        setUsername('')
        setPassword('')
        setErrorMessage('')
    }

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password })
            .then(() => {

            })
            .catch(err => {
                console.dir(err)
                setErrorMessage(err.response.data.message)
            })
            clearInputs()
    }

    return(
        <div className='loginSignupForm'>
            <form onSubmit={handleSubmit} className='form'>
                <img src={logoOrange} className='formLogo' alt='DJ Luva Luva Logo' />
                <h3 className='formHeader'>LOG IN:</h3>
                <div className='inputs'>
                    <input 
                        onChange={handleChange}
                        value={username}
                        name='username'
                        type='text'
                        placeholder='Username'
                        className='loginSignupFormInput'
                        />
                    <input
                        onChange={handleChange}
                        value={password}
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='loginSignupFormInput'
                        />
                    <button type='submit' className='formButton'>Log In</button>
                </div>
            </form>
            {
                (errorMessage) &&
                <p className='errorMessage'>{errorMessage}</p>
            }
        </div>
    )

}

export default Login;