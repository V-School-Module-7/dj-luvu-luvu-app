import React from 'react'
import ShowsList from './ShowsList'
import PotentialShowsMap from './PotentialShowsMap'

function DjHome() {

    // need 
        //function on potential shows map to approve potential shows - test on Thursday
        //instagram key field

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
        // setShowPrice('')
    }
  
const { addShow } = useContext(ShowContext)

const newShowFunction = () => {
    console.log('newShowFunction is being called')
    console.log(newShowInfo)
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

    return (
        <div>
            <div className='potentialShowsContainer'>
                <h1 className='header'>POTENTIAL SHOWS:</h1>
                <PotentialShowsMap />
            </div>
            <div className='addNewShowsContainer'>
                <h1 className='header'>ADD NEW SHOW:</h1>
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
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
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
                    <input type='text'
                        placeholder='Date of Show'
                        name='date'
                        id='date'
                        className='formInputDate'
                        value={events ? events : showDate}
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
                        value={type}
                        onChange={handleChange}
                    />
                    <button type='submit' className='formButton'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='currentShowsContainer'>
                <h1 className='header'>CURRENT SHOW LIST:</h1>
                <ShowsList />
            </div>
        </div>
    )
}

export default DjHome