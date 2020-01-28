import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Soundcloud from './Soundcloud'
import UpcomingShows from './UpcomingShows'
import About from './About'
import Social from './Social'
// import LuvaHomeImage from '../Images/Luva-1c.jpg'
import LuvaHomeImage2 from '../Images/Luva-14-c.jpg'
var Scroll = require('react-scroll')
var scroller = Scroll.scroller;


function Home(props) {
    // useEffect(() => {
    //     document.documentElement.scrollTop = (scrollVariable)
    // })

    // useEffect(() => {
    //     scroller.scrollTo(props.location.state.section)
    // })
    // console.log(props.location)
    
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

export default withRouter(Home)