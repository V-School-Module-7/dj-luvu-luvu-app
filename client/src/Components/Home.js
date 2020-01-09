import React from 'react'
import Soundcloud from './Soundcloud'
import UpcomingShows from './UpcomingShows'
import About from './About'
import Social from './Social'

export default function Home() {
    return(
        <div>
            <Soundcloud />
            <UpcomingShows />
            <About />
            <Social />
        </div>
    )
}