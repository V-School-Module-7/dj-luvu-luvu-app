import React, { useContext, useEffect } from 'react'
// import SCPlaceholder from '../Images/Luva-14.jpg'
import ShowsList from './ShowsList'
import { ShowContext } from './Provider'


export default function UpcomingShows() {   

    useEffect(() => {
        getShows()

    }, [])

    const { shows, getShows } = useContext(ShowContext)
    console.log(shows)
    return(
        <div className={ shows[0] ? 
            'upcomingShowsColor'
            :
            'upcomingShows'}>
            <ShowsList type='upcomingShows'/>
        </div>
    )
}
