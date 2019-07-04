import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Landing from './components/Landing/LandingPage';
import Sales from './components/Sales/SalesPage'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <Route path='/welcome' component={Sales} />
      </div>
    );
  }
}

export default App;
