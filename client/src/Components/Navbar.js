import React from 'react'
import { Link } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'

export default function Navbar() {

    return(
        <div className='nav'>
            <Link exact to='/' >
                <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
            </Link>
            <Link to='/booking' className='navLinks1'>BOOKING</Link>
            <Link to='/music' className='navLinks2'>MUSIC</Link>
            <Link to='/contact' className='navLinks1'>CONTACT</Link>
            <Link to='/about' className='navLinks2'>ABOUT</Link>
        </div>
    )
}