import React, { useContext, useEffect } from 'react'
import { ShowContext } from './Provider'

function PotentialShowsMap() {
    const { potentialShows, addShow, getPotentialShow, editPotentialShow, deletePotentialShow } = useContext(ShowContext)

    useEffect(() => {
        getPotentialShow()
    }, [])

    const mappedPotentialShows = potentialShows.map(show => {
        return <div className='potentialShowDiv' 
                    key={show._id}>
                    <p>{show.name}</p>
                    <p>{show.phone}</p>
                    <p>{show.email}</p>
                    <p>{show.emailBody}</p>
                    <p>{show.venue}</p>
                    <p>{show.location}</p>
                    <p>{show.time}</p>
                    <p>{show.date}</p>
                    <p>{show.type}</p>
                    <p>{show.url}</p>
                    <button onClick={() => addShow(show)} >Approve Show</button>
                    {/* <button onClick={() => editPotentialShow(show._id)}>Edit Show</button> */}
                    <button onClick={() => deletePotentialShow(show._id)}>Delete Show</button>
                </div>
    })

    return(
        <div className='potentialShowsMap'>
            {mappedPotentialShows}
        </div>
    )
}

export default PotentialShowsMap