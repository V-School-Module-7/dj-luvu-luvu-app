import React, { useContext, useEffect } from 'react'
// import { Calendar } from 'react-calendar'
import { ShowContext } from './Provider'

function Booking(props) {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
    }, [])

    // const [events, setEvents] = useState({
    //     date: new Date(),
    // })

    // const onChange = (date) => {
    //     setEvents({ date })
    // }
    // console.log(events.date)

    const result = shows && shows.map(dates => (dates.date))
    // console.log(result)

    return(
        <div style={{height: '800px', width: '600px'}}>
            {/* <Calendar
                onChange={onChange}
                value={events.date}
            /> */}
            <button style={{backgroundColor: 'red', height: '100px', width: '200px'}} onClick={() => getShows()}></button>
        </div>
    )
}

export default Booking