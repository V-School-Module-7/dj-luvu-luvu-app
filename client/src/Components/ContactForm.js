import React, { useState } from 'react'
import axios from 'axios'
import MyModal from './MyModal'

export default function ContactForm() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ emailBody, setEmailbody ] = useState('')
    const [ type, setType ] = useState('Contact')

    const inputs = {
        name,
        email,
        phone,
        emailBody,
        type
    }

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const sendMessage = () => {
        console.log(inputs)
        axios
            .post('/send', inputs)
            .then(res => {
                if (res.data.status === 'success') {
                    handleShow()
                } else if (res.data.status === 'fail') {
                    alert("Message failed to send, please try again.")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    const clearInputs = () => {
        setName('')
        setEmail('')
        setPhone('')
        setEmailbody('')
        setType('Contact')
    }
    const handleSubmit = e => {
        e.preventDefault();
        sendMessage();
        clearInputs();
    }
    const handleChange = e => {
        const { name, value } = e.target
            if( name === 'name' ){
                setName(value)
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
    <MyModal showModal={showModal} handleClose={handleClose} >
            <h5 className='modalHead'>Contact Email Sent</h5> 
            <p className='modalBody'>Message sent, DJ Luva Luva will get back to you as soon as possible. </p>
        </MyModal>
        <form className='contactForm' onSubmit={handleSubmit}>
                        <h3 className='formIntro'>PLEASE FILL OUT <br/> TO CONTACT ME</h3>
            <input type='text'
                    placeholder='Full Name'
                    name='name'
                    className='formInput'
                    required='required'
                    value={name}
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
            <input type='hidden' id='Contact' name='type' value='Contact' />

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