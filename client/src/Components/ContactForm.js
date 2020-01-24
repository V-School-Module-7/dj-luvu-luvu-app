import React, { useState } from 'react'
import axios from 'axios'
import contactImage from '../Images/Luva-5cropped.jpg'

export default function ContactForm() {

    const [ fullName, setFullname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ emailBody, setEmailbody ] = useState('')

    
    const inputs = {
        fullName,
        email,
        phone,
        emailBody,
    }
    const sendMessage = () => {
        console.log(inputs)
        axios
            .post('/send', inputs)
            .then(res => {
                if (res.data.status === 'success') {
                    alert("Message sent, DJ Luva Luva will get back to you as soon as possible.")
                } else if (res.data.status === 'fail') {
                    alert("Message failed to send, please try again.")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    const clearInputs = () => {
        setFullname('')
        setEmail('')
        setPhone('')
        setEmailbody('')
    }
    const handleSubmit = e => {
        e.preventDefault();
        sendMessage();
        clearInputs();
    }
    const handleChange = e => {
        const { name, value } = e.target
            if( name === 'fullName' ){
                setFullname(value)
            } else if ( name === 'email' ){
                setEmail(value)
            } else if ( name === 'phone' ){
                setPhone(value)
            } else if ( name === 'emailBody' ){
                setEmailbody(value)
        console.log(value)
        }
    }

return(
    <div className='contactContainer'>
        <form className='contactForm' onSubmit={handleSubmit}>
            {/* <h3 className='formIntro'>Please fill out the form below to contact me!</h3> */}
            <h3 className='formIntro'>PLEASE FILL OUT <br/> TO CONTACT ME</h3>
            <input type='text'
                    placeholder='Full Name'
                    name='fullName'
                    className='formInput'
                    required='required'
                    value={fullName}
                    onChange={handleChange}
            />
            <input type='email'
                    placeholder='E-mail'
                    name='email'
                    className='formInput'
                    required='required'
                    value={email}
                    onChange={handleChange}
            />
            <input type='tel'
                    placeholder='Phone Number: xxx-xxx-xxxx'
                    name='phone'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    className='formInput'
                    required='required'
                    value={phone}
                    onChange={handleChange}
            />
            <textarea type='text'
                    placeholder='Please Fill Out With Contact Info'
                    name='emailBody'
                    className='formInputBody'
                    required='required'
                    value={emailBody}
                    onChange={handleChange}
            />
            <button type='submit' className='formButton'>
                Submit
            </button>
        </form>
        <div className='contactImage'>
        </div>
    </div>
    )
}