import React, { useState } from 'react'
import { Calendar } from 'react-calendar'

function Booking(props) {
    const [events, setEvents] = useState({
        date: new Date(),
    })

    const onChange = (date) => {
        setEvents({ date })
    }
    console.log(events.date)
    return(
        <div>
            <Calendar
                onChange={onChange}
                value={events.date}
            />
        </div>
    )
}

export default Booking