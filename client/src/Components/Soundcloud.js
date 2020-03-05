import React, { useState, useEffect } from 'react'
import '../StylesFolder/SoundcloudStyles.scss'
// import Player from 'react-soundcloud-player'

export default function Soundcloud() { 
    const [song, setSong] = useState('')
    // useEffect(() => {
        // window.onbeforeunload = function(){return};
    // }, [song])

    const handleChange = (source) => {
        setSong(source)
    }

    // console.log(song)
    return(
        <div className='soundcloud'>
                <div className='songIframe'>
                    <iframe scrolling="no" frameBorder="no" allow="autoplay" src={song ? song : 'https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fcorporate-mix%2F'} title='Default Song'></iframe>
                </div>
                <div className='allSongsDiv'>
                    {/* one */}
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fcorporate-mix%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 4"/>
                        <div className='songTitle'>CORPORATE MIX</div>
                    </div>
                    {/* two */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fdance-mix-vol-2%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 5"/>
                        <div className='songTitle'>DANCE MIX VOL. 2</div>
                    </div>
                    {/* three */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fjanuary-2019-dance-mix%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 6"/>
                        <div className='songTitle'>DANCE MIX VOL. 1</div>
                    </div>
                    {/* four */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Flate-night-slc-vol-1%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 7"/>
                        <div className='songTitle'>LATE NIGHT SLC VOL. 1</div>
                    </div>
                    {/* five */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjluvaluva%2Fsummer-time-energy%2F")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 8"/>
                        <div className='songTitle'>SUMMER TIME ENERGY</div>
                    </div>
                    {/* six */}
                    <hr className='songSpacer' />
                    <div onClick={() => handleChange('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/710858575&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true')} className='songDiv'>
                        <img src="https://i1.sndcdn.com/artworks-000635229793-t2tz6m-t500x500.jpg" alt='Song 1'/>
                        <div className='songTitle'>RICH BRIAN X CHUNGHA – THESE NIGHTS (LUVA X PRINZ) REMIX</div>
                    </div>
                    {/* seven */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/644740053&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")}>
                        <img src="https://i1.sndcdn.com/artworks-000560087532-6vh1ah-t500x500.jpg" alt="Song 2"/>
                        <div className='songTitle'>T – PAIN – F.B.G.M. VS S.O.S. LUVA LUVA EDIT</div>
                    </div>
                    {/* eight */}
                    <hr className='songSpacer' />
                    <div className='songDiv' onClick={() => handleChange("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233071565&color=%23ff9533&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")}>
                        <img src="https://i1.sndcdn.com/artworks-000136154039-r1b84h-t500x500.jpg" alt="Song 3"/>
                        <div className='songTitle'>ANDRU MARKEL – 2025 (LUVA & J-PAN BOOTLEG)</div>
                    </div>
                </div>
        </div>
    )
}