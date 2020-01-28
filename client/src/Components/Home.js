import React from 'react'
import Soundcloud from './Soundcloud'
import UpcomingShows from './UpcomingShows'
import About from './About'
import Social from './Social'
import LuvaHomeImage from '../Images/Luva-1c.jpg'
import LuvaHomeImage2 from '../Images/Luva-14-c.jpg'


export default function Home() {
    return(
        <div className='homeContainer'>
            <img src={LuvaHomeImage2} alt='DJ Luva Luva' className='homeImage'/>
            <Soundcloud className='soundCloudContainer' id='soundcloud'/>
            <UpcomingShows className='upcomingShowsContainer' id='upcomingShows'/>
            <About className='aboutContainer' id='about'/>
            <Social className='socialContainer' id='social'/>
        </div>
    )
}