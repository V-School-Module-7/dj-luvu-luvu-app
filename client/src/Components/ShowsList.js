import React, { useContext, useEffect } from 'react'
import { ShowContext } from './Provider'
import Shows from './Shows'

function ShowsList(props) {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
        
    }, [])

    const mappedShows = (shows.sort(function compare(a, b){
        let dateA = new Date(a.date);
        let dateB = new Date(b.date)
            return dateA - dateB;
        }).map(show => {
        return(
        <Shows key={show._id}
            id={show._id}
            name={show.name}
            phone={show.phone}
            email={show.email}
            venue={show.venue}
            location={show.location}
            time={show.time}
            date={show.date}
            type={props.type}
            url={show.url}
            hidden={show.hidden}
        />
        )
    }))

    return(
        <div className='showsList'>
            { 
                shows ?
                <div className='mapShows'>
                    {mappedShows}
                </div>
                :
                <div className='showEventFiller'>
                            {/* <p className='test'>test</p> */}
                </div>
            }
        </div>
    )
}

export default ShowsList