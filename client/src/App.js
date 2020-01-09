import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Booking from './Components/Booking'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Social from './Components/Social'
import Soundcloud from './Components/Soundcloud'
import UpcomingShows from './Components/UpcomingShows'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home} ></Route>
      </Switch>
    </div>
  );
}

export default App;