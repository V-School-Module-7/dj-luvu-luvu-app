import React from 'react'
import instaLogoB from '../Images/SocialLogos-IGb.png'
import fBB from '../Images/SocialLogos-FBb.png'
import tB from '../Images/SocialLogos-Tb.png'
import mCB from '../Images/SocialLogos-MCb.png'
import yTB from '../Images/SocialLogos-YTb.png'

function Social() {   
    return(
        <div className='social'>
            <h2>SOCIAL</h2>
            <a href="https://www.instagram.com/djluvaluva/"><img src={instaLogoB} alt="blah"/></a>
            <a href="https://www.facebook.com/DJ-Luva-Luva-187865534566746/"><img src={fBB} alt="blah"/></a>
            <a href="https://twitter.com/djluvaluva?lang=en"><img src={tB} alt="blah"/></a>
            <a href="https://www.mixcloud.com/djluvaluva/"><img src={mCB} alt="blah"/></a>
            <a href="https://www.youtube.com/user/dJluvaluva26"><img src={yTB} alt="blah"/></a>
        </div>
    )
}

export default Social