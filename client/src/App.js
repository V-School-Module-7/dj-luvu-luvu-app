import React, { useContext } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { ShowContext } from './Components/Provider'

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeAboutStyles.scss';
import './StylesFolder/ContactForm.scss';
import './StylesFolder/UpcomingShows.scss';
import './StylesFolder/DJHomeStyles.scss';
import './StylesFolder/ModalStyles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar'
import Login from './AuthFolder/Login'
import Signup from './AuthFolder/Signup'
import Home from './Components/Home';
import BookingFormCorporate from './Components/BookingFormCorporate'
import BookingFormPrivate from './Components/BookingFormPrivate'
import ContactForm from './Components/ContactForm'
import DjHome from './Components/DjHome'
import ProtectedRoute from './AuthFolder/ProtectedRoute'

function App(props) {
  const { token } = useContext(ShowContext)

  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/luvaluvaonly' render={() => token ? <Redirect to='/djhome'/> : <Login/> } />
        {/* <Route path='/signup' render={() => token ? <Redirect to='/signup'/> : <Login/> } /> */}
        {/* <ProtectedRoute path='/signup' component={Signup}></ProtectedRoute> */}
        <Route path='/bookingCorporate' component={BookingFormCorporate}></Route>
        <Route path='/bookingPrivate' component={BookingFormPrivate}></Route>
        <Route path='/contact' component={ContactForm}></Route>
        <ProtectedRoute path='/djhome' component={DjHome}></ProtectedRoute>
      </Switch>
    </div>
  );
}

export default withRouter(App);