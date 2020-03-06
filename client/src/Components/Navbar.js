import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

import Dropdown from 'react-bootstrap/Dropdown'


function Navbar(props) {
    const path = props.history.location.pathname

    return(
        <div className='nav'>
            { path === '/' ?
                <a onClick={() => window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                    })}>
                    <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
                </a>
                :
                <Link exact to='/' >
                    <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
                </Link>
            }
            {/* <Link to='/booking' className='navLinks1'>BOOKING</Link> */}
{/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            
                <Dropdown className='dropdownMain'>
                    <button className='btn navLinks1' data-toggle='collapse' data-target='#navbarCollapse'>
                        BOOK ME
                    </button>
                    <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                        <Link to='/bookingCorporate' className='dropdown-item navlinkcolor'>CORPORATE</Link>
                        <Link to='/bookingPrivate' className='dropdown-item navlinkcolor'>PRIVATE</Link>
                    </div>
                </Dropdown>
            
{/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            { path === '/' ?
                <ScrollLink
                    activeClass='active'
                    to='soundcloud'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='navLinks2'>
                    MUSIC
                </ScrollLink>
                :
                //<Link to='/' className='navLinks2' >MUSIC</Link>
                <Link to={{ pathname: "/", state: { section: "soundcloud" }}} className='navLinks2' >MUSIC</Link>
            }
            <Link to='/contact' className='navLinks1'>CONTACT</Link>
            { path === '/' ?
                <ScrollLink
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='navLinks2'>
                    ABOUT
                </ScrollLink>
                :
                //<Link to='/' className='navLinks2' >ABOUT</Link>
                <Link to={{ pathname: "/", state: { section: "about"}}} className='navLinks2' >ABOUT</Link>
            }
        </div>
    )
}

export default withRouter(Navbar)