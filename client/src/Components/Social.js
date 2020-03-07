import React from 'react'
import { Link } from 'react-router-dom';
import '../StylesFolder/SocialStyles.scss'
import instaLogoB from '../Images/SocialLogos-IGb.png'
import fBB from '../Images/SocialLogos-FBb.png'
import tB from '../Images/SocialLogos-Tb.png'
import mCB from '../Images/SocialLogos-MCb.png'
import yTB from '../Images/SocialLogos-YTb.png'
import sCB from '../Images/SocialLogos-SCb.png'

function Social() {
    return(
        <div className='social'>
            <h2 className='header'>SOCIAL</h2>
            <div className='socialLogos'>
                <a href="https://www.instagram.com/djluvaluva/" target="_blank" rel="noopener noreferrer"><img src={instaLogoB} alt="Instagram Logo"/></a>
                <a href="https://www.facebook.com/DJ-Luva-Luva-187865534566746/" target="_blank" rel="noopener noreferrer"><img src={fBB} alt="Facebook Logo"/></a>
                <a href="https://twitter.com/djluvaluva?lang=en" target="_blank" rel="noopener noreferrer"><img src={tB} alt="Twitter Logo"/></a>
                <a href="https://www.mixcloud.com/djluvaluva/" target="_blank" rel="noopener noreferrer"><img src={mCB} alt="MixCloud Logo"/></a>
                <a href="https://soundcloud.com/djluvaluva/tracks" target="_blank" rel="noopener noreferrer"><img src={sCB} alt="SoundCloud Logo"/></a>
                <a href="https://www.youtube.com/channel/UC6zPAY1Cp5aPYkvo90WILew" target="_blank" rel="noopener noreferrer"><img src={yTB} alt="YouTube Logo"/></a>
            </div>
            <div className='instaImages'>
                <a className='instaOne' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
                <a className='instaTwo' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
                <a className='instaThree' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
                <a className='instaFour' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
                <a className='instaFive' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
                <a className='instaSix' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/djluvaluva/"> </a>
            </div>
            <div className='loginLink'>
                <Link to='/luvaluvaonly' className='djLogin'>DJ LOGIN</Link>
            </div>
        </div>
    )
}

export default Social