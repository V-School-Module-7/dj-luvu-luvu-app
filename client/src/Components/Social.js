import React from 'react'
import instaLogoB from '../Images/SocialLogos-IGb.png'
import fBB from '../Images/SocialLogos-FBb.png'
import tB from '../Images/SocialLogos-Tb.png'
import mCB from '../Images/SocialLogos-MCb.png'
import yTB from '../Images/SocialLogos-YTb.png'
import instaOne from '../Images/instagram_image_one'
import instaTwo from '../Images/instagram_image_2'
import instaThree from '../Images/instagram_image_3'
import instaFour from '../Images/instagram_image_4'
import instaFive from '../Images/instagram_image_5'
import instaSix from '../Images/instagram_image_6'

function Social() {
    return(
        <div className='social'>
            <h2>SOCIAL</h2>
            <div className='socialLogos'>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaLogoB} alt="blah"/></a>
                <a href="https://www.facebook.com/DJ-Luva-Luva-187865534566746/"><img src={fBB} alt="blah"/></a>
                <a href="https://twitter.com/djluvaluva?lang=en"><img src={tB} alt="blah"/></a>
                <a href="https://www.mixcloud.com/djluvaluva/"><img src={mCB} alt="blah"/></a>
                <a href="https://www.youtube.com/user/dJluvaluva26"><img src={yTB} alt="blah"/></a>
            </div>
            <div className='instaImages'>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaOne} alt=""/></a>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaTwo} alt=""/></a>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaThree} alt=""/></a>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaFour} alt=""/></a>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaFive} alt=""/></a>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaSix} alt=""/></a>
            </div>
        </div>
    )
}

export default Social