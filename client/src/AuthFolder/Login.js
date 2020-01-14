import React, { useState, useContext } from 'react';
// import { Context } from '..Provider';
import { ShowContext } from '../Components/Provider'

import { logoOrange } from '../Images/DJ-Luva-Luva_Dan-orange.png';

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
                console.log(err)
                setErrorMessage(err.response.data.message)
            })
            clearInputs()
    }

    return(
        <div className='loginForm'>
            <form onSubmit={handleSubmit} className=''>
                <img src={logoOrange} className='formLogo' alt='logo' />
                <h3 className='loginHeader'>Log in:</h3>
                <input 
                    onChange={handleChange}
                    value={username}
                    name='username'
                    type='text'
                    placeholder='Username'
                    className='loginFormInput'
                    />
                <input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='loginFormInput'
                    />
                <button type='submit' className='loginButton'>Log In</button>
            </form>
            {
                (errorMessage) &&
                <p className='errorMessage'>{errorMessage}</p>
            }
        </div>
    )

}

export default Login;