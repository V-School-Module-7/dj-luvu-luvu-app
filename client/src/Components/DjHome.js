import React, { useState, useContext, useEffect } from 'react'
import ShowsList from './ShowsList'
import PotentialShowsMap from './PotentialShowsMap'
import { ShowContext } from './Provider'
import { Link } from 'react-router-dom';
import MyModal from './MyModal'


function DjHome() {

    useEffect(() => {
        getShows()
    }, [])

    const { shows, setShows, addShowDan, getShows, potentialShows, setPotentialShows, getPotentialShow, logout } = useContext(ShowContext)
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
        addShowDan(newShowInfo)
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

        // STATE FOR MODAL
        const [showModal, setShowModal] = useState(false);
        const handleShow = () => setShowModal(true);
        const handleClose = () => setShowModal(false);
    
    return (
        <div>
            <div  className='djTools'>
                <button className='djToolButtonLogout' onClick={() => logout()}>Log Out</button>
                {/* <Link to='/signup' className='signUpLink'><button className='djToolButtonNew'>New Account</button></Link> */}
            </div>
            <div className='DjHomeContainer'>
                <div className='potentialShowsContainer'>
                    <h1 className='formIntroDJ'>POTENTIAL SHOWS:</h1>
                    <PotentialShowsMap /> 
                    <ul>
                        <li className='note'>Potential shows MUST be approved before they will show on the home page.</li>
                        <li className='note'>Date of a show will not be grayed out on the calendar until it has been approved.</li>
                        <li className='note'>Once a potential show has been approved it will show in the current shows list below.</li>
                        <li className='note'>After a show has been approved you will need to delete it from the potential shows list.</li>
                        <li className='note'>Approving a show DOES NOT alert the client that their show has been approved.</li>
                        <li className='note'>To let the client know the show is approved you will need to contact them separately.</li>
                    </ul>
                </div>
                <hr className='DjPageBreak'/>
                <div className='addNewShowsContainer'>
                    <MyModal showModal={showModal} handleClose={handleClose} >
                        <h5 className='modalHead'>SHOW ADDED</h5> 
                        <p className='modalBody'>This show has been added to your current show list below. </p>
                    </MyModal>
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
                            //pattern='[0-9]'
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
                            <label for='dateBlock' className='dateBlock'>BLOCK OFF DATE & HIDE FROM UPCOMING SHOWS</label> 
                            <div className='notesList'>
                                <ul>
                                    <li className='note'>Checking this box will grey out the chosen date from the calendar, but it will not list this show date on your upcoming shows on the homepage.</li>
                                    <li className='note'>This is how you can block out days on your calendar for a vacation or your birthday.</li>
                                </ul>
                            </div>
                        </div>
                        <button type='submit' className='formButtonAdd' onClick={handleShow}>
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
        </div>        
    )
}

export default DjHome