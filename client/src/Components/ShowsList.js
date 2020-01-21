import React, { useContext, useEffect } from 'react'
import { ShowContext } from './Provider'
import Shows from './Shows'

function ShowsList() {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
    }, [])

    const mappedShows = shows.map(show => {
        return(
        <Shows key={show.name}
            name={show.name}
            venue={show.venue}
            location={show.location}
            time={show.time}
            price={show.price}
            url={show.url}
        />
        )
    })
    return(
        <div className='showsList'>
            {mappedShows}
        </div>
    )
}

export default ShowsList