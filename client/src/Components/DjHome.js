import React, { useState, useContext } from 'react'
import ShowsList from './ShowsList'
import PotentialShowsMap from './PotentialShowsMap'
import { ShowContext } from './Provider'

function DjHome() {
    const { shows, setShows, addShow, getShows, potentialShows, setPotentialShows, getPotentialShow } = useContext(ShowContext)
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ venue, setVenue ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ time, setTime ] = useState('')
    const [ date, setDate ] = useState(new Date())
    const [ url, setUrl ] = useState('')
    const [ type, setType ] = useState('')

    const [ newShowInfo, setNewShowInfo ] = useState({
        name: '',
        phone: '',
        email: '',
        venue: '',
        location: '',
        time: '',
        date: '',
        type: '',
        url: ''
})

    // need 
        //function on potential shows map to approve potential shows - test on Thursday
        //instagram key field

    const clearInputs = () => {
        setName('')
        setPhone('')
        setEmail('')
        setVenue('')
        setLocation('')
        setTime('')
        setDate('')
        setType('')
        setUrl('')
    }

    const newShowFunction = () => {
        console.log('newShowFunction is being called')
        addShow(newShowInfo)
            .then(() => {
                clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }

    const handleSubmit = e => {
        e.preventDefault();
        clearInputs();
        newShowFunction()
    }

    const handleChange = e => {
        const { name, value } = e.target
        setNewShowInfo(prevShow => ({
            ...prevShow,
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
                setDate(value)
            } else if ( name === 'type' ){
                setType(value)
            } else if ( name === 'url' ){
                setUrl(value)
            }
    }

    return (
        <div>
            <div className='potentialShowsContainer'>
                <h1 className='header'>Potential Shows:</h1>
                <PotentialShowsMap />
            </div>
            <div className='addNewShowsContainer'>
                <h1 className='header'>Add New Show:</h1>
                <form className='addNewShows' onSubmit={handleSubmit}>
                    <label for='name'>Client Name:</label>
                    <input type='text'
                        placeholder='Name'
                        name='name'
                        id='name'
                        className='formInput'
                        value={name}
                        onChange={handleChange}
                    />
                    <label for='phone'>Client Phone:</label>
                    <input type='tel'
                        placeholder='Phone Number: xxx-xxx-xxxx'
                        name='phone'
                        id='phone'
                        pattern='[0-9]'
                        className='formInput'
                        value={phone}
                        onChange={handleChange}
                    />
                    <label for='email'>Client Email:</label>
                    <input type='email'
                        placeholder='E-mail'
                        name='email'
                        id='email'
                        className='formInput'
                        value={email}
                        onChange={handleChange}
                    />
                    <label for='venue'>Venue:</label>
                    <input type='text'
                        placeholder='Venue Name'
                        name='venue'
                        id='venue'
                        className='formInput'
                        value={venue}
                        onChange={handleChange}
                    />
                    <label for='location'>Location:</label>
                    <input type='text'
                        placeholder='Location of Show'
                        name='location'
                        id='location'
                        className='formInput'
                        value={location}
                        onChange={handleChange}
                    />
                    <label for='time'>Time:</label>
                    <input type='text'
                        placeholder='Time (7:00pm-10:30pm)'
                        name='time'
                        id='time'
                        className='formInputTime'
                        value={time}
                        onChange={handleChange}
                     />
                    <label for='date'>Date:</label>
                    <input type='date'
                        placeholder='Date of Show'
                        name='date'
                        id='date'
                        className='formInputDate'
                        value={date}
                        onChange={handleChange}
                    />
                    <label for='type'>Type:</label>
                    <input type='text'
                        placeholder='Show Type'
                        name='type'
                        id='type'
                        className='formInputDate'
                        value={type}
                        onChange={handleChange}
                    />
                    <label for='url'>Website Link:</label>
                    <input type='text'
                        placeholder='Url'
                        name='url'
                        id='url'
                        className='formInputDate'
                        value={url}
                        onChange={handleChange}
                    />
                    <button type='submit' className='formButton'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='currentShowsContainer'>
                <h1 className='header'>Current Show List:</h1>
                <ShowsList />
            </div>
        </div>
    )
}

export default DjHome