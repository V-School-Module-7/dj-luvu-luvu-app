import React from 'react'
import { Link } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'

export default function Navbar() {

    return(
        <div className='nav'>
            <Link exact to='/' className='navbarLink'>
                <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
            </Link>
            <Link to='/booking' className='navbarLink'>BOOKING</Link>
            <Link to='/music' className='navbarLink'>MUSIC</Link>
            <Link to='/contact' className='navbarLink'>CONTACT</Link>
            <Link to='/about' className='navbarLink'>ABOUT</Link>
        </div>
    )
}