import React, { useState, useEffect } from 'react'
import '../StylesFolder/SoundcloudStyles.scss'
// import Player from 'react-soundcloud-player'

export default function Soundcloud() {
    const [song, setSong] = useState('')

    const handleChange = (source) => {
        setSong(source)
    }

    console.log(song)
    return(
        <div className='soundcloud'>
                <div className='songIframe'>
                    <iframe width="400" height="380" scrolling="no" frameborder="no" allow="autoplay" src={song ? song : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/710858575&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}></iframe>
                </div>
                <div className='allSongsDiv'>
                    {/* one */}
                    <hr className='songSpacer' />
                    <div onClick={() => handleChange('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/710858575&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true')} className='songDiv'>
                        <img src="https://i1.sndcdn.com/artworks-000635229793-t2tz6m-t500x500.jpg" alt='Song 1 Image'/>
                        <p className='songTitle'>Rich Brian X Chungha - These Nights (Luva X Prinz) Remix</p>
                    </div>
                    {/* two */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/644740053&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 2 Image"/>
                        <p className='songTitle'>T - Pain - F.B.G.M. Vs S.O.S. Luva Luva Edit</p>
                    </div>
                    {/* three */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233071565&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")}>
                        <img src="https://i1.sndcdn.com/artworks-000136154039-r1b84h-t500x500.jpg" alt="Song 3 Image"/>
                        <p className='songTitle'>Andru Markel - 2025 (Luva & J-Pan Bootleg)</p>
                    </div>
                    {/* four */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fcorporate-mix%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 4 Image"/>
                        <p className='songTitle'>Corporate Mix</p>
                    </div>
                    {/* five */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fdance-mix-vol-2%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 5 Image"/>
                        <p className='songTitle'>Dance Mix Vol. 2</p>
                    </div>
                    {/* six */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fjanuary-2019-dance-mix%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 6 Image"/>
                        <p className='songTitle'>Dance Mix Vol. 1</p>
                    </div>
                    {/* seven */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Flate-night-slc-vol-1%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 7 Image"/>
                        <p className='songTitle'>Late Night SLC Vol .1</p>
                    </div>
                    {/* eight */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fsummer-time-energy%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 8 Image"/>
                        <p className='songTitle'>Summer Time Energy</p>
                    </div>
                </div>
        </div>
    )
}