import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { ShowContext } from './Components/Provider'

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeAboutStyles.scss';
import './StylesFolder/ContactForm.scss';


import Navbar from './Components/Navbar'
import Login from './AuthFolder/Login'
import Home from './Components/Home';
import Soundcloud from './Components/Soundcloud'
import UpcomingShows from './Components/UpcomingShows'
import About from './Components/About'
import Social from './Components/Social'
import Booking from './Components/Booking'
import ContactForm from './Components/ContactForm'

function App() {
  const { token } = useContext(ShowContext)

  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/luvaluvaonly' render={() => token ? <Redirect to='/djhome'/> : <Login/> } />
        <Route exact path='/' component={Home}></Route>
        <Route path='/booking' component={Booking}></Route>
        <Route path='/contact' component={ContactForm}></Route>
      </Switch>
    </div>
  );
}

export default App;