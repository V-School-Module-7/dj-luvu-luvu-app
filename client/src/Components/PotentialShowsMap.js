import React, { useState, useContext, useEffect } from 'react'
import { ShowContext } from './Provider'

function PotentialShowsMap() {

    useEffect(() => {
        getPotentialShow(); 
        //dateChange()
    }, [])

    const { potentialShows, addShow, getPotentialShow, editPotentialShow, deletePotentialShow } = useContext(ShowContext)
    const [ shortDate, setShortDate ] = useState('')

    
    const mappedPotentialShows = potentialShows.map(show => {
        return <div className='potentialShowDiv' 
                    key={show._id}>
                    <p><b>Client Name:</b> {show.name}</p>
                    <p><b>Phone:</b> {show.phone}</p>
                    <p><b>Email:</b> {show.email}</p>
                    <p><b>Notes:</b> {show.emailBody}</p>
                    <p><b>Venue:</b> {show.venue}</p>
                    <p><b>Location:</b> {show.location}</p>
                    <p><b>Show Time:</b> {show.time}</p>
                    <p><b>Show Date:</b> {show.date.slice(0, 10)}</p>
                    <p>{show.type}</p>
                    <p><b>Venue Link:</b> <a href={'http://'+show.url} target="_blank" rel="noopener noreferrer" >{show.url}</a></p>
                    <button onClick={() => addShow(show)} className='djButton'>Approve Show</button>
                    {/* <button onClick={() => editPotentialShow(show._id)}>Edit Show</button> */}
                    <button onClick={() => deletePotentialShow(show._id)} className='djButton'>Delete Show</button>
                </div>
    })
    

    return(
        <div className='potentialShowsMap'>
            {
                potentialShows[0] ?
                <>
                    {mappedPotentialShows}
                </>
                :
                <>
                    <h3 className='noShows'>NO SHOWS NEED APPROVAL</h3>
                </>
            }
        </div>
    )
}

export default PotentialShowsMap