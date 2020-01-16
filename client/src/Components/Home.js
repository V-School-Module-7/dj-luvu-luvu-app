import React from 'react'
import Soundcloud from './Soundcloud'
import UpcomingShows from './UpcomingShows'
import About from './About'
import Social from './Social'

export default function Home() {
    return(
        <div className='homeContainer'>
            <img src='./Images/Luva-1c.jpg' alt='DJ Luva Luva' className='homeImage'/>
            <Soundcloud />
            {/* <UpcomingShows /> */}
            <About />
            <Social />
        </div>
    )
}