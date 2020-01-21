import React, { useState } from 'react'
import { ShowContext } from './Provider'

export default function Shows(props) {

    const { day, setDay } = useState()
    const { month, setMonth } = useState()

    const handleDay = () => {
        const dateString = props.date.toString()
        const dayString = dateString.slice(8, 10)
        return setDay(dayString)
    }
    const handleMonth = () => {
        const dateString = props.date.toString()

        const monthString = dateString.slice(5, 7)
        if (monthString === '01') {
            return setMonth('JAN')
        } else if (monthString === '02') {
            return setMonth('FEB')
        } else if (monthString === '03') {
            return setMonth('MAR')
        } else if (monthString === '04') {
            return setMonth('APR')
        } else if (monthString === '05') {
            return setMonth('MAY')
        } else if (monthString === '06') {
            return setMonth('JUN')
        } else if (monthString === '07') {
            return setMonth('JUL')
        } else if (monthString === '08') {
            return setMonth('AUG')
        } else if (monthString === '09') {
            return setMonth('SEP')
        } else if (monthString === '10') {
            return setMonth('OCT')
        } else if (monthString === '11') {
            return setMonth('NOV')
        } else {
            return setMonth('DEC')
        }
    }

    return(
        <div className='showCard'>
            <div className='showCalendarDiv'>
                <h3 className='showMonth'>{ month }</h3>
                <h3 className='showDay'>{ day }</h3>
            </div>
            <div className='venueInfoDiv'>
                <h2 className='showInfo'>{props.name}</h2>
                <h2 className='showInfo'>{props.venue}</h2>
                <h2 className='showInfo'>{props.location}</h2>
            </div>
            <div className='venueLinkDiv'>
                <a href={props.url}>
                    <button>VENUE</button>
                </a>
            </div>
        </div>
    )
}