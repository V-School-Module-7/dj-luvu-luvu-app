import React, { useState, useContext, useEffect } from 'react'
import { ShowContext } from './Provider'

export default function Shows(props) {

    useEffect(() => {
        dateChange()
        handleDay()
        handleMonth()
        getShows()
    }, [])

    const [ day, setDay ] = useState('')
    const [ month, setMonth ] = useState('')
    const [ shortDate, setShortDate ] = useState('')

    const { deleteShow, shows, getShows } = useContext(ShowContext)

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
    

    const dateChange = () => {
        const dateString = props.date
        const shortDate = dateString.slice(0, 10)
        setShortDate(shortDate)
        // console.log(shortDate)
    }
    console.log(props)
    // console.log(month)
    // console.log(day)

    const getTodayDate = () => {
       const currentDate = new Date()
       return currentDate
       //if currentDate > date then hide from list
    }
    console.log(getTodayDate())

    return(
        <div className='showCard'>
            { props.type === 'upcomingShows' ?  
                        <>
                        {   props.hidden === true ? 
                            <>
                            </>
                            :
                            <div className='upcomingShowsHome'>
                            <div className='showCalendarDiv'>
                                <h3 className='showMonth'>{ month }</h3>
                                <h3 className='showDay'>{ day }</h3>
                            </div>
                            <div className='venueInfoDiv'>
                                <h2 className='showInfo'>{ props.name }</h2>
                                <h2 className='showInfo'>{ props.venue }</h2>
                                <h2 className='showInfo'>{ props.location }</h2>
                            </div>
                            <div className='venueLinkDiv'>
                                <a href={ props.url }>
                                    <button className='venueButton'>VENUE</button>
                                </a>
                            </div>
                        </div>     
                        }
                        </> 
                :
                <div className='UpcomingShowsDJ'>
                    <div className='showCalendarDivDJ'>
                        <h3 className='showMonthDJ'>{ month }</h3>
                        <h3 className='showDayDJ'>{ day }</h3>
                    </div>
                    <div className='venueInfoDivDJ'>
                        <p className='showInfoDJ'><b>Client Name:</b> { props.name }</p>
                        <p className='showInfoDJ'><b>Venue:</b> { props.venue }</p>
                        <p className='showInfoDJ'><b>Location:</b> { props.location }</p>
                        <p className='showInfoDJ'><b>Date:</b> { shortDate }</p>

                    </div>
                    <div className='venueLinkDivDJ'>
                        <a href={props.url}>
                            <button className='djButton'>Venue Website</button>
                        </a>
                        {/* <button className='djButton' onClick={() => deleteShow(props._id)} >Delete Show</button>                     */}
                        <button className='djButton' onClick={() => deleteShow(props.id)} >Delete Show</button>                    

                    </div>
                </div>
            }
        </div>
        
    )
}