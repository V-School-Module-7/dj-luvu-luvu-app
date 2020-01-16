import React from 'react'
import SCPlaceholder from '../Images/Luva-14.jpg'
import ShowsList from './ShowsList'

export default function UpcomingShows() {   
    return(
        <div >
            <img src={SCPlaceholder} alt='DJ Luva Luva' className='imageSquare'/>
            <ShowsList />
        </div>
    )
}
