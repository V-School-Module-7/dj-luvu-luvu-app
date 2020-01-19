import React from 'react'
import { Link } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'

export default function Navbar() {

    return(
        <div className='nav'>
            <Link exact to='/' >
                <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
            </Link>
            <Link to='/booking' className='navLinks'>BOOKING</Link>
            <Link to='/music' className='navLinks'>MUSIC</Link>
            <Link to='/contact' className='navLinks'>CONTACT</Link>
            <Link to='/about' className='navLinks'>ABOUT</Link>
        </div>
    )
}