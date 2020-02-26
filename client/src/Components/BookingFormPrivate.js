import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import bookingImage from '../Images/Luva-6cropped.jpg'
import { Calendar } from 'react-calendar'
import Booking from './Booking'
import { ShowContext } from './Provider'
import '../StylesFolder/Calendar.scss'
import CarouselComponent from './CarouselComponent'

import Modal from 'react-bootstrap/Modal'


export default function BookingFormPrivate() {
    const { shows, getShows } = useContext(ShowContext)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ venue, setVenue ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ time, setTime ] = useState('')
    const [ url, setUrl ] = useState('https://www.')
    const [ emailBody, setEmailbody ] = useState('')
    const [ newDate, setDate ] = useState(new Date())

    const [ events, setEvents ] = useState('')
    const [ showDate, setShowDate ] = useState('')
    const [ openModal, setOpenModal ] = useState('')
    // const [ showPrice, setShowPrice ] = useState('')

    useEffect(() => {
        getShows()
    }, [])
    
    const inputs = {
        name,
        email,
        phone,
        emailBody,
        events,
        venue,
        location,
        time,
        showDate,
        url
        // showPrice
    }
    const sendMessage = () => {
        console.log(inputs)
        axios
            .post('/sendBookingPrivate', inputs)
            .then(res => {
                if (res.data.status === 'success') {
                    alert("A message about your private event has been sent, DJ Luva Luva will get back to you as soon as possible.")
                } else if (res.data.status === 'fail') {
                    alert("Message failed to send, please try again.")
                }
                // if (res.data.status === 'success') {
                //     return (
                //     <Modal.Dialog  show={openModal}>
                //         <Modal className='modal fade' id='myModal'>
                //             <Modal.Header className='modal-header'>
                //                 <h5 className='modal-title'>Private Booking Email Sent</h5>
                //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                //                     <span aria-hidden="true">&times;</span>
                //                 </button>
                //             </Modal.Header>
                //             <Modal.Body className='modal-body'>
                //                 <p>A message about your private event has been sent, DJ Luva Luva will get back to you as soon as possible. </p>
                //             </Modal.Body>
                //             <Modal.Footer className='modal-footer'>
                //                 <button className='btn btn-primary' data-dismiss='modal'>Close</button>
                //             </Modal.Footer>
                //         </Modal>
                //     </Modal.Dialog>)
                // } else if (res.data.status === 'fail') {
                
                // }
        
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
        setEvents('')
        setVenue('')
        setLocation('')
        setTime('')
        setShowDate('')
        setUrl('https://www.')
        // setShowPrice('')

        setNewPotentialShowInfo({
            name: '',
            phone: '',
            email: '',
            emailBody: '',
            venue: '',
            location: '',
            time: '',
            date: '',
            type: '',
            url: 'https://www.'
        })
    }
    const [ newPotentialShowInfo, setNewPotentialShowInfo ] = useState({
            name: '',
            phone: '',
            email: '',
            emailBody: '',
            venue: '',
            location: '',
            time: '',
            date: '',
            type: '',
            url: 'https://www.'
    })
    const { addPotentialShow } = useContext(ShowContext)
    
    const newPotentialShowFunction = () => {
        console.log('newPotentialShowFunction is being called')
        console.log(newPotentialShowInfo)
        // e.preventDefault()
        addPotentialShow(newPotentialShowInfo)
            .then(() => {
                clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }
    const handleSubmit = e => {
        e.preventDefault();
        sendMessage();
        clearInputs();
        newPotentialShowFunction()
    }
    const handleChange = e => {
        const { name, value } = e.target
        setNewPotentialShowInfo(prevPotentialShow => ({
            ...prevPotentialShow,
            [name]: value
        }))
            if( name === 'name' ){
                setName(value)
            } else if ( name === 'phone' ){
                setPhone(value)
            } else if ( name === 'email' ){
                setEmail(value)
            } else if ( name === 'venue' ){
                setVenue(value)
            } else if ( name === 'location' ){
                setLocation(value)
            } else if ( name === 'time' ){
                setTime(value)
            } else if ( name === 'date' ){
                setEvents(value)
            // } else if ( name === 'url' ){
            //     setUrl(value)
            // } else if ( name === 'date' ){
            //     setShowDate(value)
            // } else if ( name === 'showPrice' ){
            //     setShowPrice(value)
            } else if ( name === 'emailBody' ){
                setEmailbody(value)
            } else if ( name === 'url' ){
                setUrl(value)
            }
    }

    const dateChange = (date) => {
        const dateString = date.toString()
        const shortDate = dateString.slice(0, 15)
        setEvents(shortDate)
        console.log(shortDate)
        setDate(date)
    }

    // const alterDate = (date) => {
    //     const shortDate = date.slice(0, 14)
    //     return shortDate
    // }
    const result = shows && shows.map(dates => (dates.date))
    console.log(result)
    const checkDateDisable = (data) => {
        return result.includes(new Date(data.date).toISOString())
    }

    // console.log(setNewPotentialShowInfo)

return(
    <div className='bookingContainer'>
        <form className='bookingForm' onSubmit={handleSubmit}>
            {/* <h3 className='formIntro'>Please fill out the form below to contact me!</h3> */}
            <h3 className='formIntro'>PLEASE FILL OUT FORM TO<br/>REQUEST TO BOOK AN EVENT</h3>
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
                    //required='required'
                    value={phone}
                    onChange={handleChange}
            />
            <input type='text'
                    placeholder='Date of Show'
                    name='date'
                    className='formInputDate'
                    required='required'
                    value={events ? events : showDate}
                    onChange={handleChange}
                    //onChange={dateChange}
            />
            <input type='text'
                    placeholder='Time (7:00pm-10:30pm)'
                    name='time'
                    className='formInputTime'
                    //required='required'
                    value={time}
                    onChange={handleChange}
            />
            <input type='text'
                    placeholder='Venue Name'
                    name='venue'
                    className='formInput'
                    //required='required'
                    value={venue}
                    onChange={handleChange}
            />
            <input type='text'
                    placeholder='Location of Show'
                    name='location'
                    className='formInput'
                    //required='required'
                    value={location}
                    onChange={handleChange}
            />
            <input type='url'
                    placeholder='Venue Website must start with: https://www.'
                    name='url'
                    className='formInput'
                    pattern='https://www.*' size='30'
                    //required='required'
                    value={url}
                    onChange={handleChange}
            />
            <textarea type='text'
                    placeholder='Please Fill Out With Any Other Helpful Info Regarding the Potential Show'
                    name='emailBody'
                    className='formInputBody'
                    //required='required'
                    value={emailBody}
                    onChange={handleChange}
            />
            <button type='submit' className='formButton'>
                Submit
            </button>
        </form>
        <div className='bookingCalendarPrivate'>
            <Calendar
                onChange={dateChange}
                value={events.date}
                tileDisabled={checkDateDisable}
                calendarType="US"
            />
            {/* <Booking /> */}
            {/* <div className='carouselContainer'>
                <CarouselComponent />
            </div> */}
        </div>
    </div>
    )
}