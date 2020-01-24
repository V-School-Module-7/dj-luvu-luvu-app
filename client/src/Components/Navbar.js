import React, {useLocation} from 'react'
import { Link, withRouter } from 'react-router-dom'
import logoDanOrange from '../Images/DJ-Luva-Luva_Dan-orange.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Navbar(props) {
    const path = props.history.location.pathname

    // const testPush = () => {
    //     this.props.history.push('/').then(
    //         window.scrollTo(0, 0)
    //     )
    // }

    return(
        <div className='nav'>
            <Link exact to='/' >
                <img src={logoDanOrange} alt='DJ Luva Luva Logo' className='navbarLogo' />
            </Link>
            <Link to='/booking' className='navLinks1'>BOOKING</Link>
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
                <Link to='/' className='navLinks2' >MUSIC</Link>
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
                <Link to='/' className='navLinks2' >ABOUT</Link>
            }
        </div>
    )
}

export default withRouter(Navbar)