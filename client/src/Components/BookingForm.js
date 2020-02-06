import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import bookingImage from '../Images/Luva-6cropped.jpg'
import { Calendar } from 'react-calendar'
import Booking from './Booking'
import { ShowContext } from './Provider'

export default function BookingForm() {
    const { shows, getShows } = useContext(ShowContext)
    const [ fullName, setFullname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ emailBody, setEmailbody ] = useState('')
    const [ events, setEvents ] = useState('')
    // const [ showDate, setShowDate ] = useState('')
    // const [ showPrice, setShowPrice ] = useState('')

    // useEffect(() => {
    //     getShows()
    // }, [])
    
    const inputs = {
        fullName,
        email,
        phone,
        emailBody,
        events,
        // showPrice
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
        setEvents('')
        // setShowPrice('')
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
            } else if ( name === 'events' ){
                setEvents(value)
            // } else if ( name === 'showPrice' ){
            //     setShowPrice(value)
            } else if ( name === 'emailBody' ){
                setEmailbody(value)
        console.log(value)
        }
    }

    const dateChange = (date) => {

        const dateString = date.toString()
        const shortDate = dateString.slice(0, 15)
        setEvents(shortDate)
        console.log(shortDate)
    }

    // const alterDate = (date) => {
    //     const shortDate = date.slice(0, 14)
    //     return shortDate
    // }
    const result = shows && shows.map(dates => (dates.date))
    var testDate = '2020-02-03'

return(
    <div className='contactContainer'>
        <form className='contactForm' onSubmit={handleSubmit}>
            {/* <h3 className='formIntro'>Please fill out the form below to contact me!</h3> */}
            <h3 className='formIntro'>PLEASE FILL OUT FORM TO<br/>REQUEST TO BOOK AN EVENT</h3>
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
            <input type='text'
                    placeholder='Date of Show'
                    name='events'
                    className='formInput'
                    required='required'
                    value={events}
                    onChange={dateChange}
            />
            {/* <input type='text'
                    placeholder='Offer Price'
                    name='showPrice'
                    className='formInput'
                    required='required'
                    value={showPrice}
                    onChange={handleChange}
            /> */}
            <textarea type='text'
                    placeholder='Please Fill Out With Any Other Helpful Info Regarding the Potential Show'
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
        <div className='bookingImage'>
            <Calendar
                onChange={dateChange}
                value={events.date}
                //tileDisabled={() => testDate}
                calendarType="US"
            />
            {/* <Booking /> */}
        </div>
    </div>
    )
}