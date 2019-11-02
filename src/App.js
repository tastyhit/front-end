import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Landing from './components/Landing/LandingPage';
import Sales from './components/Sales/SalesPage'
import Category from './components/Category'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <Route path='/welcome' component={Sales} />
        <Route path='/side' component={Category} />
      </div>
    );
  }
}

export default App;
