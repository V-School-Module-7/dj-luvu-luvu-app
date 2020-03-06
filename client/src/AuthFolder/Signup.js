import React, { useState, useContext } from 'react';
import { ShowContext } from '../Components/Provider';
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'
import { Link } from 'react-router-dom';

function Signup(props)  {
    const { signup } = useContext(ShowContext)

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
       
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
            if( name === 'username' ){
                setUsername(value)
            } else {
            setPassword(value)
        }
        console.log(value)
    }

    const clearInputs = () => {
        setUsername('')
        setPassword('')
        setErrorMessage('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signup({username, password})
            .then(() => {
            })
            .catch(err => {
                setErrorMessage(err.response.data.message)
            })
            clearInputs()
    }

    return(
        <div className='loginSignupForm'>
            <form onSubmit={handleSubmit} className='form'>
            <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='formLogo' />
            <h3 className='formHeader'>CREATE NEW LOGIN FOR <br />DJ HOMEPAGE</h3>
                {/* <h2 className='formHeader'>Sign Up</h2> */}
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

                <button type='submit' className='formButton'>Create Account</button>
                <Link to='/login' className='formHeader'>CLICK HERE TO LOG IN</Link>
            </form>
            {
                (errorMessage) && 
                <p className='errorMessage'>{errorMessage}</p>
            }
        </div>
    )
}

export default Signup;