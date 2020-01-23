import React from 'react'
import { Link } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {

    return(
        <div className='nav'>
            <Link exact to='/' >
                <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
            </Link>
            <Link to='/booking' className='navLinks1'>BOOKING</Link>
            <ScrollLink
                activeClass='active'
                to='soundcloud'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className='navLinks2'>MUSIC</ScrollLink>
            <Link to='/contact' className='navLinks1'>CONTACT</Link>
            <ScrollLink 
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className='navLinks2'>ABOUT</ScrollLink>
        </div>
    )
}