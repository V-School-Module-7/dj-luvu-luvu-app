import React, { useContext, useEffect } from 'react'
// import SCPlaceholder from '../Images/Luva-14.jpg'
import ShowsList from './ShowsList'
import { ShowContext } from './Provider'

export default function UpcomingShows() {   

    const { shows, getShows } = useContext(ShowContext)
    useEffect(() => {
        getShows()
    }, [])

    // let showsMap = shows.map((show) => show.hidden)

    return(
        <div className={ shows.some((show) => !show.hidden) ? 
            'upcomingShowsColor'
            :
            'upcomingShows'}>
            <ShowsList type='upcomingShows'/>
        </div>
    )
}
