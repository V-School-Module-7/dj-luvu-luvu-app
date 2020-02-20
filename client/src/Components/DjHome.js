import React, { useState, useContext, useEffect } from 'react'
import ShowsList from './ShowsList'
import PotentialShowsMap from './PotentialShowsMap'
import { ShowContext } from './Provider'

function DjHome() {

    useEffect(() => {
        getShows()
    }, [])

    const { shows, setShows, addShow, getShows, potentialShows, setPotentialShows, getPotentialShow } = useContext(ShowContext)
    const [ newShowInfo, setNewShowInfo ] = useState({
        name: '',
        phone: '',
        email: '',
        venue: '',
        location: '',
        time: '',
        date: '',
        type: '',
        url: 'https://www.',
        hidden: false
})

    // need 
        //function on potential shows map to approve potential shows - test on Thursday
        //instagram key field

    const clearInputs = () => {
        setNewShowInfo({
            name: '',
            phone: '',
            email: '',
            venue: '',
            location: '',
            time: '',
            date: '',
            type: '',
            url: 'https://www.',
            hidden: false
        })
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
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const { name } = e.target
        setNewShowInfo(prevShow => ({
            ...prevShow,
            [name]: value,
        }))
    }

    return (
        <div className='DjHomeContainer'>
            <div className='potentialShowsContainer'>
                <h1 className='formIntroDJ'>POTENTIAL SHOWS:</h1>
                    <PotentialShowsMap /> 
            </div>
            <hr className='DjPageBreak'/>
            <div className='addNewShowsContainer'>
                <h1 className='formIntroDJ'>ADD NEW SHOW:</h1>
                <form className='addShowForm' onSubmit={handleSubmit}>
                    {/* <label for='name'>Client Name:</label> */}
                    <input type='text'
                        placeholder='Name'
                        name='name'
                        id='name'
                        className='formInputDJ'
                        value={newShowInfo.name}
                        onChange={handleChange}
                    />
                    {/* <label for='phone'>Client Phone:</label> */}
                    <input type='tel'
                        placeholder='Phone Number: xxx-xxx-xxxx'
                        name='phone'
                        id='phone'
                        pattern='[0-9]'
                        className='formInputDJ'
                        value={newShowInfo.phone}
                        onChange={handleChange}
                    />
                    {/* <label for='email'>Client Email:</label> */}
                    <input type='email'
                        placeholder='E-mail'
                        name='email'
                        id='email'
                        className='formInputDJ'
                        value={newShowInfo.email}
                        onChange={handleChange}
                    />
                    {/* <label for='venue'>Venue:</label> */}
                    <input type='text'
                        placeholder='Venue Name'
                        name='venue'
                        id='venue'
                        className='formInputDJ'
                        value={newShowInfo.venue}
                        onChange={handleChange}
                    />
                    {/* <label for='location'>Location:</label> */}
                    <input type='text'
                        placeholder='Location of Show'
                        name='location'
                        id='location'
                        className='formInputDJ'
                        value={newShowInfo.location}
                        onChange={handleChange}
                    />
                    {/* <label for='time'>Time:</label> */}
                    <input type='text'
                        placeholder='Time (7:00pm-10:30pm)'
                        name='time'
                        id='time'
                        className='formInputDJ'
                        value={newShowInfo.time}
                        onChange={handleChange}
                     />
                    {/* <label for='date'>Date:</label> */}
                    <input type='date'
                        placeholder='Date of Show'
                        name='date'
                        id='date'
                        className='formInputDJ'
                        value={newShowInfo.date}
                        onChange={handleChange}
                    />
                    {/* <label for='type'>Type:</label> */}
                    <input type='text'
                        placeholder='Show Type'
                        name='type'
                        id='type'
                        className='formInputDJ'
                        value={newShowInfo.type}
                        onChange={handleChange}
                    />
                    {/* <label for='url'>Website Link:</label> */}
                    <input type='text'
                        placeholder='URL must start with: https://www.'
                        name='url'
                        id='url'
                        className='formInputDJ'
                        pattern='https://www.*' size='30'
                        title='URL must start with: https://www.'
                        value={newShowInfo.url}
                        onChange={handleChange}
                    />
                    <div className='dateBlockDiv'>
                        <input type='checkbox' name='hidden' checked={newShowInfo.hidden} id='dateBlock' onChange={handleChange}/>
                        <label for='dateBlock' className='dateBlock'>BLOCK OFF DATE — HIDE FROM UPCOMING SHOWS</label> 
                    </div>
                    <button type='submit' className='formButton'>
                        Submit
                    </button>
                </form>
            </div>
            <hr className='DjPageBreak'/>
            <div className='currentShowsContainer'>
                <h1 className='formIntroDJ'>CURRENT SHOW LIST:</h1>
                {/* <ShowsList /> */}

                {
                    shows[0] ?
                    <>
                        <ShowsList type='UpcomingShowsDJ'/>
                    </>
                    :
                    <>
                        <h3 className='noShows'>NO CURRENT SHOWS</h3>
                    </>
                }
            </div>
        </div>
    )
}

export default DjHome