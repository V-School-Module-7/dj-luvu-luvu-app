import React from 'react'
import SCPlaceholder from '../Images/Luva-14.jpg'
import ShowsList from './ShowsList'
import video from '../Images/IMG_0076.mp4'

export default function UpcomingShows() {   
    return(
        <div className='upcomingShows'>
            <video loop="true" autoplay="autoplay" controls="controls" muted id='video'>
                
                <source src={video} type='video/mp4' codecs="avc1.4d002a, mp4a.40.2"></source>
            </video>
                {/* <script>
                    document.getElementById('vid').play()
                </script> */}
            <div className='quoteDiv'>
                <h1 className='quote'>"WORK HARD, PLAY HARD"</h1>
                <h1 className='quoteLuva'>-DJ LUVA LUVA</h1>
            </div>
            {/* <ShowsList /> */}
        </div>
    )
}
