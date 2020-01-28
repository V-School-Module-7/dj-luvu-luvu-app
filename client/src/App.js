import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { ShowContext } from './Components/Provider'

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeAboutStyles.scss';
import './StylesFolder/ContactForm.scss';
import './StylesFolder/UpcomingShows.scss';

import Navbar from './Components/Navbar'
import Login from './AuthFolder/Login'
import Home from './Components/Home';
import Soundcloud from './Components/Soundcloud'
import UpcomingShows from './Components/UpcomingShows'
import About from './Components/About'
import Social from './Components/Social'
import BookingForm from './Components/BookingForm'
import ContactForm from './Components/ContactForm'

function App() {
  const { token } = useContext(ShowContext)

  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/luvaluvaonly' render={() => token ? <Redirect to='/djhome'/> : <Login/> } />
        <Route exact path='/' component={Home}></Route>
        <Route path='/booking' component={BookingForm}></Route>
        <Route path='/contact' component={ContactForm}></Route>
      </Switch>
    </div>
  );
}

export default App;