import React, { useLayoutEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Soundcloud from './Soundcloud'
import UpcomingShows from './UpcomingShows'
import About from './About'
import Social from './Social'
import Video from './Video'
// import LuvaHomeImage from '../Images/Luva-1c.jpg'
import LuvaHomeImage2 from '../Images/Luva-14-c.jpg'
var Scroll = require('react-scroll')
var scroller = Scroll.scroller;


function Home(props) {

    useLayoutEffect(() => {
        
        scroller.scrollTo(props.location.state && props.location.state.section)
    }, [])
    // console.log(props.location)
    // console.log(props.location.state)
    
    return(
        <div className='homeContainer'>
            <img src={LuvaHomeImage2} alt='DJ Luva Luva' className='homeImage'/>
            <UpcomingShows className='upcomingShowsContainer' id='upcomingShows'/>
            <Video className='videoContainer' id='video'/>
            <Soundcloud className='soundCloudContainer' id='soundcloud'/>
            <About className='aboutContainer' id='about'/>
            <Social className='socialContainer' id='social'/>
            
        </div>
    )
}

export default withRouter(Home)