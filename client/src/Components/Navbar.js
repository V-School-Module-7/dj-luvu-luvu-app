import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return(
        <div>
            <Link exact to='/' className='navbarLink'>
                <img src='./Images/DJ-Luva-Luva_Dan-orange.png' />
            </Link>
            <Link to='/booking' className='navbarLink'>BOOKING</Link>
            <Link to='/music' className='navbarLink'>MUSIC</Link>
            <Link to='/contact' className='navbarLink'>CONTACT</Link>
            <Link to='/about' className='navbarLink'>ABOUT</Link>
        </div>
    )
}