import React, { useContext, useEffect } from 'react'
import { ShowContext } from './Provider'
import Shows from './Shows'

function ShowsList(props) {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
    }, [])

    const mappedShows = shows.map(show => {
        return(
        <Shows key={show._id}
            name={show.name}
            phone={show.phone}
            email={show.email}
            venue={show.venue}
            location={show.location}
            time={show.time}
            date={show.date}
            type={props.type}
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