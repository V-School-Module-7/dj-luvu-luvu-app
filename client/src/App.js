import React, { useContext } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { ShowContext } from './Components/Provider'

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeAboutStyles.scss';
import './StylesFolder/ContactForm.scss';
import './StylesFolder/UpcomingShows.scss';
import './StylesFolder/DJHomeStyles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar'
import Login from './AuthFolder/Login'
import Home from './Components/Home';
import BookingForm from './Components/BookingForm'
import ContactForm from './Components/ContactForm'
import DjHome from './Components/DjHome'
import ProtectedRoute from './AuthFolder/ProtectedRoute'

function App(props) {
  const { token } = useContext(ShowContext)

  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/luvaluvaonly' render={() => token ? <Redirect to='/djhome'/> : <Login/> } />
        <Route exact path='/' component={Home}></Route>
        <Route path='/booking' component={BookingForm}></Route>
        <Route path='/contact' component={ContactForm}></Route>
        <ProtectedRoute path='/djhome' component={DjHome}></ProtectedRoute>
      </Switch>
    </div>
  );
}

export default withRouter(App);