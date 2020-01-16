import React from 'react'
import '../StylesFolder/SocialStyles.scss'
import instaLogoB from '../Images/SocialLogos-IGb.png'
import fBB from '../Images/SocialLogos-FBb.png'
import tB from '../Images/SocialLogos-Tb.png'
import mCB from '../Images/SocialLogos-MCb.png'
import yTB from '../Images/SocialLogos-YTb.png'
import instaOne from '../Images/instagram_image_one.jpg'
import instaTwo from '../Images/instagram_image_2.jpg'
import instaThree from '../Images/instagram_image_3.jpg'
import instaFour from '../Images/instagram_image_4.jpg'
import instaFive from '../Images/instagram_image_5.jpg'
import instaSix from '../Images/instagram_image_6.jpg'

function Social() {
    return(
        <div className='social'>
            <h2 className='header'>SOCIAL</h2>
            <div className='socialLogos'>
                <a href="https://www.instagram.com/djluvaluva/"><img src={instaLogoB} alt="blah"/></a>
                <a href="https://www.facebook.com/DJ-Luva-Luva-187865534566746/"><img src={fBB} alt="blah"/></a>
                <a href="https://twitter.com/djluvaluva?lang=en"><img src={tB} alt="blah"/></a>
                <a href="https://www.mixcloud.com/djluvaluva/"><img src={mCB} alt="blah"/></a>
                <a href="https://www.youtube.com/user/dJluvaluva26"><img src={yTB} alt="blah"/></a>
            </div>
            <div className='instaImages'>
                <a className='instaOne' href="https://www.instagram.com/djluvaluva/"></a>
                <a className='instaTwo' href="https://www.instagram.com/djluvaluva/"></a>
                <a className='instaThree' href="https://www.instagram.com/djluvaluva/"></a>
                <a className='instaFour' href="https://www.instagram.com/djluvaluva/"></a>
                <a className='instaFive' href="https://www.instagram.com/djluvaluva/"></a>
                <a className='instaSix' href="https://www.instagram.com/djluvaluva/"></a>
            </div>
        </div>
    )
}

export default Social